import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

interface FooterProps {
  onDemoClick: () => void;
}

export function Footer({ onDemoClick }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
            Ready to Experience AI-Powered Security?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            See how these three AI systems work together to transform your security operations
          </p>
          
          <Button 
            onClick={onDemoClick}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg h-auto"
          >
            Request Demo
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        <div className="border-t border-gray-800 pt-12">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-8 mb-4 md:mb-0 text-center md:text-left">
              <div className="text-xl font-semibold mb-2 md:mb-0">Situ8</div>
              <div className="text-gray-400 text-sm">
                © 2025 Situ8. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}