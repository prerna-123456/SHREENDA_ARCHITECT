import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import OurServices from "./pages/OurServices";
import Residential from "./pages/Residential";
import Commercial from "./pages/Commercial";
import Interior from "./pages/Interior";
import Elevation from "./pages/Elevation";
import Visualization from "./pages/Visualization";
import ContactUs from "./pages/ContactUs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}> 
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="services" element={<OurServices />} />
          <Route path="residential" element={<Residential />} />
          <Route path="commercial" element={<Commercial />} />        
          <Route path="interior" element={<Interior />} />
          <Route path="elevation" element={<Elevation />} />
          <Route path="visualization" element={<Visualization />} />
          <Route path="contact-us" element={<ContactUs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
