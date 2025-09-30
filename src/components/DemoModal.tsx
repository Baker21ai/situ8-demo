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
      <DialogContent className="max-w-4xl max-h-[95vh] w-[95vw] sm:w-full p-0 overflow-hidden bg-white/95 backdrop-blur-xl border-0 shadow-2xl">
        {/* Header Section */}
        <DialogHeader className="px-8 pt-8 pb-6 border-b border-gray-100">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <Calendar className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <DialogTitle className="text-3xl font-light text-center text-gray-900 mb-3">
            Book Your Personalized Demo
          </DialogTitle>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto leading-relaxed">
            Choose a time that works for you
          </p>
        </DialogHeader>

        {/* Calendly Widget Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="px-8 pb-8"
        >
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            {/* Calendly Inline Widget */}
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/yamen-khabbaz-situ8?hide_gdpr_banner=1&background_color=ffffff&text_color=111827&primary_color=7c3aed"
              style={{ 
                minWidth: '320px', 
                width: '100%',
                height: 'clamp(600px, 70vh, 700px)',
                backgroundColor: '#ffffff'
              }}
            />
          </div>

          {/* Additional Info */}
          <div className="mt-8 bg-gray-50 rounded-xl p-6">
            <h4 className="font-medium text-gray-900 mb-4 text-center">What to expect in your 30-minute demo:</h4>
            <div className="grid md:grid-cols-3 gap-6 text-center">
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
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}