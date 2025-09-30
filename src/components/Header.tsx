import { Button } from "./ui/button";
import logoImage from "figma:asset/c5b84994d5cfaf6961f14b1d74f298310811bdef.png";

interface HeaderProps {
  onDemoClick: () => void;
}

export function Header({ onDemoClick }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src={logoImage} alt="Situ8 Logo" className="w-8 h-8 rounded-md" />
          <h1 className="text-xl font-semibold tracking-tight">Situ8</h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
          <a href="#platform" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
            Problem
          </a>
          <a href="#solutions" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
            Platform
          </a>
        </nav>
        
        <div className="flex items-center">
          <Button 
            onClick={onDemoClick}
            className="bg-purple-600 hover:bg-purple-700 text-white text-sm px-6"
          >
            Request Demo
          </Button>
        </div>
      </div>
    </header>
  );
}