import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Shield, Zap, TrendingUp, CheckCircle, Award, Users } from "lucide-react";
import { cn } from "@/lib/utils";

// Import generated images
import heroBg from "@/assets/hero-bg.jpg";
import categoryRobots from "@/assets/category-robots.jpg";
import categoryTvs from "@/assets/category-tvs.jpg";
import categoryChairs from "@/assets/category-chairs.jpg";
import categoryDesks from "@/assets/category-desks.jpg";
import categoryCoffee from "@/assets/category-coffee.jpg";
import categoryMushroom from "@/assets/category-mushroom.jpg";

const featuredCategories = [
  {
    title: "Coffee Grinders",
    description: "Premium brewing starts with the perfect grind",
    href: "/best-coffee-grinders",
    image: categoryCoffee,
    badge: "Most Popular",
    badgeColor: "bg-gradient-primary",
    stats: "50+ Tested"
  },
  {
    title: "Robot Vacuums",
    description: "Intelligent cleaning for modern homes",
    href: "/best-robot-vacuums", 
    image: categoryRobots,
    badge: "Smart Home",
    badgeColor: "bg-gradient-sky",
    stats: "Tech Leader"
  },
  {
    title: "Office Chairs",
    description: "Ergonomic comfort for productive workdays",
    href: "/best-office-chairs",
    image: categoryChairs,
    badge: "Health & Wellness",
    badgeColor: "bg-gradient-green",
    stats: "Expert Tested"
  },
  {
    title: "Premium TVs",
    description: "Cinema-quality entertainment at home",
    href: "/best-tvs",
    image: categoryTvs,
    badge: "4K & Beyond",
    badgeColor: "bg-gradient-purple",
    stats: "Picture Perfect"
  },
  {
    title: "Standing Desks",
    description: "Transform your workspace for better health",
    href: "/best-standing-desks",
    image: categoryDesks,
    badge: "Trending",
    badgeColor: "bg-gradient-gold",
    stats: "Wellness Focus"
  },
  {
    title: "Mushroom Coffee",
    description: "Enhanced focus and natural energy boost",
    href: "/best-mushroom-coffees",
    image: categoryMushroom,
    badge: "Wellness",
    badgeColor: "bg-gradient-green",
    stats: "Natural Power"
  }
];

const trustSignals = [
  {
    icon: Shield,
    title: "Expert Research",
    description: "Our team tests hundreds of products to find the absolute best",
    stat: "500+"
  },
  {
    icon: Award,
    title: "Verified Reviews", 
    description: "Only authentic, tested recommendations make it to our lists",
    stat: "98%"
  },
  {
    icon: Users,
    title: "Happy Shoppers",
    description: "Thousands trust our picks for their purchasing decisions",
    stat: "50K+"
  },
  {
    icon: TrendingUp,
    title: "Success Rate",
    description: "Customer satisfaction with our recommended products",
    stat: "96%"
  }
];

const ModernHomepage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        
        <div className="relative container mx-auto px-6 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <div className="flex justify-center mb-6">
              <Badge className="bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30 backdrop-blur-sm px-4 py-2 text-sm font-medium">
                <Star className="w-4 h-4 mr-2" />
                Trusted by 50,000+ Smart Shoppers
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
              Discover the
              <span className="bg-gradient-gold bg-clip-text text-transparent block">
                Best Products
              </span>
              on Amazon
            </h1>
            
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90 leading-relaxed">
              Stop endless scrolling through reviews. Our experts test hundreds of products 
              to bring you curated lists of winners with honest pros, cons, and direct purchase links.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button variant="hero" size="lg" className="group" asChild>
                <Link to="/best-coffee-grinders">
                  Start Shopping Smart
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <a href="#categories">Browse All Categories</a>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {trustSignals.map((signal, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary-foreground mb-1">
                    {signal.stat}
                  </div>
                  <div className="text-sm text-primary-foreground/80">
                    {signal.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section id="categories" className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="outline">
              <Zap className="w-4 h-4 mr-2" />
              Featured Categories
            </Badge>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Shop by Category
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From tech gadgets to wellness products, discover our expertly curated selections 
              across the most popular shopping categories.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCategories.map((category, index) => (
              <Card 
                key={category.href} 
                className="group overflow-hidden border-0 bg-card/50 backdrop-blur-sm hover-float shadow-card"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <Badge className={cn("text-primary-foreground border-0", category.badgeColor)}>
                      {category.badge}
                    </Badge>
                  </div>
                  
                  <div className="absolute bottom-4 right-4">
                    <div className="text-xs text-primary-foreground/80 bg-background/20 backdrop-blur-sm px-2 py-1 rounded-full">
                      {category.stats}
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {category.description}
                  </p>
                  <Button variant="outline" className="w-full group" asChild>
                    <Link to={category.href}>
                      View Best {category.title}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="outline">
              <CheckCircle className="w-4 h-4 mr-2" />
              Why Trust BestOnAmz
            </Badge>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Expert Research,
              <span className="bg-gradient-primary bg-clip-text text-transparent block">
                Honest Results
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We don't just browse Amazon listings. Our team conducts thorough research, 
              analyzes thousands of reviews, and tests products when possible to deliver 
              unbiased recommendations you can trust.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustSignals.map((signal, index) => (
              <Card key={index} className="text-center p-8 border-0 shadow-card hover-lift bg-card/50 backdrop-blur-sm">
                <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 shadow-elegant">
                  <signal.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
                  {signal.stat}
                </div>
                <h3 className="text-lg font-semibold mb-3">{signal.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {signal.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Ready to Shop Smarter?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of smart shoppers who trust our expert picks. 
            Start with our most popular category and discover your next favorite product.
          </p>
          <Button variant="premium" size="lg" className="group" asChild>
            <Link to="/best-coffee-grinders">
              Explore Coffee Grinders
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ModernHomepage;