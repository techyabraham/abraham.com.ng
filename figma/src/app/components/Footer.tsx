import { motion } from 'motion/react';
import { Github, Twitter, Linkedin, Youtube } from 'lucide-react';

const footerLinks = {
  Explore: [
    { label: 'Work', href: '#work' },
    { label: 'Writing', href: '#writing' },
    { label: 'Books', href: '#books' },
    { label: 'Speaking', href: '#speaking' },
  ],
  Connect: [
    { label: 'Consulting', href: '#consulting' },
    { label: 'Collaboration', href: '#contact' },
    { label: 'Newsletter', href: '#newsletter' },
    { label: 'Contact', href: '#contact' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms of Service', href: '#terms' },
    { label: 'Cookie Policy', href: '#cookies' },
  ],
};

const socialLinks = [
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', color: 'hover:text-[#1DA1F2]' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:text-[#0A66C2]' },
  { icon: Github, href: 'https://github.com', label: 'GitHub', color: 'hover:text-white' },
  { icon: Youtube, href: 'https://youtube.com', label: 'YouTube', color: 'hover:text-[#FF0000]' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0f] border-t border-white/5 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050508]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.a
              href="#"
              className="inline-block text-3xl font-bold text-white mb-4"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              whileHover={{ scale: 1.02 }}
            >
              Abraham<span className="text-[#3b82f6]">.</span>
            </motion.a>
            <p className="text-gray-400 mb-6 max-w-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
              Building digital products, advising growth systems, writing ideas, and speaking to audiences that matter.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className={`p-2.5 rounded-lg bg-white/5 border border-white/10 text-gray-400 transition-colors ${social.color}`}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3
                className="text-white mb-4"
                style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
              >
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="py-12 border-t border-white/5">
          <div className="max-w-xl mx-auto text-center">
            <h3
              className="text-2xl text-white mb-3"
              style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
            >
              Join the Newsletter
            </h3>
            <p className="text-gray-400 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              Weekly insights on product development, growth systems, and building in Africa
            </p>

            <div className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#3b82f6] transition-colors"
                style={{ fontFamily: 'Inter, sans-serif' }}
              />
              <button className="px-6 py-3 bg-[#3b82f6] text-white rounded-lg hover:bg-[#2563eb] transition-all duration-300 font-medium whitespace-nowrap">
                <span style={{ fontFamily: 'Inter, sans-serif' }}>Subscribe</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
              © {currentYear} Abraham Akomolafe. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#privacy" className="text-gray-500 hover:text-gray-300 text-sm transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                Privacy
              </a>
              <a href="#terms" className="text-gray-500 hover:text-gray-300 text-sm transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                Terms
              </a>
              <a href="#sitemap" className="text-gray-500 hover:text-gray-300 text-sm transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
