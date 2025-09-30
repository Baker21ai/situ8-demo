import { motion } from "motion/react";
import { Brain, Zap, FileCheck, ArrowRight } from "lucide-react";

const aiSolutions = [
  {
    icon: Brain,
    emoji: "🧠",
    title: "AI-Unified Operations",
    subtitle: "One Intelligent Command Center",
    description: "Stop juggling multiple systems. Our AI connects and controls everything including CCTV, access control, alarms, and patrols through a single intelligent brain.",
    benefits: [
      "Force multiply what your existing teams can do",
      "Reduce context switching",
      "AI correlates threats across all systems"
    ],
    gradient: "from-blue-500/20 via-purple-500/20 to-indigo-500/20"
  },
  {
    icon: Zap,
    emoji: "⚡",
    title: "Agentic Response Protocols",
    subtitle: "Every Incident. Right Response. Right People. Instantly.",
    description: "Our agentic AI doesn't just follow procedures. It orchestrates everything by guiding operators, mobilizing teams, and ensuring the right people know within seconds, not minutes.",
    benefits: [
      "Faster incident resolution",
      "Intelligent notification & escalation",
      "Consistent protocol compliance"
    ],
    gradient: "from-orange-500/20 via-red-500/20 to-pink-500/20"
  },
  {
    icon: FileCheck,
    emoji: "🤖",
    title: "Automated Compliance Intelligence",
    subtitle: "Never Scramble for an Audit Again",
    description: "Every action logged. Every report generated. Every regulation met. Our AI documents your entire operation automatically and perfectly.",
    benefits: [
      "Instant audit reports",
      "Real-time compliance monitoring",
      "Legally defensible documentation"
    ],
    gradient: "from-green-500/20 via-emerald-500/20 to-teal-500/20"
  }
];

export function HowItWorks() {
  return (
    <section id="solutions" className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f3f4f6' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200/30 text-purple-700 px-6 py-3 rounded-full text-sm mb-8 backdrop-blur-sm">
            <Brain className="w-4 h-4" />
            <span>AI-Powered Security Intelligence</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-light tracking-tight text-gray-900 mb-6">
            The Future of <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Security Operations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Three revolutionary AI systems that transform how security teams operate, respond, and comply
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {aiSolutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Card Container with Glass Effect */}
              <div className={`relative bg-gradient-to-br ${solution.gradient} backdrop-blur-xl border border-white/20 rounded-3xl p-8 h-full shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}>
                
                {/* Subtle Inner Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl pointer-events-none"></div>
                
                {/* Header with Number Badge and Centered Icon */}
                <div className="relative mb-6">
                  {/* Number Badge */}
                  <div className="flex justify-center mb-3">
                    <div className="w-8 h-8 bg-brand-purple text-white rounded-full flex items-center justify-center text-sm font-medium shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                  
                  {/* Centered Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <solution.icon className="w-6 h-6 text-gray-700" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">
                    {solution.title}
                  </h3>
                  
                  {/* Decorative Line */}
                  <div className="w-16 h-px bg-gradient-to-r from-gray-400 to-transparent mb-4"></div>
                  
                  <div className="text-sm font-medium text-gray-600 uppercase tracking-wider mb-4">
                    {solution.subtitle}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed mb-8 text-base">
                  {solution.description}
                </p>

                {/* Benefits List */}
                <ul className="space-y-3">
                  {solution.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <ArrowRight className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>

              {/* Floating Element */}
              
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >

        </motion.div>
      </div>
    </section>
  );
}