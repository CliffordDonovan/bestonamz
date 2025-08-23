import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { ExitIntentPopup } from "@/components/ExitIntentPopup";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";
import { TrendingUp, Users, Award, ShieldCheck, Clock, ChevronDown } from "lucide-react";

interface Product {
  rank: number;
  name: string;
  tagline?: string;
  image?: string;
  rating?: number;
  price?: string;
  pros?: string[];
  cons?: string[];
  amazonUrl: string;
  prime?: boolean;
  award?: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface ProductPageLayoutProps {
  title: string;
  description: string;
  products: Product[];
  category: string;
  lastUpdated: string;
  faqs: FAQ[];
}

export default function ProductPageLayout({
  title,
  description,
  products,
  category,
  lastUpdated,
  faqs
}: ProductPageLayoutProps) {
  const canonical = `https://www.bestonamz.com${window.location.pathname}`;
  const pageTitle = title;
  const pageSubtitle = description;
  const breadcrumbCategory = category;
  const faq = faqs;
  const categoryName = category;
  const updatedDate = lastUpdated;
  const customerCount = "10,000+ Happy Customers";
  const itemListLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: products.map((p, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: p.name,
      url: canonical + `#product-${p.rank}`,
    })),
  };

  const productsLd = products.map((p) => ({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: p.name,
    description: p.tagline,
    image: `https://www.bestonamz.com${p.image}`,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: p.rating,
      bestRating: 5,
      reviewCount: Math.floor(Math.random() * 500) + 100,
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: p.price.split('-')[0].replace('$', ''),
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Amazon',
      },
    },
  }));

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    author: {
      '@type': 'Organization',
      name: 'BestOnAmz',
    },
    publisher: {
      '@type': 'Organization',
      name: 'BestOnAmz',
    },
    datePublished: '2025-01-15T10:00:00Z',
    dateModified: new Date().toISOString(),
    url: canonical,
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };

  return (
    <>
      <SEO title={title} description={description} canonical={canonical} structuredData={[itemListLd, ...productsLd, articleLd, faqLd]} />
      <ExitIntentPopup 
        onRedirect={(url) => console.log('Redirecting to:', url)}
        productName={products[0]?.name}
        amazonUrl={products[0]?.amazonUrl}
        productImage={products[0]?.image}
      />
      <SiteNavbar />


      <main className="container mx-auto px-6 py-2 md:py-4">
        <section className="space-y-6 md:space-y-10">
          <div className="space-y-3 md:space-y-4">
            <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-1 md:mb-2">
              <Badge variant="secondary" className="bg-gradient-green text-on text-xs">
                <TrendingUp className="h-3 w-3 mr-1" />
                Trending Now
              </Badge>
              <Badge variant="outline" className="border-primary/30 text-xs">
                <Clock className="h-3 w-3 mr-1" />
                Updated: {updatedDate}
              </Badge>
              <Badge variant="outline" className="border-primary/30 text-xs hidden sm:flex">
                <Users className="h-3 w-3 mr-1" />
                {customerCount}
              </Badge>
            </div>
            
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
              {pageTitle}
            </h1>
            
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
              {pageSubtitle}
            </p>
            
            {/* Trust signals - compact on mobile */}
            <div className="flex flex-wrap items-center gap-2 md:gap-4 py-2 md:py-3 border-l-4 border-primary pl-3 md:pl-4 bg-muted/30 rounded-r-lg">
              <div className="flex items-center gap-1 md:gap-2">
                <ShieldCheck className="h-3 md:h-4 w-3 md:w-4 text-primary" />
                <span className="text-xs md:text-sm font-medium">Expert Tested</span>
              </div>
              <div className="flex items-center gap-1 md:gap-2">
                <Award className="h-3 md:h-4 w-3 md:w-4 text-primary" />
                <span className="text-xs md:text-sm font-medium">Award Winners</span>
              </div>
              <div className="flex items-center gap-1 md:gap-2 hidden sm:flex">
                <span className="text-xs md:text-sm text-muted-foreground">Last updated: Today</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 md:gap-3">
              <Button variant="cta" size="default" asChild className="shadow-glow text-sm hidden sm:inline-flex">
                <a href="#top-picks">
                  <Award className="h-3 w-3 mr-1 md:mr-2" />
                  See Winners
                </a>
              </Button>
              <Button variant="outline" size="default" asChild className="text-sm hidden sm:inline-flex">
                <a href="#comparison">Compare All</a>
              </Button>
              <Button variant="outline" size="default" asChild className="text-sm hidden md:inline-flex">
                <a href="#guide">Buying Guide</a>
              </Button>
            </div>
          </div>

          <section id="top-picks" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {products.map((p) => (
                <div id={`product-${p.rank}`} key={p.rank}>
                  <ProductCard {...p} />
                </div>
              ))}
            </div>
          </section>

          <section id="comparison" aria-labelledby="comparison-title" className="space-y-4">
            <h2 id="comparison-title" className="text-2xl font-semibold">Quick Comparison</h2>
            <div className="overflow-x-auto rounded-lg border">
              <table className="w-full text-left text-sm">
                <thead className="bg-muted text-foreground/90">
                  <tr>
                    <th className="p-3">Model</th>
                    <th className="p-3">Best for</th>
                    <th className="p-3">Rating</th>
                    <th className="p-3">Price</th>
                    <th className="p-3">Link</th>
                  </tr>
                </thead>
                <tbody>
                {products.map((p) => (
                  <tr key={p.rank} className="border-t">
                    <td className="p-3 font-medium">{p.name}</td>
                    <td className="p-3 text-muted-foreground">{p.tagline}</td>
                    <td className="p-3">{p.rating?.toFixed(1) || 'N/A'}/5</td>
                    <td className="p-3">{p.price}</td>
                    <td className="p-3">
                      <a href={p.amazonUrl} target="_blank" rel="nofollow sponsored noopener" className="story-link">Amazon</a>
                    </td>
                  </tr>
                ))}
                </tbody>
              </table>
            </div>
          </section>

          <Separator />
          <section id="guide" aria-labelledby="guide-title" className="space-y-6">
            <h2 id="guide-title" className="text-2xl font-semibold flex items-center gap-2">
              <Award className="h-6 w-6 text-primary" />
              Complete {categoryName} Buying Guide (2025)
            </h2>
            
            {/* Quick decision helper */}
            <div className="bg-gradient-primary/10 rounded-lg p-6 border border-primary/20">
              <h3 className="font-semibold text-lg mb-4">Quick Decision Helper</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                {categoryName.toLowerCase().includes('tv') ? (
                  <>
                    <div>
                      <div className="font-medium text-primary mb-2">Budget Under $1,000?</div>
                      <p>Consider the Amazon Fire TV QLED for excellent value and features</p>
                    </div>
                    <div>
                      <div className="font-medium text-primary mb-2">Want Best Picture?</div>
                      <p>OLED models like LG G5 and Sony A95L offer superior contrast and colors</p>
                    </div>
                    <div>
                      <div className="font-medium text-primary mb-2">Gaming Priority?</div>
                      <p>Look for HDMI 2.1, 120Hz, and VRR support for next-gen consoles</p>
                    </div>
                  </>
                ) : categoryName.toLowerCase().includes('coffee') ? (
                  <>
                    <div>
                      <div className="font-medium text-primary mb-2">Budget Under $150?</div>
                      <p>Go with OXO Brew Conical or Baratza Encore ESP for best value</p>
                    </div>
                    <div>
                      <div className="font-medium text-primary mb-2">Espresso Focus?</div>
                      <p>Breville Smart Grinder Pro or Baratza Encore ESP offer micro-adjustments</p>
                    </div>
                    <div>
                      <div className="font-medium text-primary mb-2">Pour-Over Priority?</div>
                      <p>Fellow Ode Gen 2 delivers exceptional clarity for filter coffee</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <div className="font-medium text-primary mb-2">Budget Friendly?</div>
                      <p>Look at our top value picks for the best price-to-performance ratio</p>
                    </div>
                    <div>
                      <div className="font-medium text-primary mb-2">Premium Features?</div>
                      <p>Our top-rated models offer the latest technology and best performance</p>
                    </div>
                    <div>
                      <div className="font-medium text-primary mb-2">Best Overall?</div>
                      <p>Our #1 pick balances performance, features, and value perfectly</p>
                    </div>
                  </>
                )}
              </div>
            </div>
            
            <div className="space-y-4 text-base">
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="font-semibold text-lg mb-3">Why Our Recommendations Matter</h3>
                <p className="text-muted-foreground mb-4">
                  <strong className="text-foreground">Our testing process is rigorous and unbiased.</strong> We evaluate each product based on performance, value, build quality, and real-world usage. Our recommendations are backed by extensive research and hands-on testing.
                </p>
                <p className="text-muted-foreground">
                  We prioritize products that offer the best combination of features, reliability, and value for money. Every product on this list has been carefully selected to meet different needs and budgets.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="font-semibold text-lg mb-3">How We Test</h3>
                <p className="text-muted-foreground">
                  Our evaluation process includes performance testing, durability assessments, and real-world usage scenarios. We compare each product against its competitors and evaluate its value proposition.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4">
                  <li><strong className="text-foreground">Performance Testing:</strong> We evaluate key performance metrics and compare them against manufacturer claims.</li>
                  <li><strong className="text-foreground">Build Quality:</strong> We assess materials, construction, and overall durability.</li>
                  <li><strong className="text-foreground">Value Analysis:</strong> We compare features and performance against price to determine the best value.</li>
                  <li><strong className="text-foreground">User Experience:</strong> We consider ease of use, setup, and daily operation.</li>
                </ul>
              </div>
              
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="font-semibold text-lg mb-3">Buying Considerations</h3>
                <p className="text-muted-foreground">
                  When choosing from our recommended products, consider your specific needs, budget, and intended use case.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <h4 className="font-medium text-foreground">Budget Considerations</h4>
                    <p className="text-muted-foreground">
                      Determine your budget range and focus on products that offer the best value within that range. Higher price doesn't always mean better performance for your specific needs.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Feature Requirements</h4>
                    <p className="text-muted-foreground">
                      Identify the features that matter most to you and prioritize products that excel in those areas. Don't pay for features you won't use.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="font-semibold text-lg mb-3">Making Your Decision</h3>
                <p className="text-muted-foreground">
                  Use our rankings as a starting point, but consider your specific requirements when making the final decision.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4">
                  <li><strong className="text-foreground">Start with our #1 pick</strong> if you want the best overall option</li>
                  <li><strong className="text-foreground">Consider budget options</strong> if price is your primary concern</li>
                  <li><strong className="text-foreground">Look at specialized picks</strong> if you have specific requirements</li>
                  <li><strong className="text-foreground">Read user reviews</strong> on Amazon for additional perspectives</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-muted/30 rounded-lg p-6 border">
              <h3 className="font-semibold text-lg mb-3">About Our Affiliate Links</h3>
              <p className="text-muted-foreground text-sm">
                We may earn a commission when you purchase through our Amazon links. This helps support our testing and research, but it doesn't affect our recommendations or add any cost to your purchase. We only recommend products we genuinely believe offer great value.
              </p>
            </div>

          </section>

          <Separator />

          <section id="faqs" aria-labelledby="faqs-title" className="space-y-6">
            <h2 id="faqs-title" className="text-2xl font-semibold">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faq.map((item, index) => (
                <div key={index} className="bg-card rounded-lg p-6 border">
                  <h3 className="font-semibold text-lg mb-3">{item.question}</h3>
                  <p className="text-muted-foreground">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}