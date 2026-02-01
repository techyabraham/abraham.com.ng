import { motion } from 'motion/react';
import { Rocket, Code, PenTool, Mic } from 'lucide-react';

const paths = [
  {
    icon: Rocket,
    title: 'Consulting & Growth Systems',
    description: 'Strategic advisory for scaling digital products and marketing systems',
    color: 'from-[#3b82f6]/20 to-[#2563eb]/20',
    borderColor: 'border-[#3b82f6]/30',
    iconColor: 'text-[#3b82f6]',
  },
  {
    icon: Code,
    title: 'Products I\'m Building',
    description: 'Explore the digital products and platforms currently in development',
    color: 'from-[#8b5cf6]/20 to-[#7c3aed]/20',
    borderColor: 'border-[#8b5cf6]/30',
    iconColor: 'text-[#8b5cf6]',
  },
  {
    icon: PenTool,
    title: 'Writing & Ideas',
    description: 'Deep dives on product strategy, growth, and technology leadership',
    color: 'from-[#d97706]/20 to-[#b45309]/20',
    borderColor: 'border-[#d97706]/30',
    iconColor: 'text-[#d97706]',
  },
  {
    icon: Mic,
    title: 'Speaking & Media',
    description: 'Conference talks, workshops, and public speaking engagements',
    color: 'from-[#10b981]/20 to-[#059669]/20',
    borderColor: 'border-[#10b981]/30',
    iconColor: 'text-[#10b981]',
  },
];

export function PathSelection() {
  return (
    <section className="py-24 bg-[#0a0a0f] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl lg:text-5xl text-white mb-4"
            style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}
          >
            Choose Your Path
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Whether you're looking to collaborate, learn, or explore – find your entry point
          </p>
        </motion.div>

        {/* Path Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {paths.map((path, index) => (
            <motion.div
              key={path.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`group relative p-8 rounded-2xl bg-gradient-to-br ${path.color} border ${path.borderColor} backdrop-blur-sm cursor-pointer overflow-hidden transition-all duration-300`}
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-xl bg-white/5 border border-white/10 mb-6 ${path.iconColor}`}>
                  <path.icon size={32} strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3
                  className="text-2xl text-white mb-3"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
                >
                  {path.title}
                </h3>
                <p className="text-gray-400 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {path.description}
                </p>

                {/* CTA */}
                <button className="text-white font-medium group-hover:gap-3 flex items-center gap-2 transition-all">
                  <span style={{ fontFamily: 'Inter, sans-serif' }}>Explore</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>

              {/* Decorative Corner */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${path.color} rounded-full blur-3xl opacity-50`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
