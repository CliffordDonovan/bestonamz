import { Badge } from "@/components/ui/badge";
import { Clock, Flame, TrendingUp, Zap, Star, Award } from "lucide-react";
import { cn } from "@/lib/utils";

interface ConversionBadgeProps {
  type: 'urgency' | 'trending' | 'bestseller' | 'deal' | 'limited' | 'prime' | 'choice' | 'new';
  value?: string | number;
  className?: string;
}

export const ConversionBadge = ({ type, value, className }: ConversionBadgeProps) => {
  const getBadgeContent = () => {
    switch (type) {
      case 'urgency':
        return {
          icon: <Clock className="w-3 h-3" />,
          text: "Limited Stock",
          className: "bg-gradient-to-r from-red-500 to-red-600 text-on animate-pulse border-transparent"
        };
      case 'trending':
        return {
          icon: <TrendingUp className="w-3 h-3" />,
          text: `${value || 12} bought today`,
          className: "bg-gradient-to-r from-green-500 to-green-600 text-on border-transparent"
        };
      case 'bestseller':
        return {
          icon: <Star className="w-3 h-3" />,
          text: "#1 Best Seller",
          className: "bg-gradient-gold text-on border-transparent"
        };
      case 'deal':
        return {
          icon: <Flame className="w-3 h-3" />,
          text: `${value || 'Lightning'} Deal`,
          className: "bg-gradient-to-r from-orange-500 to-red-500 text-on border-transparent pulse-subtle"
        };
      case 'limited':
        return {
          icon: <Zap className="w-3 h-3" />,
          text: "Limited Time",
          className: "bg-gradient-to-r from-purple-500 to-pink-500 text-on border-transparent"
        };
      case 'prime':
        return {
          icon: null,
          text: "Prime",
          className: "bg-amazon text-on border-transparent font-semibold"
        };
      case 'choice':
        return {
          icon: <Award className="w-3 h-3" />,
          text: "Amazon's Choice",
          className: "bg-gradient-to-r from-blue-600 to-blue-700 text-on border-transparent"
        };
      case 'new':
        return {
          icon: <Zap className="w-3 h-3" />,
          text: "New Release",
          className: "bg-gradient-sky text-on border-transparent"
        };
      default:
        return { icon: null, text: '', className: '' };
    }
  };

  const { icon, text, className: badgeClassName } = getBadgeContent();

  return (
    <Badge className={cn(badgeClassName, "shadow-elegant", className)}>
      {icon && <span className="mr-1">{icon}</span>}
      {text}
    </Badge>
  );
};

interface SocialProofProps {
  reviewCount: number;
  purchaseCount?: number;
  className?: string;
}

export const SocialProof = ({ reviewCount, purchaseCount, className }: SocialProofProps) => {
  return (
    <div className={cn("flex flex-wrap gap-2 text-xs text-muted-foreground", className)}>
      <span>({reviewCount.toLocaleString()} reviews)</span>
      {purchaseCount && (
        <span className="text-success font-medium">
          {purchaseCount} bought this week
        </span>
      )}
    </div>
  );
};

interface PriceComparisonProps {
  currentPrice: string;
  originalPrice?: string;
  savings?: string;
  className?: string;
}

export const PriceComparison = ({ currentPrice, originalPrice, savings, className }: PriceComparisonProps) => {
  return (
    <div className={cn("flex items-center gap-2 flex-wrap", className)}>
      <span className="text-lg font-bold text-primary">{currentPrice}</span>
      {originalPrice && (
        <span className="text-sm text-muted-foreground line-through">{originalPrice}</span>
      )}
      {savings && (
        <Badge variant="outline" className="bg-success/10 border-success/30 text-success">
          Save {savings}
        </Badge>
      )}
    </div>
  );
};