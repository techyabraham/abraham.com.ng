import { motion } from 'motion/react';
import { FlaskConical, Rocket, Wrench, CheckCircle2 } from 'lucide-react';

const projects = [
  {
    name: 'QuantumFlow',
    description: 'AI-powered workflow automation platform for modern teams',
    status: 'Live',
    statusColor: 'bg-[#10b981]',
    icon: CheckCircle2,
    phase: 'Scaling',
  },
  {
    name: 'MentorMatch',
    description: 'Connecting professionals with expert mentors in their field',
    status: 'MVP',
    statusColor: 'bg-[#3b82f6]',
    icon: Wrench,
    phase: 'Testing',
  },
  {
    name: 'ContentEngine',
    description: 'Smart content management and distribution system for creators',
    status: 'Concept',
    statusColor: 'bg-[#d97706]',
    icon: Rocket,
    phase: 'Research',
  },
];

export function LabSection() {
  return (
    <section className="py-24 bg-[#0a0a0f] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.3) 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#8b5cf6]/10 border border-[#8b5cf6]/30 rounded-full mb-6">
            <FlaskConical size={18} className="text-[#8b5cf6]" />
            <span className="text-sm text-[#8b5cf6] font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
              Innovation Lab
            </span>
          </div>

          <h2
            className="text-4xl lg:text-5xl text-white mb-4"
            style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}
          >
            The Lab
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Current projects in development – exploring new ideas and building the future
          </p>
        </motion.div>

        {/* Projects Timeline */}
        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="flex gap-6 items-start">
                {/* Timeline Dot */}
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <div className={`w-12 h-12 rounded-full ${project.statusColor} flex items-center justify-center`}>
                      <project.icon size={24} className="text-white" />
                    </div>
                    {index < projects.length - 1 && (
                      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-white/20 to-transparent" />
                    )}
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:bg-white/5">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3
                        className="text-2xl text-white mb-2 group-hover:text-[#3b82f6] transition-colors"
                        style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
                      >
                        {project.name}
                      </h3>
                      <p className="text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {project.description}
                      </p>
                    </div>

                    {/* Status Badge */}
                    <div className="flex flex-col items-end gap-2">
                      <span className={`px-4 py-1.5 rounded-full ${project.statusColor} text-white text-sm font-medium`}>
                        {project.status}
                      </span>
                      <span className="text-xs text-gray-500" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Phase: {project.phase}
                      </span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-4">
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                      <span style={{ fontFamily: 'Inter, sans-serif' }}>Development Progress</span>
                      <span style={{ fontFamily: 'Inter, sans-serif' }}>
                        {project.status === 'Live' ? '100%' : project.status === 'MVP' ? '75%' : '25%'}
                      </span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ 
                          width: project.status === 'Live' ? '100%' : project.status === 'MVP' ? '75%' : '25%' 
                        }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.2 + 0.3 }}
                        className={`h-full ${project.statusColor} rounded-full`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-[#8b5cf6]/10 to-[#3b82f6]/10 border border-[#8b5cf6]/30 text-center"
        >
          <h3
            className="text-2xl text-white mb-3"
            style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
          >
            Have an idea for collaboration?
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            I'm always exploring new opportunities to build impactful products with ambitious founders and teams
          </p>
          <button className="px-8 py-4 bg-[#8b5cf6] text-white rounded-lg hover:bg-[#7c3aed] transition-all duration-300 font-medium">
            <span style={{ fontFamily: 'Inter, sans-serif' }}>Let's Build Together</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}