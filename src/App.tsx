import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import NotFound from "./pages/NotFound";
import Index from "./pages/Index";
import BestCoffeeGrinders from "./pages/BestCoffeeGrinders";
import BestMushroomCoffees from "./pages/best-mushroom-coffees";
import BestPimplePatches from "./pages/best-pimple-patches";
import BestRobotVacuums from "./pages/best-robot-vacuums";
import BestStickVacuumsMop from "./pages/best-stick-vacuums-mop";
import BestTVs from "./pages/best-tvs";
import BestAirPurifiers from "./pages/best-air-purifiers";
import BestStandingDesks from "./pages/best-standing-desks";
import BestOfficeChairs from "./pages/best-office-chairs";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/best-coffee-grinders" element={<BestCoffeeGrinders />} />
            <Route path="/best-mushroom-coffees" element={<BestMushroomCoffees />} />
            <Route path="/best-pimple-patches" element={<BestPimplePatches />} />
            <Route path="/best-robot-vacuums" element={<BestRobotVacuums />} />
            <Route path="/best-stick-vacuums-mop" element={<BestStickVacuumsMop />} />
            <Route path="/best-tvs" element={<BestTVs />} />
            <Route path="/best-air-purifiers" element={<BestAirPurifiers />} />
            <Route path="/best-standing-desks" element={<BestStandingDesks />} />
            <Route path="/best-office-chairs" element={<BestOfficeChairs />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
