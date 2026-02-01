import { motion } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Footer } from '@/app/components/Footer';

const caseStudies = {
  roadworthy: {
    name: 'RoadWorthy',
    tagline: 'Digitizing Vehicle Certification in Nigeria',
    category: 'Mobile App / Platform',
    overview: 'RoadWorthy is a comprehensive platform that revolutionizes vehicle inspection and certification processes in Nigeria. The platform connects vehicle owners with certified inspection centers, digitizes documentation, and provides real-time tracking of certification status.',
    problem: {
      title: 'The Challenge',
      description: 'Vehicle certification in Nigeria was plagued by inefficiency, paperwork bottlenecks, and lack of transparency. Vehicle owners faced long queues, manual processes, and unclear requirements, while regulatory bodies struggled with record-keeping and compliance tracking.',
    },
    solution: {
      title: 'The Solution',
      description: 'We built an end-to-end digital platform that streamlines the entire certification process. The solution includes a mobile app for vehicle owners, a web dashboard for inspection centers, and an admin portal for regulatory oversight.',
      features: [
        'Mobile app for booking inspections and tracking certification status',
        'Digital documentation and paperless certification process',
        'Real-time notifications and updates via SMS and push notifications',
        'Integration with government databases for instant verification',
        'Analytics dashboard for inspection centers and regulators',
      ],
    },
    role: {
      title: 'My Role & Responsibilities',
      description: 'As Product Lead and Technical Architect, I led the end-to-end development of RoadWorthy from concept to launch.',
      responsibilities: [
        'Product strategy and roadmap definition',
        'System architecture and technical design',
        'Team leadership (4 developers, 2 designers, 1 QA)',
        'Stakeholder management with government agencies',
        'API design and backend infrastructure',
      ],
    },
    tech: {
      title: 'Tech Stack',
      stack: ['React Native', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Socket.io'],
    },
    outcome: {
      title: 'Impact & Results',
      metrics: [
        { label: 'Active Users', value: '15,000+' },
        { label: 'Inspections Processed', value: '8,500+' },
        { label: 'Time Saved per Process', value: '70%' },
        { label: 'User Satisfaction', value: '4.6/5' },
      ],
      description: 'RoadWorthy has significantly reduced processing time and improved transparency in vehicle certification. The platform now serves over 15,000 vehicle owners and 120 inspection centers across major Nigerian cities.',
    },
    images: [
      'https://images.unsplash.com/photo-1621743018966-29194999d736?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2OTA0MTM3OHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1762279388957-c6ed514d3353?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhYnN0cmFjdCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY5MTE1OTE4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    color: '#3b82f6',
  },
  lifeline: {
    name: 'LifeLine',
    tagline: 'Emergency Healthcare Response Platform',
    category: 'Healthcare Platform',
    overview: 'LifeLine is a real-time emergency response system that connects patients with the nearest available medical facilities. The platform provides live tracking, ambulance dispatch coordination, and instant communication between patients and healthcare providers.',
    problem: {
      title: 'The Challenge',
      description: 'Emergency medical response in many regions suffers from poor coordination, lack of real-time information, and delayed response times. Patients often don\'t know which facility to contact, and healthcare providers lack visibility into incoming emergencies.',
    },
    solution: {
      title: 'The Solution',
      description: 'We created a comprehensive emergency response platform that bridges the gap between patients and healthcare providers through real-time coordination and intelligent routing.',
      features: [
        'One-tap emergency alert with GPS location sharing',
        'Intelligent routing to nearest available facility',
        'Real-time ambulance tracking and ETA updates',
        'Secure patient data transmission to receiving facility',
        'Multi-stakeholder communication hub',
      ],
    },
    role: {
      title: 'My Role & Responsibilities',
      description: 'As Founder and Full-Stack Developer, I conceived, designed, and built LifeLine from the ground up.',
      responsibilities: [
        'Product vision and business model development',
        'Full-stack development (frontend, backend, mobile)',
        'Partnership negotiations with healthcare facilities',
        'Regulatory compliance and data security implementation',
        'Go-to-market strategy and pilot program execution',
      ],
    },
    tech: {
      title: 'Tech Stack',
      stack: ['React', 'React Native', 'Node.js', 'MongoDB', 'Google Maps API', 'Twilio', 'Firebase'],
    },
    outcome: {
      title: 'Impact & Results',
      metrics: [
        { label: 'Partner Facilities', value: '45+' },
        { label: 'Emergencies Handled', value: '2,300+' },
        { label: 'Avg Response Time', value: '8 mins' },
        { label: 'Lives Impacted', value: '5,000+' },
      ],
      description: 'LifeLine has facilitated over 2,300 emergency responses with an average response time of 8 minutes. The platform is now active in 3 cities with 45 partner healthcare facilities.',
    },
    images: [
      'https://images.unsplash.com/photo-1762279388957-c6ed514d3353?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhYnN0cmFjdCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY5MTE1OTE4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1621743018966-29194999d736?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2OTA0MTM3OHww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    color: '#10b981',
  },
  autside: {
    name: 'Autside',
    tagline: 'AI-Powered Social Media Automation',
    category: 'SaaS Platform',
    overview: 'Autside is a SaaS platform that helps businesses automate their social media content creation and distribution. Using AI and machine learning, the platform generates engaging content, optimizes posting schedules, and provides analytics across multiple social platforms.',
    problem: {
      title: 'The Challenge',
      description: 'Small businesses and marketing teams struggle to maintain consistent social media presence due to time constraints, content creation challenges, and difficulty managing multiple platforms. Manual posting is inefficient and often results in suboptimal engagement.',
    },
    solution: {
      title: 'The Solution',
      description: 'We built an intelligent automation platform that combines AI-generated content with strategic scheduling and cross-platform distribution.',
      features: [
        'AI-powered content generation based on brand voice',
        'Smart scheduling using engagement analytics',
        'Multi-platform publishing (Instagram, Twitter, LinkedIn, Facebook)',
        'Content calendar and collaboration tools',
        'Performance analytics and insights dashboard',
      ],
    },
    role: {
      title: 'My Role & Responsibilities',
      description: 'As Product Designer and Marketing Lead, I shaped the product experience and led go-to-market efforts.',
      responsibilities: [
        'UX/UI design and design system creation',
        'User research and product validation',
        'Marketing strategy and content creation',
        'Customer onboarding and success processes',
        'Partnership development with social platforms',
      ],
    },
    tech: {
      title: 'Tech Stack',
      stack: ['React', 'Next.js', 'Python', 'OpenAI API', 'PostgreSQL', 'Redis', 'Stripe'],
    },
    outcome: {
      title: 'Impact & Results',
      metrics: [
        { label: 'Active Customers', value: '1,200+' },
        { label: 'Posts Automated', value: '50,000+' },
        { label: 'Time Saved per Week', value: '15 hrs' },
        { label: 'MRR', value: '$18K' },
      ],
      description: 'Autside serves over 1,200 businesses and has automated more than 50,000 social media posts. Customers report saving an average of 15 hours per week on content management.',
    },
    images: [
      'https://images.unsplash.com/photo-1621743018966-29194999d736?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2OTA0MTM3OHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1762279388957-c6ed514d3353?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhYnN0cmFjdCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY5MTE1OTE4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    color: '#8b5cf6',
  },
};

export function CaseStudyPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const study = projectId ? caseStudies[projectId as keyof typeof caseStudies] : null;

  if (!study) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl text-white mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Case Study Not Found
          </h1>
          <Link to="/portfolio" className="text-[#3b82f6] hover:underline">
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f]" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Back Button */}
      <div className="pt-24 pb-8 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={18} />
            <span>Back to Portfolio</span>
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="pb-16 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="inline-block px-3 py-1 text-xs font-medium mb-4 rounded-full"
              style={{
                backgroundColor: `${study.color}20`,
                color: study.color,
                border: `1px solid ${study.color}30`,
              }}
            >
              {study.category}
            </span>
            <h1
              className="text-5xl lg:text-6xl text-white mb-4"
              style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}
            >
              {study.name}
            </h1>
            <p className="text-2xl text-gray-400 mb-8">{study.tagline}</p>
            <p className="text-lg text-gray-300 leading-relaxed">{study.overview}</p>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="pb-16 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[400px] rounded-2xl overflow-hidden"
          >
            <ImageWithFallback
              src={study.images[0]}
              alt={study.name}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-3xl text-white mb-6"
              style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}
            >
              {study.problem.title}
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">{study.problem.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 px-6 lg:px-8 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-3xl text-white mb-6"
              style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}
            >
              {study.solution.title}
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">{study.solution.description}</p>
            <ul className="space-y-3">
              {study.solution.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#3b82f6] mt-1">•</span>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Role */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-3xl text-white mb-6"
              style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}
            >
              {study.role.title}
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">{study.role.description}</p>
            <ul className="space-y-3">
              {study.role.responsibilities.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#3b82f6] mt-1">•</span>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 px-6 lg:px-8 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-3xl text-white mb-6"
              style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}
            >
              {study.tech.title}
            </h2>
            <div className="flex flex-wrap gap-3">
              {study.tech.stack.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Outcome */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-3xl text-white mb-8"
              style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}
            >
              {study.outcome.title}
            </h2>
            
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              {study.outcome.metrics.map((metric, index) => (
                <div key={index} className="p-6 rounded-xl bg-white/5 border border-white/10">
                  <div
                    className="text-3xl mb-2"
                    style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, color: study.color }}
                  >
                    {metric.value}
                  </div>
                  <div className="text-sm text-gray-400">{metric.label}</div>
                </div>
              ))}
            </div>

            <p className="text-lg text-gray-300 leading-relaxed">{study.outcome.description}</p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 lg:px-8 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-3xl text-white mb-4"
              style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}
            >
              Interested in working together?
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Let's discuss how I can help bring your next project to life.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#3b82f6] text-white rounded-lg hover:bg-[#2563eb] transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <span>Discuss a Similar Project</span>
              <ExternalLink size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
