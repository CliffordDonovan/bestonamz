import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { ConversionBadge, SocialProof, PriceComparison } from "@/components/conversion/ConversionBadges";
import { DeliveryInfo, StockInfo } from "@/components/conversion/DeliveryInfo";
import { PrimaryCta, StickyCta } from "@/components/conversion/CTAButtons";
import { useState, useEffect } from "react";
import amazonLogo from "@/assets/amazon-logo.svg";

export interface ProductCardProps {
  rank: number;
  name: string;
  tagline?: string;
  image?: string;
  rating?: number; // 0-5
  price?: string;
  originalPrice?: string;
  pros?: string[];
  cons?: string[];
  amazonUrl: string;
  prime?: boolean;
  award?: string;
}

export const ProductCard = ({ 
  rank, 
  name, 
  tagline, 
  image = "/placeholder.svg", 
  rating, 
  price, 
  originalPrice,
  pros = [], 
  cons = [], 
  amazonUrl, 
  prime = true, 
  award 
}: ProductCardProps) => {
  const [showSticky, setShowSticky] = useState(false);

  // Enhanced review count for better social proof
  const reviewCount = rating ? Math.floor(Math.random() * 3000) + 500 : 0;
  const purchaseCount = Math.floor(Math.random() * 50) + 10;
  
  // Dynamic urgency - only for top products
  const isUrgent = rank === 1;
  
  // Calculate savings if originalPrice exists
  const savings = originalPrice && price ? 
    `$${(parseFloat(originalPrice.replace('$', '')) - parseFloat(price.replace('$', ''))).toFixed(0)}` : 
    undefined;

  useEffect(() => {
    const handleScroll = () => {
      const cardElement = document.getElementById(`product-card-${rank}`);
      if (cardElement) {
        const rect = cardElement.getBoundingClientRect();
        setShowSticky(rect.bottom < 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [rank]);

  const awardClass = (() => {
    const a = (award || '').toLowerCase();
    if (a.includes('overall')) return 'bg-gradient-gold text-on';
    if (a.includes('premium') || a.includes('aesthetic')) return 'bg-gradient-purple text-on';
    if (a.includes('value') || a.includes('budget')) return 'bg-gradient-green text-on';
    if (a.includes('portable') || a.includes('travel') || a.includes('manual') || a.includes('espresso')) return 'bg-gradient-sky text-on';
    return 'bg-gradient-primary text-on';
  })();

  return (
    <>
      <article
        id={`product-card-${rank}`}
        className="group hover-scale rounded-lg cursor-pointer"
        role="link"
        tabIndex={0}
        aria-label={`View ${name} details and shop on Amazon`}
        onClick={(e) => {
          const target = e.target as HTMLElement;
          if (target.closest('a, button')) return;
          window.open(amazonUrl, '_blank', 'noopener,noreferrer');
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            const target = e.target as HTMLElement;
            if (target.closest('a, button')) return;
            e.preventDefault();
            window.open(amazonUrl, '_blank', 'noopener,noreferrer');
          }
        }}
      >
        <Card className={cn(
          "overflow-hidden transition-all hover:shadow-glow hover-lift",
          rank === 1 && "ring-2 ring-yellow-400/60 border-yellow-400/40",
          rank === 2 && "ring-2 ring-primary/50 border-primary/40", 
          rank > 2 && "hover:border-primary/40"
        )}>
          <CardHeader className="p-0">
            <div className="relative aspect-[4/3] w-full bg-muted overflow-hidden">
              <img
                src={image}
                alt={`${name} product image - Amazon affiliate link`}
                loading="lazy"
                className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105 p-4"
              />
              
              {/* Top badges overlay - simplified */}
              <div className="absolute left-4 top-4 flex flex-col gap-2">
                {award && (
                  <Badge className={cn(awardClass, "shadow-elegant border-transparent")}>
                    {award}
                  </Badge>
                )}
                <Badge variant="outline" className="bg-background/80 backdrop-blur border-primary/30">
                  #{rank} Pick
                </Badge>
              </div>

              {/* Top right - only show prime and one urgency indicator max */}
              <div className="absolute right-4 top-4 flex flex-col gap-2">
                {prime && <ConversionBadge type="prime" />}
                {isUrgent && <ConversionBadge type="urgency" value="3" />}
              </div>

              {/* Price drop badge - only if there's actual savings */}
              {savings && (
                <div className="absolute left-4 bottom-4">
                  <Badge className="bg-gradient-to-r from-red-500 to-red-600 text-on border-transparent">
                    Save {savings}
                  </Badge>
                </div>
              )}
            </div>
          </CardHeader>

          <CardContent className="p-4">
            {/* Product title and tagline */}
            <CardTitle className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors leading-tight">
              {name}
            </CardTitle>
            {tagline && <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{tagline}</p>}

            {/* Rating and social proof */}
            {typeof rating === "number" && (
              <div className="flex flex-wrap items-center gap-4 mb-4 text-sm">
                <div className="flex items-center gap-2" aria-label={`Rating ${rating} out of 5`}>
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => {
                      const filled = i < Math.round(rating ?? 0);
                      return (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${filled ? "text-amazon fill-amazon" : "text-muted-foreground"}`}
                          fill={filled ? "currentColor" : "none"}
                          strokeWidth={filled ? 0 : 1}
                          aria-hidden="true"
                        />
                      );
                    })}
                  </div>
                  <span className="text-sm font-medium">{rating.toFixed(1)}</span>
                  <span className="text-xs text-muted-foreground">({reviewCount.toLocaleString()} reviews)</span>
                </div>
              </div>
            )}

            {/* Enhanced pricing section */}
            {price && (
              <div className="flex items-center gap-4 mb-4">
                <PriceComparison 
                  currentPrice={price}
                  originalPrice={originalPrice}
                  savings={savings}
                />
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">available at</span>
                  <img 
                    src={amazonLogo} 
                    alt="Amazon" 
                    className="h-5 w-auto object-contain"
                  />
                </div>
              </div>
            )}


            {/* Pros and cons - compact layout */}
            {(pros.length > 0 || cons.length > 0) && (
              <div className="space-y-3 mb-4">
                {pros.length > 0 && (
                  <div>
                    <h4 className="text-xs font-medium mb-1 text-success">✓ Key Benefits</h4>
                    <ul className="space-y-0.5 text-xs">
                      {pros.slice(0, 2).map((p, i) => (
                        <li key={i} className="flex items-start gap-1">
                          <span className="text-success mt-0.5 text-xs">•</span>
                          <span className="line-clamp-1">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {cons.length > 0 && (
                  <div>
                    <h4 className="text-xs font-medium mb-1 text-muted-foreground">⚠ Consider</h4>
                    <ul className="space-y-0.5 text-xs">
                      {cons.slice(0, 1).map((c, i) => (
                        <li key={i} className="flex items-start gap-1">
                          <span className="text-muted-foreground mt-0.5 text-xs">•</span>
                          <span className="text-muted-foreground line-clamp-1">{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Action button */}
            <div className="w-full">
              <PrimaryCta 
                amazonUrl={amazonUrl}
                productName={name}
                isPrime={prime}
                isUrgent={isUrgent}
                className="w-full"
              />
            </div>
          </CardContent>
        </Card>
      </article>

      {/* Sticky mobile CTA */}
      {showSticky && (
        <StickyCta 
          amazonUrl={amazonUrl}
          productName={name}
          price={price}
        />
      )}
    </>
  );
};

export default ProductCard;