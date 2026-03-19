import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiUser, HiUserGroup, HiDesktopComputer, HiHeart } from 'react-icons/hi';

const services = [
  {
    icon: HiUser,
    title: 'Private Pilates Sessions',
    description:
      'One-on-one sessions tailored to your unique body, goals, and pace. Experience truly personalized Pilates with expert guidance.',
  },
  {
    icon: HiUserGroup,
    title: 'Group Classes',
    description:
      'Energizing group sessions in an intimate studio setting. Build community while strengthening your core and improving flexibility.',
  },
  {
    icon: HiDesktopComputer,
    title: 'Online Classes',
    description:
      'Join from anywhere with our live-streamed and on-demand classes. Premium Pilates instruction delivered to your home.',
  },
  {
    icon: HiHeart,
    title: 'Rehabilitation & Core Strength',
    description:
      'Specialized programs for injury recovery, postural correction, and building foundational core strength with clinical precision.',
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="section-padding bg-cream" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <div className="w-10 h-[2px] bg-gold" />
            <span className="text-gold font-medium text-sm tracking-widest uppercase">
              Our Services
            </span>
            <div className="w-10 h-[2px] bg-gold" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title"
          >
            What We Offer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle mx-auto mt-4"
          >
            Discover our range of premium Pilates experiences, each designed to help you achieve your wellness goals.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] transition-shadow duration-300 group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-forest/5 flex items-center justify-center mb-6 group-hover:bg-forest group-hover:scale-110 transition-all duration-300">
                <service.icon className="text-2xl text-forest group-hover:text-white transition-colors duration-300" />
              </div>
              <h3
                className="text-lg font-semibold text-forest mb-3"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
              <div className="mt-6 flex items-center gap-2 text-gold text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn more
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
