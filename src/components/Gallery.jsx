import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const galleryItems = [
  { title: 'Studio Sessions', subtitle: 'Private Reformer Pilates', aspect: 'aspect-[3/4]', bg: 'url(/studio_interior.png)' },
  { title: 'Group Energy', subtitle: 'Community Classes', aspect: 'aspect-square', bg: 'url(/group_class.png)' },
  { title: 'Mind & Body', subtitle: 'Wellness Lifestyle', aspect: 'aspect-[4/3]', bg: 'url(/wellness_lifestyle.png)' },
  { title: 'Core Strength', subtitle: 'Rehabilitation Programs', aspect: 'aspect-[4/3]', bg: 'url(/pilates_session.png)' },
  { title: 'Studio View', subtitle: 'Florida Location', aspect: 'aspect-square', bg: 'url(/studio_exterior.png)' },
  { title: 'Balance', subtitle: 'Posture Alignment', aspect: 'aspect-[3/4]', bg: 'url(/studio_interior.png)' },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="gallery" className="section-padding bg-white" ref={ref}>
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
              Gallery
            </span>
            <div className="w-10 h-[2px] bg-gold" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title"
          >
            Our Studio & Life
          </motion.h2>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              className={`${item.aspect} relative rounded-2xl overflow-hidden group cursor-pointer break-inside-avoid`}
              style={{ backgroundImage: item.bg, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >


              {/* Content */}
              <div className="absolute inset-0 flex items-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white/70 text-xs font-medium uppercase tracking-wider mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {item.subtitle}
                  </p>
                  <h3 className="text-white font-semibold text-lg" style={{ fontFamily: 'var(--font-display)' }}>
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
