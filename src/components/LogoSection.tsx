import { motion } from "motion/react";
import logoImage from "figma:asset/c5b84994d5cfaf6961f14b1d74f298310811bdef.png";

export function LogoSection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-r from-purple-600 to-purple-700">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex justify-center mb-12">
            <img src={logoImage} alt="Situ8 Logo" className="w-32 h-32 rounded-3xl shadow-2xl" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Integrate */}
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-light text-white mb-4">
                Integrate
              </h3>
              <p className="text-lg text-purple-100 leading-relaxed">
                Unify CCTV, access control, alarms, and guard operations in one platform
              </p>
            </div>

            {/* Automate */}
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-light text-white mb-4">
                Automate
              </h3>
              <p className="text-lg text-purple-100 leading-relaxed">
                Eliminate manual logging, visitor management, and incident reporting
              </p>
            </div>

            {/* Orchestrate */}
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-light text-white mb-4">
                Orchestrate
              </h3>
              <p className="text-lg text-purple-100 leading-relaxed">
                Coordinate emergency protocols, patrol routes, and facility lockdowns
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}