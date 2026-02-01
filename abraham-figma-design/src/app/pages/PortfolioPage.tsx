import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Footer } from '@/app/components/Footer';

const projects = [
  {
    id: 'roadworthy',
    name: 'RoadWorthy',
    problem: 'Streamlining vehicle inspection and certification processes for Nigerian drivers',
    description: 'A comprehensive platform that digitizes vehicle certification, making road safety compliance accessible and efficient.',
    category: 'Mobile App / Platform',
    image: 'https://images.unsplash.com/photo-1621743018966-29194999d736?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2OTA0MTM3OHww&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-[#3b82f6]/20 to-[#2563eb]/20',
  },
  {
    id: 'lifeline',
    name: 'LifeLine',
    problem: 'Connecting patients with emergency medical services and healthcare providers',
    description: 'Real-time emergency response system connecting patients to nearest medical facilities with live tracking and coordination.',
    category: 'Healthcare Platform',
    image: 'https://images.unsplash.com/photo-1762279388957-c6ed514d3353?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhYnN0cmFjdCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY5MTE1OTE4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-[#10b981]/20 to-[#059669]/20',
  },
  {
    id: 'autside',
    name: 'Autside',
    problem: 'Automating social media content creation and distribution for businesses',
    description: 'AI-powered SaaS tool that helps businesses create, schedule, and optimize social media content across platforms.',
    category: 'SaaS Platform',
    image: 'https://images.unsplash.com/photo-1621743018966-29194999d736?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2OTA0MTM3OHww&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-[#8b5cf6]/20 to-[#7c3aed]/20',
  },
];

export function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1
              className="text-5xl lg:text-6xl text-white mb-6"
              style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}
            >
              Selected Work & Case Studies
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl">
              A collection of products, platforms, and systems I've built and led. Each project represents
              a unique challenge in product development, system design, and user experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Link
                  to={`/portfolio/${project.id}`}
                  className="group block h-full"
                >
                  <div className="relative h-full rounded-2xl overflow-hidden bg-gradient-to-b from-white/5 to-white/0 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:translate-y-[-4px]">
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 text-xs font-medium bg-[#3b82f6]/20 text-[#3b82f6] border border-[#3b82f6]/30 rounded-full backdrop-blur-sm">
                        {project.category}
                      </span>
                    </div>

                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-b ${project.color} mix-blend-overlay`} />
                      <ImageWithFallback
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
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
                        {project.description}
                      </p>

                      {/* CTA */}
                      <div className="flex items-center gap-2 text-[#3b82f6] font-medium group-hover:gap-3 transition-all">
                        <span style={{ fontFamily: 'Inter, sans-serif' }}>View Case Study</span>
                        <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
