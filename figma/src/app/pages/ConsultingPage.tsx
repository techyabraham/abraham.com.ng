import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Footer } from '@/app/components/Footer';

export function ConsultingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="pt-24 pb-8 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={18} />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>

      <section className="pb-24 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1
              className="text-5xl lg:text-6xl text-white mb-6"
              style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}
            >
              Consulting
            </h1>
            <p className="text-xl text-gray-400 mb-12">
              Strategic guidance for product development, technical architecture, and growth systems.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              This page is currently under development. Please check back soon or reach out directly to discuss consulting opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
