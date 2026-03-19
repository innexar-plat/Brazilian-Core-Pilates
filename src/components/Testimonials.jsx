import { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { HiStar, HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const testimonials = [
  {
    name: 'Camila Santos',
    role: 'Member for 2 years',
    text: 'Brazilian Core Pilates completely transformed my relationship with my body. The instructors are incredibly attentive and the atmosphere is so welcoming. I feel stronger and more balanced than ever.',
    rating: 5,
    initials: 'CS',
    color: '#0C3C2C',
  },
  {
    name: 'Ana Oliveira',
    role: 'Member for 1 year',
    text: 'After years of back pain, the rehabilitation program at BCP gave me my life back. The personalized approach and expert guidance made all the difference. Highly recommend!',
    rating: 5,
    initials: 'AO',
    color: '#1A5C42',
  },
  {
    name: 'Mariana Costa',
    role: 'Member for 3 years',
    text: 'The online classes are just as amazing as being in the studio. The premium membership is worth every penny — the nutrition guidance and private sessions have been game-changers.',
    rating: 5,
    initials: 'MC',
    color: '#C9A84C',
  },
  {
    name: 'Beatriz Lima',
    role: 'Member for 6 months',
    text: 'I was looking for a Pilates studio that felt premium but also personal. BCP exceeded my expectations in every way. The group classes are energizing and the community is wonderful.',
    rating: 5,
    initials: 'BL',
    color: '#0C3C2C',
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const navigate = (dir) => {
    setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding bg-cream" ref={ref}>
      <div className="max-w-4xl mx-auto">
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
              Testimonials
            </span>
            <div className="w-10 h-[2px] bg-gold" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title"
          >
            What Our Clients Say
          </motion.h2>
        </div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="bg-white rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.04)] p-8 md:p-12 min-h-[280px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="text-center w-full"
              >
                {/* Avatar */}
                <div
                  className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center text-white font-semibold text-lg"
                  style={{ backgroundColor: testimonials[current].color }}
                >
                  {testimonials[current].initials}
                </div>

                {/* Stars */}
                <div className="flex items-center justify-center gap-1 mb-6">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <HiStar key={i} className="text-gold text-lg" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-6 italic">
                  "{testimonials[current].text}"
                </p>

                {/* Name */}
                <h3 className="font-semibold text-forest" style={{ fontFamily: 'var(--font-display)' }}>
                  {testimonials[current].name}
                </h3>
                <p className="text-gray-400 text-sm">{testimonials[current].role}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Nav Buttons */}
          <button
            onClick={() => navigate(-1)}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-cream transition-colors"
          >
            <HiChevronLeft className="text-forest" />
          </button>
          <button
            onClick={() => navigate(1)}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-cream transition-colors"
          >
            <HiChevronRight className="text-forest" />
          </button>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === current ? 'bg-forest w-8' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
