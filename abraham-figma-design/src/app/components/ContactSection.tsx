import { motion } from 'motion/react';
import { Mail, MessageCircle, Briefcase, Users, ArrowRight } from 'lucide-react';

const contactMethods = [
  {
    icon: Briefcase,
    title: 'Consulting',
    description: 'Growth and digital systems for serious businesses',
    cta: 'Book a Call',
    color: 'from-[#3b82f6] to-[#2563eb]',
    iconColor: 'text-[#3b82f6]',
  },
  {
    icon: Users,
    title: 'Collaboration & Partnerships',
    description: 'For founders and product teams building something ambitious',
    cta: 'Let\'s Talk',
    color: 'from-[#8b5cf6] to-[#7c3aed]',
    iconColor: 'text-[#8b5cf6]',
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-[#0f0f1a] to-[#0a0a0f] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#3b82f6]/10 rounded-full blur-3xl" />

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
            Work With Me
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Let's build something exceptional together
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className={`relative p-8 rounded-2xl bg-gradient-to-br ${method.color} bg-opacity-10 border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '30px 30px'
                  }} />
                </div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-xl bg-white/5 border border-white/10 mb-6 ${method.iconColor}`}>
                    <method.icon size={32} strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <h3
                    className="text-2xl text-white mb-3"
                    style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
                  >
                    {method.title}
                  </h3>
                  <p className="text-gray-400 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {method.description}
                  </p>

                  {/* CTA */}
                  <button className={`group/btn w-full px-6 py-4 bg-gradient-to-r ${method.color} text-white rounded-lg hover:shadow-lg hover:shadow-${method.iconColor}/20 transition-all duration-300 font-medium flex items-center justify-center gap-2`}>
                    <span style={{ fontFamily: 'Inter, sans-serif' }}>{method.cta}</span>
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Decorative Corner */}
                <div className={`absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-br ${method.color} rounded-full blur-3xl opacity-20`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Direct Contact */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <div className="p-8 rounded-2xl bg-gradient-to-b from-white/5 to-white/0 border border-white/10 text-center">
            <h3
              className="text-xl text-white mb-6"
              style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
            >
              Or reach out directly
            </h3>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@abrahamakomolafe.com"
                className="group/link flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                <Mail size={20} className="text-gray-400 group-hover/link:text-white transition-colors" />
                <span className="text-gray-300 group-hover/link:text-white transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                  hello@abrahamakomolafe.com
                </span>
              </a>

              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="group/link flex items-center gap-3 px-6 py-3 bg-[#10b981]/10 border border-[#10b981]/30 rounded-lg hover:bg-[#10b981]/20 transition-all duration-300"
              >
                <MessageCircle size={20} className="text-[#10b981]" />
                <span className="text-[#10b981]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  WhatsApp
                </span>
              </a>
            </div>

            <p className="mt-6 text-sm text-gray-500" style={{ fontFamily: 'Inter, sans-serif' }}>
              Average response time: 24 hours
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
