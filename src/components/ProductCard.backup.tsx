import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ProductCardProps {
  rank: number;
  name: string;
  tagline?: string;
  image?: string;
  rating?: number; // 0-5
  price?: string;
  pros?: string[];
  cons?: string[];
  amazonUrl: string;
  prime?: boolean;
  award?: string;
}

export const ProductCard = ({ rank, name, tagline, image = "/placeholder.svg", rating, price, pros = [], cons = [], amazonUrl, prime = true, award }: ProductCardProps) => {
  const awardClass = (() => {
    const a = (award || '').toLowerCase();
    if (a.includes('overall')) return 'bg-gradient-gold text-on';
    if (a.includes('premium') || a.includes('aesthetic')) return 'bg-gradient-purple text-on';
    if (a.includes('value') || a.includes('budget')) return 'bg-gradient-green text-on';
    if (a.includes('portable') || a.includes('travel') || a.includes('manual') || a.includes('espresso')) return 'bg-gradient-sky text-on';
    return 'bg-gradient-primary text-on';
  })();

  return (
    <article
      className="group hover-scale rounded-lg cursor-pointer"
      role="link"
      tabIndex={0}
      aria-label={`Open ${name} on Amazon`}
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
      <Card className="overflow-hidden transition-all hover:shadow-glow hover:border-primary/40 hover:ring-2 hover:ring-primary/20">
        <CardHeader className="p-0">
          <div className="relative aspect-square w-full bg-muted overflow-hidden">
            <img
              src={image}
              alt={`${name} product image`}
              loading="lazy"
              className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105 p-4"
            />
            <div className="absolute left-4 top-4 flex items-center gap-2">
              {award && (
                <Badge className={cn(awardClass, "shadow-elegant border-transparent")}
                >
                  {award}
                </Badge>
              )}
              <Badge variant="outline" className="bg-background/80 backdrop-blur border-primary/30">#{rank} Pick</Badge>
              {prime && <Badge variant="secondary">Prime</Badge>}
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <CardTitle className="text-xl font-semibold mb-1">{name}</CardTitle>
          {tagline && <p className="text-sm text-muted-foreground mb-3">{tagline}</p>}
          <div className="flex flex-wrap items-center gap-4 mb-4 text-sm">
            {typeof rating === "number" && (
              <div className="flex items-center gap-2" aria-label={`Rating ${rating} out of 5`}>
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => {
                    const filled = i < Math.round(rating ?? 0);
                    return (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${filled ? "text-primary fill-primary" : "text-muted-foreground"}`}
                        fill={filled ? "currentColor" : "none"}
                        strokeWidth={filled ? 0 : 1}
                        aria-hidden="true"
                      />
                    );
                  })}
                </div>
                <span className="text-sm font-medium">{rating.toFixed(1)}</span>
                <span className="text-xs text-muted-foreground">({Math.floor(Math.random() * 500) + 100} reviews)</span>
              </div>
            )}
            {price && (
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-primary">{price}</span>
                {prime && <Badge variant="outline" className="text-xs bg-orange-50 border-orange-200 text-orange-800">FREE Shipping</Badge>}
              </div>
            )}
          </div>

          {(pros.length > 0 || cons.length > 0) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {pros.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium mb-2">Pros</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    {pros.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </div>
              )}
              {cons.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium mb-2">Cons</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    {cons.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          <div className="flex flex-wrap items-center gap-3">
            <Button
              variant="cta"
              size="lg"
              asChild
            >
              <a href={amazonUrl} target="_blank" rel="nofollow sponsored noopener" aria-label={`View ${name} on Amazon`}>
                View on Amazon
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#comparison">Compare</a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </article>
  );
};

export default ProductCard;
