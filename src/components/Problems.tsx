import { motion } from "motion/react";

const problems = [
  {
    statistic: "60-80%",
    label: "Time Wasted",
    title: "Manual Operations",
    description: "Security teams waste the majority of their time on manual logging, visitor management, and report generation.",
    impact: "30-45 minutes per shift just reviewing overnight reports"
  },
  {
    statistic: "5-8",
    label: "Fragmented Systems", 
    title: "Context Lost",
    description: "Guards constantly switch between disconnected applications for CCTV, access control, alarms, and incident reporting.",
    impact: "Critical security context disappears between systems"
  },
  {
    statistic: "2×",
    label: "Slower Response",
    title: "Manual Coordination",
    description: "Emergency response, evacuation procedures, and facility lockdowns suffer from operational bottlenecks.",
    impact: "Incident response delayed by manual processes"
  },
  {
    statistic: "Weeks",
    label: "Compliance Burden",
    title: "Audit Preparation",
    description: "Regulatory compliance becomes a massive undertaking due to inconsistent documentation and manual record-keeping.",
    impact: "Manual effort consuming entire weeks"
  }
];

export function Problems() {
  return (
    <section id="platform" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section - Compartmentalized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-gray-50 px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">The Problem</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 mb-6">
            Security teams are <span className="text-brand-purple">overwhelmed</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Physical security operations weren't designed for modern facilities.
            Manual processes and siloed systems create inefficiency and dangerous gaps.
          </p>
        </motion.div>

        {/* Problems Grid - Properly Compartmentalized */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group"
            >
              {/* Card Container */}
              <div className="bg-card border border-border rounded-xl p-6 h-full hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                
                {/* Background Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-purple/5 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                
                {/* Statistics Section */}
                <div className="relative z-10 mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-4xl font-light text-brand-purple">
                      {problem.statistic}
                    </span>
                    <div className="w-2 h-2 bg-brand-purple rounded-full opacity-60"></div>
                  </div>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    {problem.label}
                  </span>
                </div>

                {/* Content Section */}
                <div className="relative z-10 space-y-4">
                  <h3 className="text-lg font-medium text-foreground">
                    {problem.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </div>

                {/* Impact Quote */}
                <div className="relative z-10 mt-6 pt-4 border-t border-border">
                  <p className="text-xs text-brand-purple font-medium italic">
                    "{problem.impact}"
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/0 to-brand-purple/0 group-hover:from-brand-purple/[0.02] group-hover:to-transparent transition-all duration-500 rounded-xl"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Summary - Compartmentalized */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-gray-50 to-white border border-border rounded-2xl p-8 text-center">
            <p className="text-lg text-foreground font-medium mb-2">
              The cost isn't just operational efficiency
            </p>
            <p className="text-muted-foreground">
              These inefficiencies create real security vulnerabilities that put your entire facility at risk
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}