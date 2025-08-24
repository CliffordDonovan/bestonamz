import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Clock, ExternalLink } from 'lucide-react';

interface ExitIntentPopupProps {
  onRedirect: (url: string) => void;
  productName?: string;
  amazonUrl?: string;
  productImage?: string;
}

export const ExitIntentPopup = ({ onRedirect, productName, amazonUrl, productImage }: ExitIntentPopupProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let scrollTimeout: NodeJS.Timeout;

    const isMobile = () => window.innerWidth <= 768 || 'ontouchstart' in window;

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse is leaving toward the top of the page (browser UI area)
      if (e.clientY <= 5 && !hasTriggered && !isMobile()) {
        setIsOpen(true);
        setHasTriggered(true);
      }
    };

    // Mobile: trigger on scroll to top attempt (when user tries to refresh or go back)
    const handleScroll = () => {
      if (isMobile() && !hasTriggered && window.scrollY === 0) {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          if (window.scrollY === 0) {
            setIsOpen(true);
            setHasTriggered(true);
          }
        }, 1000);
      }
    };

    // Add delay before enabling detection
    timeout = setTimeout(() => {
      if (isMobile()) {
        document.addEventListener('scroll', handleScroll, { passive: true });
      } else {
        document.addEventListener('mouseleave', handleMouseLeave);
      }
    }, 5000);

    return () => {
      clearTimeout(timeout);
      clearTimeout(scrollTimeout);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('scroll', handleScroll);
    };
  }, [hasTriggered]);

  const handleRedirect = () => {
    if (amazonUrl) {
      window.open(amazonUrl, '_blank', 'nofollow,sponsored,noopener,noreferrer');
      onRedirect(amazonUrl);
    }
    setIsOpen(false);
  };

  const handleStay = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-lg">
        <div className="flex items-center space-x-2 mb-4">
          <Clock className="h-6 w-6 text-orange-500" />
          <DialogTitle className="text-xl font-bold">Wait! Don't Miss Out</DialogTitle>
        </div>
        
        <div className="flex gap-4 items-start">
          {productImage && (
            <div className="flex-shrink-0">
              <img 
                src={productImage} 
                alt={productName || "Product"} 
                className="w-20 h-20 sm:w-24 sm:h-24 object-contain rounded-lg border border-border"
              />
            </div>
          )}
          
          <div className="flex-1">
            <DialogDescription className="text-base mb-6">
              These deals are for a limited time only. Prices can change quickly on Amazon.
              {productName && (
                <span className="block mt-2 font-medium">
                  Check the latest price for {productName} now!
                </span>
              )}
            </DialogDescription>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <Button
            onClick={handleRedirect}
            className="w-full bg-[#FF9900] hover:bg-[#FF9900]/90 text-white font-semibold justify-center"
            size="lg"
          >
            Check Amazon Now
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
          <Button
            onClick={handleStay}
            variant="outline"
            className="w-full justify-center"
            size="lg"
          >
            Continue Reading
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};