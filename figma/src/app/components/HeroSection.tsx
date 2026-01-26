import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { AnimatedCounter } from '@/app/components/AnimatedCounter';

const stats = [
  { value: 200, suffix: '+', label: 'Projects Delivered' },
  { value: 19, suffix: '+', label: 'Years of Experience' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 10, suffix: '+', label: 'Products Built' },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a0f] pt-20">
      {/* Ambient Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#3b82f6]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#d97706]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm"
            >
              <Sparkles size={16} className="text-[#3b82f6]" />
              <span className="text-sm text-gray-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                Available for Select Projects
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-7xl leading-tight text-white"
              style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}
            >
              I build digital products, advise growth systems, write ideas, and speak to audiences that matter.
            </motion.h1>

            {/* Roles */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-400"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Product Builder <span className="text-gray-600">•</span> Marketing Consultant{' '}
              <span className="text-gray-600">•</span> Author{' '}
              <span className="text-gray-600">•</span> Speaker
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="group px-8 py-4 bg-[#3b82f6] text-white rounded-lg hover:bg-[#2563eb] transition-all duration-300 flex items-center justify-center gap-2 font-medium">
                <span style={{ fontFamily: 'Inter, sans-serif' }}>Work with Me</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300 font-medium">
                <span style={{ fontFamily: 'Inter, sans-serif' }}>Explore My Products</span>
              </button>
              <button className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300 font-medium">
                <span style={{ fontFamily: 'Inter, sans-serif' }}>Read My Writing</span>
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/10"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center sm:text-left">
                  <div
                    className="text-3xl font-bold text-white mb-1"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-gray-500" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Portrait */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#3b82f6]/20 to-[#d97706]/20 rounded-2xl blur-3xl" />
              
              {/* Portrait */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1731093714827-ba0353e09bfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhZnJpY2FuJTIwYnVzaW5lc3NtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjkxMTU5MTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Abraham Akomolafe"
                  className="w-full h-auto"
                />
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -right-6 w-32 h-32 bg-[#3b82f6]/20 rounded-full blur-2xl"
              />
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -left-6 w-40 h-40 bg-[#d97706]/20 rounded-full blur-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-white/40 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}