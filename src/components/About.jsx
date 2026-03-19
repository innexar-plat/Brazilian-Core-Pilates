import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiSparkles } from 'react-icons/hi';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-[2px] bg-gold" />
              <span className="text-gold font-medium text-sm tracking-widest uppercase">
                About Us
              </span>
            </div>
            <h2 className="section-title mb-6">
              The Art of <span className="gold-gradient">Brazilian</span> Pilates
            </h2>
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed text-base">
                At Brazilian Core Pilates, we blend the discipline of classical Pilates with the warmth, 
                energy, and flow of Brazilian wellness culture. Our philosophy is rooted in the belief 
                that true strength comes from harmony — between body, mind, and spirit.
              </p>
              <p className="text-gray-600 leading-relaxed text-base">
                Inspired by the natural beauty and vitality of Brazil, our approach goes beyond exercise. 
                We focus on building core strength, improving posture, enhancing flexibility, and 
                cultivating a lifestyle of balance and well-being.
              </p>
              <p className="text-gray-600 leading-relaxed text-base">
                Every session is designed to empower you — to move with grace, build resilience, and 
                discover the transformative power of mindful movement. Whether you are seeking 
                rehabilitation, athletic performance, or simply a more connected life, we are here 
                to guide your journey.
              </p>
            </div>

            <div className="flex items-center gap-6 mt-8">
              <div className="text-center">
                <span className="text-3xl font-bold text-forest" style={{ fontFamily: 'var(--font-display)' }}>500+</span>
                <p className="text-sm text-gray-500 mt-1">Happy Clients</p>
              </div>
              <div className="w-px h-12 bg-cream-dark" />
              <div className="text-center">
                <span className="text-3xl font-bold text-forest" style={{ fontFamily: 'var(--font-display)' }}>8+</span>
                <p className="text-sm text-gray-500 mt-1">Years Experience</p>
              </div>
              <div className="w-px h-12 bg-cream-dark" />
              <div className="text-center">
                <span className="text-3xl font-bold text-forest" style={{ fontFamily: 'var(--font-display)' }}>15+</span>
                <p className="text-sm text-gray-500 mt-1">Expert Instructors</p>
              </div>
            </div>
          </motion.div>

          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5]"
              style={{
                background: 'linear-gradient(135deg, #0C3C2C 0%, #1A5C42 50%, #0C3C2C 100%)',
              }}
            >
              <img 
                src="/wellness_lifestyle.png" 
                alt="Premium Wellness Lifestyle" 
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                width="800"
                height="1000"
              />
              <div className="absolute inset-0 bg-forest/20 mix-blend-multiply" />


              {/* Stats overlay */}
              <div className="absolute bottom-6 left-6 right-6 glass-card p-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                    <HiSparkles className="text-gold text-xl" />
                  </div>
                  <div>
                    <p className="text-forest font-semibold text-sm">Premium Wellness</p>
                    <p className="text-gray-500 text-xs">Personalized Pilates Programs</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 glass-card px-5 py-3 shadow-lg"
            >
              <span className="text-forest font-semibold text-sm">Est. 2018</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
