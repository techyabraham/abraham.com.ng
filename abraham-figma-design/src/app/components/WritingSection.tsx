import { motion } from 'motion/react';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

const featuredArticle = {
  title: 'Building Products That Scale: Lessons from 19 Years in Tech',
  excerpt: 'A deep dive into the frameworks and mental models that separate products that grow from those that plateau. What I\'ve learned building 200+ projects across multiple continents.',
  date: 'January 15, 2026',
  readTime: '12 min read',
  category: 'Product Strategy',
};

const recentArticles = [
  {
    title: 'The Marketing Systems Framework: How to Build Growth That Compounds',
    excerpt: 'Why most marketing efforts fail and how to design systems that generate predictable growth.',
    date: 'January 8, 2026',
    readTime: '8 min read',
    category: 'Growth',
  },
  {
    title: 'From Idea to MVP: A Practical Guide for Technical Founders',
    excerpt: 'The exact process I use to validate and ship products in weeks, not months.',
    date: 'December 20, 2025',
    readTime: '10 min read',
    category: 'Product Development',
  },
  {
    title: 'User Psychology: Understanding the Invisible Forces That Drive Behavior',
    excerpt: 'How to design products that align with human psychology and behavioral patterns.',
    date: 'December 12, 2025',
    readTime: '15 min read',
    category: 'UX & Psychology',
  },
];

export function WritingSection() {
  return (
    <section id="writing" className="py-24 bg-gradient-to-b from-[#0f0f1a] to-[#0a0a0f] relative">
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
            Writing & Thought Leadership
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl" style={{ fontFamily: 'Inter, sans-serif' }}>
            Essays on product strategy, growth systems, and building technology that matters
          </p>
        </motion.div>

        {/* Featured Article */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="group relative p-8 lg:p-12 rounded-2xl bg-gradient-to-br from-[#d97706]/10 to-[#b45309]/10 border border-[#d97706]/30 backdrop-blur-sm overflow-hidden cursor-pointer hover:border-[#d97706]/50 transition-all duration-300">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '30px 30px'
              }} />
            </div>

            <div className="relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d97706]/20 border border-[#d97706]/30 mb-6">
                <span className="text-xs font-medium text-[#d97706] uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Featured
                </span>
              </div>

              {/* Content */}
              <h3
                className="text-3xl lg:text-4xl text-white mb-4 group-hover:text-[#d97706] transition-colors"
                style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
              >
                {featuredArticle.title}
              </h3>
              
              <p className="text-lg text-gray-300 mb-6 max-w-3xl" style={{ fontFamily: 'Inter, sans-serif' }}>
                {featuredArticle.excerpt}
              </p>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span style={{ fontFamily: 'Inter, sans-serif' }}>{featuredArticle.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span style={{ fontFamily: 'Inter, sans-serif' }}>{featuredArticle.readTime}</span>
                </div>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {featuredArticle.category}
                </span>
              </div>

              {/* CTA */}
              <button className="group/btn flex items-center gap-2 text-[#d97706] font-medium">
                <span style={{ fontFamily: 'Inter, sans-serif' }}>Read Full Article</span>
                <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Decorative Element */}
            <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-[#d97706]/20 rounded-full blur-3xl" />
          </div>
        </motion.div>

        {/* Recent Articles */}
        <div className="grid md:grid-cols-3 gap-6">
          {recentArticles.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 rounded-2xl bg-gradient-to-b from-white/5 to-white/0 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300 cursor-pointer">
                {/* Category Badge */}
                <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
                  <span className="text-xs text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {article.category}
                  </span>
                </div>

                {/* Title */}
                <h4
                  className="text-xl text-white mb-3 group-hover:text-[#3b82f6] transition-colors"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
                >
                  {article.title}
                </h4>

                {/* Excerpt */}
                <p className="text-gray-400 mb-4 line-clamp-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {article.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span style={{ fontFamily: 'Inter, sans-serif' }}>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span style={{ fontFamily: 'Inter, sans-serif' }}>{article.readTime}</span>
                  </div>
                </div>

                {/* CTA */}
                <button className="text-gray-400 group-hover:text-white text-sm font-medium transition-colors">
                  <span style={{ fontFamily: 'Inter, sans-serif' }}>Read more →</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="group px-8 py-4 bg-white/5 text-white border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300 font-medium inline-flex items-center gap-2">
            <span style={{ fontFamily: 'Inter, sans-serif' }}>Read All Writing</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
