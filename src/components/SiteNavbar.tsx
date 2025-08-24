import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Search, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  { name: "Coffee Grinders", href: "/best-coffee-grinders", popular: true },
  { name: "Mushroom Coffee", href: "/best-mushroom-coffees" },
  { name: "Pimple Patches", href: "/best-pimple-patches" },
  { name: "Robot Vacuums", href: "/best-robot-vacuums", popular: true },
  { name: "Stick Vacuums", href: "/best-stick-vacuums-mop" },
  { name: "TVs", href: "/best-tvs", popular: true },
  { name: "Air Purifiers", href: "/best-air-purifiers" },
  { name: "Standing Desks", href: "/best-standing-desks" },
  { name: "Office Chairs", href: "/best-office-chairs", popular: true },
];

const SiteNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 transition-all duration-300",
      isScrolled 
        ? "bg-background/95 backdrop-blur-md shadow-card border-b" 
        : "bg-background/80 backdrop-blur-sm border-b border-border/50"
    )}>
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-primary rounded-lg shadow-elegant group-hover:shadow-glow transition-all duration-300">
              <Star className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl bg-gradient-primary bg-clip-text text-transparent">
                BestOnAmz
              </span>
              <span className="text-xs text-muted-foreground hidden sm:block">
                Expert Product Reviews
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Categories Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setShowCategories(true)}
              onMouseLeave={() => setShowCategories(false)}
            >
              <Button 
                variant="ghost" 
                className="text-foreground/80 hover:text-foreground font-medium"
              >
                Categories
                <ChevronDown className={cn(
                  "w-4 h-4 transition-transform duration-200",
                  showCategories && "rotate-180"
                )} />
              </Button>
              
              {showCategories && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="w-80 bg-popover border rounded-lg shadow-lg animate-fade-in z-[100] overflow-hidden">
                    <div className="p-6">
                    <h3 className="font-semibold text-sm text-muted-foreground mb-4 flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      Popular Categories
                    </h3>
                    <div className="grid grid-cols-1 gap-2">
                      {categories.map((category) => (
                        <Link
                          key={category.href}
                          to={category.href}
                          className={cn(
                            "flex items-center justify-between p-3 rounded-md hover:bg-accent transition-colors group",
                            location.pathname === category.href && "bg-accent"
                          )}
                          onClick={() => setShowCategories(false)}
                        >
                          <span className="text-sm font-medium group-hover:text-accent-foreground transition-colors">
                            {category.name}
                          </span>
                          {category.popular && (
                            <div className="px-2 py-1 bg-gradient-primary rounded-full">
                              <span className="text-xs text-primary-foreground font-medium">Popular</span>
                            </div>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Links */}
            <div className="flex items-center gap-6">
              <Link to="/best-coffee-grinders" className="text-sm font-medium text-foreground/80 hover:text-foreground story-link transition-colors">
                Coffee Grinders
              </Link>
              <Link to="/best-robot-vacuums" className="text-sm font-medium text-foreground/80 hover:text-foreground story-link transition-colors">
                Robot Vacuums
              </Link>
              <Link to="/best-office-chairs" className="text-sm font-medium text-foreground/80 hover:text-foreground story-link transition-colors">
                Office Chairs
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button 
              variant="cta" 
              size="sm"
              onClick={() => window.open("https://amazon.com?tag=bestonamz0e-20", "_blank", "nofollow,sponsored,noopener,noreferrer")}
            >
              Start Shopping
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t bg-background/95 backdrop-blur-md animate-fade-in">
            <div className="px-4 py-6 space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Popular Categories</span>
              </div>
              {categories.map((category) => (
                <Link
                  key={category.href}
                  to={category.href}
                  className={cn(
                    "flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors",
                    location.pathname === category.href && "bg-muted"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="font-medium">{category.name}</span>
                  {category.popular && (
                    <div className="px-2 py-1 bg-gradient-primary rounded-full">
                      <span className="text-xs text-primary-foreground font-medium">Popular</span>
                    </div>
                  )}
                </Link>
              ))}
              <div className="pt-4 border-t">
                <Button 
                  variant="cta" 
                  className="w-full"
                  onClick={() => {
                    setIsOpen(false);
                    window.open("https://amazon.com?tag=bestonamz0e-20", "_blank", "nofollow,sponsored,noopener,noreferrer");
                  }}
                >
                  Start Shopping
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default SiteNavbar;
