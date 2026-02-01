import { motion } from 'motion/react';
import { Brain, Hammer, TrendingUp } from 'lucide-react';

const stackColumns = [
  {
    icon: Brain,
    title: 'THINKING',
    color: 'text-[#3b82f6]',
    items: [
      'Product Strategy',
      'User Psychology',
      'Market Positioning',
      'Growth Frameworks',
    ],
  },
  {
    icon: Hammer,
    title: 'BUILDING',
    color: 'text-[#8b5cf6]',
    items: [
      'Web Applications',
      'Mobile Apps',
      'WordPress Platforms',
      'API Integrations',
    ],
  },
  {
    icon: TrendingUp,
    title: 'SCALING',
    color: 'text-[#d97706]',
    items: [
      'SEO Architecture',
      'Advertising Systems',
      'Marketing Automation',
      'Analytics & Metrics',
    ],
  },
];

export function StackSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0a0a0f] to-[#0f0f1a] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
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
          <h2
            className="text-4xl lg:text-5xl text-white mb-4"
            style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}
          >
            The Abraham Stack
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            How I think, build, and scale digital products that matter
          </p>
        </motion.div>

        {/* Stack Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {stackColumns.map((column, index) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Card */}
              <div className="relative h-full p-8 rounded-2xl bg-gradient-to-b from-white/5 to-white/0 border border-white/10 backdrop-blur-sm">
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-xl bg-white/5 border border-white/10 mb-6 ${column.color}`}>
                  <column.icon size={28} strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3
                  className={`text-sm tracking-wider mb-6 ${column.color}`}
                  style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
                >
                  {column.title}
                </h3>

                {/* Items */}
                <ul className="space-y-4">
                  {column.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.2 + itemIndex * 0.1 }}
                      className="flex items-center gap-3 text-gray-300"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full ${column.color.replace('text-', 'bg-')}`} />
                      {item}
                    </motion.li>
                  ))}
                </ul>

                {/* Connecting Line (except last column) */}
                {index < stackColumns.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-white/20 to-transparent" />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Accent */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />
      </div>
    </section>
  );
}
