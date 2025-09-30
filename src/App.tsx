import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Problems } from "./components/Problems";
import { LogoSection } from "./components/LogoSection";
import { HowItWorks } from "./components/HowItWorks";
import { DemoModal } from "./components/DemoModal";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  const openDemoModal = () => setIsDemoModalOpen(true);
  const closeDemoModal = () => setIsDemoModalOpen(false);

  return (
    <div className="min-h-screen bg-white">
      <Header onDemoClick={openDemoModal} />
      
      <main>
        <Hero onDemoClick={openDemoModal} />
        <Problems />
        <LogoSection />
        <HowItWorks />
      </main>

      <Footer onDemoClick={openDemoModal} />
      
      <DemoModal 
        isOpen={isDemoModalOpen} 
        onClose={closeDemoModal} 
      />
      
      <Toaster />
    </div>
  );
}