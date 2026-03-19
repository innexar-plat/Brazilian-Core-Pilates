import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('/studio_interior.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-forest/60 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-forest/30 to-white/95" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-black/20 blur-2xl rounded-full" />
            <img
              src="/logo.png"
              alt="Brazilian Core Pilates"
              className="relative w-40 h-40 md:w-52 md:h-52 mx-auto object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] brightness-0 invert"
            />
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-white mb-6 leading-tight drop-shadow-lg"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 600,
          }}
        >
          Strength, Balance &{' '}
          <span className="text-white">Brazilian Wellness</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-md"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          A modern Pilates experience designed for body and mind
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full mb-20"
        >
          <a href="#booking" className="btn-primary text-base w-full sm:w-auto justify-center shadow-lg">
            Book a Session <HiArrowRight />
          </a>
          <a 
            href="#plans" 
            className="btn-secondary text-base w-full sm:w-auto justify-center !text-white !border-white hover:!bg-white hover:!text-forest"
          >
            View Plans
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator - Moved outside relative wrapper to align safely to section bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-1.5 backdrop-blur-sm"
        >
          <div className="w-1.5 h-3 bg-white/80 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
