import { motion } from "motion/react";
import { Button } from "./ui/button";
import logoImage from "figma:asset/c5b84994d5cfaf6961f14b1d74f298310811bdef.png";

interface HeroProps {
  onDemoClick: () => void;
}

export function Hero({ onDemoClick }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-purple-600 to-purple-700 pt-32 pb-20 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-8 leading-tight"
        >
          <span className="block text-white mb-2">
            Your <span className="font-bold">SOCs</span> run on <span className="font-bold">SOPs</span>.
          </span>
          <span 
            className="block animate-gradient-shift"
            style={{
              background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 25%, #FF6B6B 50%, #FFD700 75%, #FFC700 100%)',
              backgroundSize: '200% 200%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 20px rgba(255, 215, 0, 0.3))'
            }}
          >
            Now they run themselves.
          </span>
        </motion.h1>

        {/* Three Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-xl md:text-4xl text-purple-100 mb-6"
        >
          Integrate • Automate • Orchestrate
        </motion.div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="flex justify-center mb-4"
        >
          <img src={logoImage} alt="Situ8 Logo" className="w-20 h-20 md:w-24 md:h-24 rounded-2xl shadow-2xl" />
        </motion.div>

        {/* Situ8 Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-8"
          style={{
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
          }}
        >
          Situ8
        </motion.div>

        {/* Security you control */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          className="text-xl text-purple-100 mb-8"
        >
          Security you control
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          className="mb-12"
        >
          <Button 
            onClick={onDemoClick}
            size="lg" 
            className="bg-white text-purple-600 hover:bg-gray-50 px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
          >
            Request Demo
          </Button>
        </motion.div>

      </div>
    </section>
  );
}