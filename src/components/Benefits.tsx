import { motion } from "motion/react";
import { TrendingUp, DollarSign, Clock, Users, Shield, Zap } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "40-60% Time Savings",
    description: "Eliminate manual logging, reporting, and visitor management tasks",
    metric: "Reduce daily admin from 45 mins to 15 mins"
  },
  {
    icon: Clock,
    title: "50% Faster Response",
    description: "Unified incident management from detection to resolution",
    metric: "Accelerated emergency protocols"
  },
  {
    icon: DollarSign,
    title: "$50K-$100K Annual Savings",
    description: "Optimized guard deployment and reduced false alarms",
    metric: "6-9 month payback period"
  },
  {
    icon: Users,
    title: "90% Protocol Adherence",
    description: "Intelligent guidance ensures consistent procedures",
    metric: "Standardized operations across shifts"
  },
  {
    icon: Shield,
    title: "Single Platform View",
    description: "Replace 5-8 systems with unified command and control",
    metric: "Comprehensive facility protection"
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    description: "Quick integration with minimal operational disruption",
    metric: "200-400% annual ROI"
  }
];

export function Benefits() {
  return (
    <section id="benefits" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 mb-6">
            The Situ8 <span className="text-purple-600">advantage</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stop switching between systems and start seeing real results. 
            Transform manual operations into intelligent, automated workflows.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group bg-white border border-gray-200 rounded-2xl p-8 hover:border-purple-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                <benefit.icon className="w-6 h-6 text-purple-600 group-hover:text-white transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {benefit.description}
              </p>
              
              <div className="bg-purple-50 rounded-lg p-3">
                <p className="text-sm font-medium text-purple-700">
                  {benefit.metric}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-12 text-center text-white"
        >
          <h3 className="text-3xl font-light mb-4">
            Ready to transform your physical security operations?
          </h3>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join organizations already streamlining operations with intelligent automation
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="text-center">
              <div className="text-3xl font-medium">60-80%</div>
              <div className="text-purple-200 text-sm">Time Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-medium">50%</div>
              <div className="text-purple-200 text-sm">Faster Response</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-medium">90%</div>
              <div className="text-purple-200 text-sm">Protocol Adherence</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}