import { motion } from 'motion/react';
import { ArrowUpRight, Globe, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Link } from 'react-router-dom';

const projects = [
  {
    name: 'RoadWorthy',
    problem: 'Streamlining vehicle inspection and certification processes for Nigerian drivers',
    role: 'Product Lead & Technical Architect',
    platform: 'Web & Mobile Application',
    image: 'https://images.unsplash.com/photo-1621743018966-29194999d736?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2OTA0MTM3OHww&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-[#3b82f6]/20 to-[#2563eb]/20',
  },
  {
    name: 'LifeLine',
    problem: 'Connecting patients with emergency medical services and healthcare providers',
    role: 'Founder & Full-Stack Developer',
    platform: 'Healthcare Platform',
    image: 'https://images.unsplash.com/photo-1762279388957-c6ed514d3353?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhYnN0cmFjdCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY5MTE1OTE4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-[#10b981]/20 to-[#059669]/20',
  },
  {
    name: 'Autside',
    problem: 'Automating social media content creation and distribution for businesses',
    role: 'Product Designer & Marketing Lead',
    platform: 'SaaS Platform',
    image: 'https://images.unsplash.com/photo-1621743018966-29194999d736?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2OTA0MTM3OHww&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-[#8b5cf6]/20 to-[#7c3aed]/20',
  },
];

export function FeaturedWork() {
  return (
    <section id="work" className="py-24 bg-[#0a0a0f] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2
            className="text-4xl lg:text-5xl text-white mb-4"
            style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}
          >
            Featured Work
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl" style={{ fontFamily: 'Inter, sans-serif' }}>
            Flagship projects that demonstrate product thinking, technical execution, and market impact
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full rounded-2xl overflow-hidden bg-gradient-to-b from-white/5 to-white/0 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:border-white/20">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-b ${project.color} mix-blend-overlay`} />
                  <ImageWithFallback
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay Icon */}
                  <div className="absolute top-4 right-4 p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Globe size={20} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3
                    className="text-2xl text-white mb-3"
                    style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
                  >
                    {project.name}
                  </h3>
                  
                  <p className="text-gray-400 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {project.problem}
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500 uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Role:
                      </span>
                      <span className="text-sm text-gray-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {project.role}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500 uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Platform:
                      </span>
                      <span className="text-sm text-gray-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {project.platform}
                      </span>
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="group/btn flex items-center gap-2 text-white font-medium hover:text-[#3b82f6] transition-colors">
                    <span style={{ fontFamily: 'Inter, sans-serif' }}>View Case Study</span>
                    <ArrowUpRight size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Full Portfolio CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-lg text-white hover:bg-white/10 hover:border-white/20 transition-all group"
          >
            <span style={{ fontFamily: 'Inter, sans-serif' }}>View Full Portfolio</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}