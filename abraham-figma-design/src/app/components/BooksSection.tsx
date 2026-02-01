import { motion } from 'motion/react';
import { BookOpen, Download } from 'lucide-react';

const books = [
  {
    title: 'The Product Playbook',
    subtitle: 'Systems for Building Digital Products That Scale',
    description: 'A comprehensive guide to product development, from ideation to market fit.',
    color: 'from-[#d97706] to-[#b45309]',
  },
  {
    title: 'Growth Architecture',
    subtitle: 'Engineering Marketing Systems That Compound',
    description: 'How to build sustainable growth engines for digital businesses.',
    color: 'from-[#3b82f6] to-[#2563eb]',
  },
  {
    title: 'The Technical Leader',
    subtitle: 'Bridging Code, Strategy, and Impact',
    description: 'Leadership lessons for developers transitioning into strategic roles.',
    color: 'from-[#8b5cf6] to-[#7c3aed]',
  },
];

export function BooksSection() {
  return (
    <section id="books" className="py-24 bg-[#0a0a0f] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#d97706]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#3b82f6]/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#d97706]/10 border border-[#d97706]/30 rounded-full mb-6">
            <BookOpen size={18} className="text-[#d97706]" />
            <span className="text-sm text-[#d97706] font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
              Published Author
            </span>
          </div>

          <h2
            className="text-4xl lg:text-5xl text-white mb-4"
            style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}
          >
            Books & Publications
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Deep knowledge distilled into practical frameworks for builders and leaders
          </p>
        </motion.div>

        {/* Books Shelf */}
        <div className="grid md:grid-cols-3 gap-8">
          {books.map((book, index) => (
            <motion.div
              key={book.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              {/* Book Card */}
              <div className="relative">
                {/* Book Cover */}
                <div className={`relative aspect-[3/4] rounded-2xl bg-gradient-to-br ${book.color} p-8 flex flex-col justify-between overflow-hidden shadow-2xl transform group-hover:scale-105 group-hover:rotate-1 transition-all duration-300`}>
                  {/* Pattern Overlay */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                      backgroundImage: 'radial-gradient(circle at 2px 2px, white 2px, transparent 0)',
                      backgroundSize: '40px 40px'
                    }} />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="mb-auto">
                      <h3
                        className="text-2xl text-white mb-2"
                        style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}
                      >
                        {book.title}
                      </h3>
                      <p className="text-white/80 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {book.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="relative z-10 mt-auto">
                    <p className="text-white/90 text-xs mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Abraham Akomolafe
                    </p>
                    <div className="h-1 w-16 bg-white/30 rounded-full" />
                  </div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Book Info */}
                <div className="mt-6">
                  <p className="text-gray-400 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {book.description}
                  </p>

                  {/* CTAs */}
                  <div className="flex gap-3">
                    <button className="flex-1 px-4 py-2.5 bg-white/5 text-white border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300 text-sm font-medium">
                      <span style={{ fontFamily: 'Inter, sans-serif' }}>Read Sample</span>
                    </button>
                    <button className="p-2.5 bg-[#3b82f6] text-white rounded-lg hover:bg-[#2563eb] transition-all duration-300">
                      <Download size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-500 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
            Available in digital and print formats • Free chapters for subscribers
          </p>
        </motion.div>
      </div>
    </section>
  );
}
