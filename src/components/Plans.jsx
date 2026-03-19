import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiCheck, HiStar } from 'react-icons/hi';

const plans = [
  {
    name: 'Basic',
    price: '$199',
    period: '/month',
    description: 'Perfect for beginners starting their journey',
    features: [
      '4 Group Classes per month',
      'Access to online library',
      'Initial body assessment',
      'Community access',
    ],
    popular: false,
  },
  {
    name: 'Standard',
    price: '$399',
    period: '/month',
    description: 'Our most popular plan for dedicated students',
    features: [
      '8 Group Classes per month',
      '2 Private Sessions per month',
      'Full online library access',
      'Quarterly body assessment',
      'Nutritional guidance',
      'Priority booking',
    ],
    popular: true,
  },
  {
    name: 'Premium',
    price: '$699',
    period: '/month',
    description: 'The ultimate Pilates experience',
    features: [
      'Unlimited Group Classes',
      '4 Private Sessions per month',
      'Full online library access',
      'Monthly body assessment',
      'Personal nutrition plan',
      'VIP booking priority',
      '24/7 instructor support',
      'Guest passes (2/month)',
    ],
    popular: false,
  },
];

export default function Plans() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="plans" className="section-padding bg-cream" ref={ref}>
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
              Membership
            </span>
            <div className="w-10 h-[2px] bg-gold" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title"
          >
            Choose Your Plan
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle mx-auto mt-4"
          >
            Flexible membership plans designed to fit your lifestyle and wellness goals.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * (index + 1) }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`relative rounded-3xl p-8 flex flex-col ${
                plan.popular
                  ? 'bg-forest text-white shadow-[0_20px_60px_rgba(12,60,44,0.3)]'
                  : 'bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)]'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-white px-5 py-1.5 rounded-full text-xs font-semibold tracking-wider flex items-center gap-1 shadow-lg">
                  <HiStar /> MOST POPULAR
                </div>
              )}

              <div className="mb-8">
                <h3
                  className={`text-xl font-semibold mb-2 ${plan.popular ? 'text-white' : 'text-forest'}`}
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.popular ? 'text-white/70' : 'text-gray-500'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <span
                  className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-forest'}`}
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {plan.price}
                </span>
                <span className={`text-sm ${plan.popular ? 'text-white/60' : 'text-gray-400'}`}>
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.popular ? 'bg-gold/30' : 'bg-forest/10'
                      }`}
                    >
                      <HiCheck className={`text-xs ${plan.popular ? 'text-gold' : 'text-forest'}`} />
                    </div>
                    <span className={`text-sm ${plan.popular ? 'text-white/80' : 'text-gray-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#payment"
                className={`w-full py-3.5 rounded-full text-center font-medium text-sm transition-all duration-300 block ${
                  plan.popular
                    ? 'bg-gold text-white hover:bg-gold-light hover:shadow-lg'
                    : 'bg-forest text-white hover:bg-forest-light hover:shadow-lg'
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
