const SiteFooter = () => {
  return (
    <footer className="mt-16 border-t bg-muted/30">
      <div className="container mx-auto px-6 py-10 grid gap-6 md:grid-cols-3 text-sm">
        <div>
          <h3 className="font-semibold mb-2">BestOnAmz</h3>
          <p className="text-muted-foreground">Curated product picks with direct Amazon links to help you shop smarter.</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Categories</h3>
          <ul className="space-y-1 text-muted-foreground">
            <li><a href="/best-coffee-grinders" className="hover:underline">Coffee Grinders</a></li>
            <li><a href="/best-mushroom-coffees" className="hover:underline">Mushroom Coffee</a></li>
            <li><a href="/best-pimple-patches" className="hover:underline">Pimple Patches</a></li>
            <li><a href="/best-robot-vacuums" className="hover:underline">Robot Vacuums</a></li>
            <li><a href="/best-stick-vacuums-mop" className="hover:underline">Stick Vacuums</a></li>
            <li><a href="/best-tvs" className="hover:underline">TVs</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Disclosure</h3>
          <p className="text-muted-foreground">As an Amazon Associate we earn from qualifying purchases. Prices and availability subject to change.</p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
