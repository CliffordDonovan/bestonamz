import SEO from "@/components/SEO";
import EnhancedNavbar from "@/components/EnhancedNavbar";
import SiteFooter from "@/components/SiteFooter";
import ModernHomepage from "@/components/ModernHomepage";

const Index = () => {
  return (
    <>
      <SEO
        title="BestOnAmz — Expert Product Reviews & Smart Shopping Guides"
        description="Discover expertly curated product guides with honest reviews, detailed comparisons, and direct Amazon links. Trusted by 50,000+ smart shoppers for coffee grinders, robot vacuums, office chairs, TVs, and more."
        canonical="https://www.bestonamz.com/"
      />
      
      <div className="min-h-screen bg-background">
        <EnhancedNavbar />
        <main>
          <ModernHomepage />
        </main>
        <SiteFooter />
      </div>
    </>
  );
};

export default Index;