import { motion } from 'motion/react';
import { Mic2, Users, Video } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

const talks = [
  {
    title: 'Building Products in Emerging Markets',
    event: 'Tech Summit Lagos 2025',
    audience: '500+ attendees',
    topics: ['Product Strategy', 'Market Adaptation', 'Growth'],
  },
  {
    title: 'From Developer to Product Leader',
    event: 'DevFest Africa 2024',
    audience: '800+ attendees',
    topics: ['Leadership', 'Career Growth', 'Technical Strategy'],
  },
  {
    title: 'The Future of Digital Products in Africa',
    event: 'Innovation Week 2024',
    audience: '1000+ attendees',
    topics: ['Innovation', 'Market Trends', 'Technology'],
  },
];

const speakingTopics = [
  'Product Strategy & Development',
  'Growth Marketing Systems',
  'Technical Leadership',
  'Building in Emerging Markets',
  'Entrepreneurship & Startups',
  'Digital Transformation',
];

export function SpeakingSection() {
  return (
    <section id="speaking" className="py-24 bg-gradient-to-b from-[#0f0f1a] to-[#0a0a0f] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#10b981]/10 border border-[#10b981]/30 rounded-full mb-6">
            <Mic2 size={18} className="text-[#10b981]" />
            <span className="text-sm text-[#10b981] font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
              Public Speaker
            </span>
          </div>

          <h2
            className="text-4xl lg:text-5xl text-white mb-4"
            style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}
          >
            Speaking & Media
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl" style={{ fontFamily: 'Inter, sans-serif' }}>
            Sharing insights on product development, technology leadership, and building in Africa
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Featured Speaking Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent z-10" />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1762968269894-1d7e1ce8894e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwc3BlYWtlciUyMHN0YWdlfGVufDF8fHx8MTc2OTExNTkxOXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Conference speaking"
                className="w-full aspect-[4/3] object-cover"
              />
              
              {/* Stats Overlay */}
              <div className="absolute bottom-6 left-6 right-6 z-20 grid grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-white/10 backdrop-blur-md border border-white/20">
                  <div className="text-2xl font-bold text-white mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    25+
                  </div>
                  <div className="text-xs text-gray-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Talks
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-white/10 backdrop-blur-md border border-white/20">
                  <div className="text-2xl font-bold text-white mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    10k+
                  </div>
                  <div className="text-xs text-gray-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Audience
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-white/10 backdrop-blur-md border border-white/20">
                  <div className="text-2xl font-bold text-white mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    15
                  </div>
                  <div className="text-xs text-gray-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Countries
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#10b981]/20 rounded-full blur-3xl -z-10" />
          </motion.div>

          {/* Speaking Topics */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3
                className="text-2xl text-white mb-4"
                style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
              >
                Speaking Topics
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {speakingTopics.map((topic, index) => (
                  <motion.div
                    key={topic}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-2 p-3 rounded-lg bg-white/5 border border-white/10"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#10b981]" />
                    <span className="text-sm text-gray-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {topic}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-[#10b981]/10 to-transparent border border-[#10b981]/30">
              <h4
                className="text-lg text-white mb-3"
                style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
              >
                Available For
              </h4>
              <ul className="space-y-2 text-gray-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                <li className="flex items-center gap-2">
                  <Users size={16} className="text-[#10b981]" />
                  <span>Conference Keynotes</span>
                </li>
                <li className="flex items-center gap-2">
                  <Video size={16} className="text-[#10b981]" />
                  <span>Workshops & Masterclasses</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mic2 size={16} className="text-[#10b981]" />
                  <span>Podcast Interviews</span>
                </li>
              </ul>
            </div>

            <button className="w-full px-8 py-4 bg-[#10b981] text-white rounded-lg hover:bg-[#059669] transition-all duration-300 font-medium flex items-center justify-center gap-2">
              <Mic2 size={18} />
              <span style={{ fontFamily: 'Inter, sans-serif' }}>Invite Me to Speak</span>
            </button>
          </motion.div>
        </div>

        {/* Recent Talks */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3
            className="text-2xl text-white mb-8"
            style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
          >
            Recent Talks
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {talks.map((talk, index) => (
              <motion.div
                key={talk.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-gradient-to-b from-white/5 to-white/0 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <h4
                  className="text-lg text-white mb-2"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
                >
                  {talk.title}
                </h4>
                <p className="text-gray-400 text-sm mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {talk.event}
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                  <Users size={14} />
                  <span style={{ fontFamily: 'Inter, sans-serif' }}>{talk.audience}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {talk.topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
