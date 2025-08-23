import { Button } from "@/components/ui/button";
import { ShoppingCart, ExternalLink, Heart, Eye, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import amazonLogo from "@/assets/amazon-logo.svg";

interface PrimaryCtaProps {
  amazonUrl: string;
  productName: string;
  isPrime?: boolean;
  isUrgent?: boolean;
  className?: string;
}

export const PrimaryCta = ({ amazonUrl, productName, isPrime = true, isUrgent = false, className }: PrimaryCtaProps) => {
  const handleClick = () => {
    // Track conversion event here if analytics are set up
    window.open(amazonUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <Button
      variant="amazon"
      size="lg"
      onClick={handleClick}
      className={cn("w-full font-semibold text-base hover-lift", className)}
      aria-label={`Check current price for ${productName} on Amazon`}
    >
      <ShoppingCart className="w-5 h-5 mr-2" />
      Check Price on Amazon
      <ExternalLink className="w-4 h-4 ml-2" />
    </Button>
  );
};

interface SecondaryCtaProps {
  amazonUrl: string;
  productName: string;
  variant?: 'price' | 'compare' | 'wishlist' | 'details';
  className?: string;
}

export const SecondaryCta = ({ amazonUrl, productName, variant = 'price', className }: SecondaryCtaProps) => {
  const getButtonContent = () => {
    switch (variant) {
      case 'price':
        return {
          icon: <ExternalLink className="w-4 h-4" />,
          text: "Check Current Price",
          ariaLabel: `Check current price for ${productName} on Amazon`
        };
      case 'compare':
        return {
          icon: <Eye className="w-4 h-4" />,
          text: "View Details",
          ariaLabel: `View detailed specifications for ${productName}`
        };
      case 'wishlist':
        return {
          icon: <Heart className="w-4 h-4" />,
          text: "Add to Wishlist",
          ariaLabel: `Add ${productName} to Amazon wishlist`
        };
      case 'details':
        return {
          icon: <Eye className="w-4 h-4" />,
          text: "Full Details",
          ariaLabel: `View full details for ${productName} on Amazon`
        };
      default:
        return {
          icon: <ExternalLink className="w-4 h-4" />,
          text: "Learn More",
          ariaLabel: `Learn more about ${productName}`
        };
    }
  };

  const { icon, text, ariaLabel } = getButtonContent();

  const handleClick = () => {
    window.open(amazonUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <Button
      variant="amazonOutline"
      size="lg"
      onClick={handleClick}
      className={cn("flex-1", className)}
      aria-label={ariaLabel}
    >
      {icon}
      <span className="ml-2">{text}</span>
    </Button>
  );
};

interface CtaGroupProps {
  amazonUrl: string;
  productName: string;
  isPrime?: boolean;
  isUrgent?: boolean;
  showSecondary?: boolean;
  secondaryVariant?: 'price' | 'compare' | 'wishlist' | 'details';
  className?: string;
}

export const CtaGroup = ({ 
  amazonUrl, 
  productName, 
  isPrime = true, 
  isUrgent = false, 
  showSecondary = true,
  secondaryVariant = 'price',
  className 
}: CtaGroupProps) => {
  return (
    <div className={cn("flex flex-col sm:flex-row gap-3", className)}>
      <div className="flex-1">
        <PrimaryCta 
          amazonUrl={amazonUrl} 
          productName={productName} 
          isPrime={isPrime}
          isUrgent={isUrgent}
        />
      </div>
      {showSecondary && (
        <div className="flex-1">
          <SecondaryCta 
            amazonUrl={amazonUrl} 
            productName={productName} 
            variant={secondaryVariant}
          />
        </div>
      )}
    </div>
  );
};

interface StickyCtaProps {
  amazonUrl: string;
  productName: string;
  price?: string;
  className?: string;
}

export const StickyCta = ({ amazonUrl, productName, price, className }: StickyCtaProps) => {
  return (
    <div className={cn(
      "fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border p-4 z-50 md:hidden safe-area-pb",
      className
    )}>
      <div className="flex items-center justify-between gap-4 max-w-sm mx-auto">
        <div className="flex flex-col min-w-0 flex-1">
          <span className="text-sm font-medium truncate">{productName}</span>
          {price && <span className="text-lg font-bold text-primary">{price}</span>}
        </div>
        <Button
          variant="amazon"
          size="default"
          onClick={() => window.open(amazonUrl, '_blank', 'noopener,noreferrer')}
          className="flex-shrink-0 px-4"
        >
          Check Price
        </Button>
      </div>
    </div>
  );
};