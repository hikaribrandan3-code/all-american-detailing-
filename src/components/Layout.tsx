import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import QuoteModal from "./QuoteModal";

const Layout = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const handleOpenQuote = (service?: string, location?: string) => {
    if (service) setSelectedService(service);
    if (location) setSelectedLocation(location);
    setQuoteOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F5F0E8]">
      <Navbar onQuoteClick={() => handleOpenQuote()} />
      <main>
        <Outlet context={{ openQuote: handleOpenQuote }} />
      </main>
      <Footer onQuoteClick={handleOpenQuote} />
      <QuoteModal
        open={quoteOpen}
        onOpenChange={setQuoteOpen}
        defaultService={selectedService}
        defaultLocation={selectedLocation}
      />
    </div>
  );
};

export default Layout;

export function useQuote() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { openQuote } = (window as any).__outletContext || {};
  return { openQuote: openQuote || (() => {}) };
}
