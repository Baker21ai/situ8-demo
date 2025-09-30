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

        {/* Calendly Widget Section - Flattened structure with explicit height */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="calendly-inline-widget"
          data-url="https://calendly.com/yamen-khabbaz-situ8?hide_gdpr_banner=1&background_color=ffffff&text_color=111827&primary_color=7c3aed"
          style={{
            width: '100%',
            height: 'calc(95vh - 180px)',
            minHeight: '500px',
            backgroundColor: '#ffffff',
            position: 'relative'
          }}
        />

        {/* Additional Info - Compact footer */}
        <div className="border-t border-gray-100 bg-gray-50/50 px-4 sm:px-6 py-3 flex-shrink-0">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
              <span>Platform walkthrough</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
              <span>Live Q&A</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
              <span>ROI analysis</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}