import { useEffect } from "react";
import { motion } from "motion/react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Calendar } from "lucide-react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DemoModal({ isOpen, onClose }: DemoModalProps) {
  // Load Calendly widget script
  useEffect(() => {
    if (isOpen) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        // Clean up script when modal closes
        const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
        if (existingScript) {
          document.body.removeChild(existingScript);
        }
      };
    }
  }, [isOpen]);

  // Handle scroll fade indicators
  useEffect(() => {
    if (!isOpen) return;

    const scrollContainer = document.getElementById('calendly-scroll-container');
    const fadeTop = document.getElementById('scroll-fade-top');
    const fadeBottom = document.getElementById('scroll-fade-bottom');

    if (!scrollContainer || !fadeTop || !fadeBottom) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = scrollContainer;

      // Show top fade when scrolled down
      if (scrollTop > 20) {
        fadeTop.style.opacity = '1';
      } else {
        fadeTop.style.opacity = '0';
      }

      // Hide bottom fade when at bottom
      if (scrollTop + clientHeight >= scrollHeight - 20) {
        fadeBottom.style.opacity = '0';
      } else {
        fadeBottom.style.opacity = '1';
      }
    };

    // Initial check
    setTimeout(handleScroll, 500); // Wait for Calendly to load
    scrollContainer.addEventListener('scroll', handleScroll);

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[95vh] w-[95vw] sm:w-full p-0 overflow-hidden bg-white/95 backdrop-blur-xl border-0 shadow-2xl flex flex-col">
        {/* Header Section - Optimized for mobile */}
        <DialogHeader className="px-4 sm:px-8 pt-4 sm:pt-8 pb-3 sm:pb-6 border-b border-gray-100 flex-shrink-0">
          <div className="flex items-center justify-center mb-2 sm:mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
            </div>
          </div>
          <DialogTitle className="text-2xl sm:text-3xl font-light text-center text-gray-900 mb-2 sm:mb-3">
            Book Your Personalized Demo
          </DialogTitle>
          <p className="text-base sm:text-lg text-gray-600 text-center max-w-2xl mx-auto leading-relaxed">
            Choose a time that works for you
          </p>
        </DialogHeader>

        {/* Calendly Widget Section - Scrollable Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex-1 px-4 sm:px-8 pb-4 sm:pb-8 overflow-hidden flex flex-col min-h-0"
        >
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm flex-1 flex flex-col overflow-hidden relative">
            {/* Scroll fade indicators */}
            <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white to-transparent pointer-events-none z-10 opacity-0 transition-opacity" id="scroll-fade-top" />

            {/* Calendly Inline Widget - Scrollable */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden" id="calendly-scroll-container">
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/yamen-khabbaz-situ8?hide_gdpr_banner=1&background_color=ffffff&text_color=111827&primary_color=7c3aed"
                style={{
                  minWidth: '320px',
                  width: '100%',
                  minHeight: '650px',
                  height: '100%',
                  backgroundColor: '#ffffff'
                }}
              />
            </div>

            {/* Bottom scroll fade indicator */}
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" id="scroll-fade-bottom" />
          </div>

          {/* Additional Info - Moved outside scrollable area, collapsed on mobile */}
          <details className="mt-4 sm:mt-6 bg-gray-50 rounded-xl group" open>
            <summary className="p-4 sm:p-6 cursor-pointer list-none">
              <h4 className="font-medium text-gray-900 text-center inline-flex items-center justify-center w-full gap-2">
                What to expect in your 30-minute demo
                <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
              </h4>
            </summary>
            <div className="px-4 pb-4 sm:px-6 sm:pb-6 pt-0">
              <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 text-center">
                <div className="space-y-2">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mx-auto">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  </div>
                  <p className="text-sm text-gray-600">Personalized platform walkthrough</p>
                </div>
                <div className="space-y-2">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mx-auto">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  </div>
                  <p className="text-sm text-gray-600">Live Q&A with security experts</p>
                </div>
                <div className="space-y-2">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mx-auto">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  </div>
                  <p className="text-sm text-gray-600">Custom ROI analysis</p>
                </div>
              </div>
            </div>
          </details>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}