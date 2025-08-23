import { Badge } from "@/components/ui/badge";
import { Truck, Clock, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface DeliveryInfoProps {
  isPrime: boolean;
  deliveryDate?: string;
  freeShipping?: boolean;
  className?: string;
}

export const DeliveryInfo = ({ isPrime, deliveryDate, freeShipping = true, className }: DeliveryInfoProps) => {
  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const getDeliveryText = () => {
    if (isPrime) {
      return `Get it by ${deliveryDate || getTomorrowDate()}`;
    }
    return "Standard delivery available";
  };

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {isPrime && (
        <div className="flex items-center gap-2 text-sm">
          <Truck className="w-4 h-4 text-amazon" />
          <span className="font-medium text-amazon">{getDeliveryText()}</span>
        </div>
      )}
      
      <div className="flex items-center gap-2 flex-wrap">
        {isPrime && (
          <Badge className="bg-amazon text-on border-transparent">Prime</Badge>
        )}
        {freeShipping && (
          <Badge variant="outline" className="bg-success/10 border-success/30 text-success">
            FREE Shipping
          </Badge>
        )}
      </div>

      {isPrime && (
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Clock className="w-3 h-3" />
          <span>Order within 4 hours for guaranteed delivery</span>
        </div>
      )}
    </div>
  );
};

interface StockInfoProps {
  inStock: boolean;
  stockLevel?: 'low' | 'medium' | 'high';
  quantity?: number;
  className?: string;
}

export const StockInfo = ({ inStock, stockLevel = 'medium', quantity, className }: StockInfoProps) => {
  const getStockMessage = () => {
    if (!inStock) return "Currently unavailable";
    
    if (quantity !== undefined) {
      if (quantity <= 3) return `Only ${quantity} left in stock`;
      if (quantity <= 10) return `${quantity} left in stock`;
      return "In stock";
    }

    switch (stockLevel) {
      case 'low':
        return "Only 2 left in stock";
      case 'medium':
        return "In stock";
      case 'high':
        return "In stock - order soon";
      default:
        return "In stock";
    }
  };

  const getStockColor = () => {
    if (!inStock) return "text-destructive";
    if (quantity !== undefined && quantity <= 3) return "text-warning";
    if (stockLevel === 'low') return "text-warning";
    return "text-success";
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className={cn("w-2 h-2 rounded-full", inStock ? "bg-success" : "bg-destructive")} />
      <span className={cn("text-sm font-medium", getStockColor())}>
        {getStockMessage()}
      </span>
    </div>
  );
};