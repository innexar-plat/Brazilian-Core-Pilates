import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding bg-cream" ref={ref}>
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
              Contact
            </span>
            <div className="w-10 h-[2px] bg-gold" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title"
          >
            Get In Touch
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 space-y-8"
          >
            <div>
              <h3
                className="text-xl font-semibold text-forest mb-4"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Let's Start Your Journey
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Ready to transform your wellness? Contact us for a free consultation 
                or to book your first session.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-forest/5 flex items-center justify-center">
                  <HiMail className="text-forest text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-forest font-medium text-sm">hello@braziliancorepilates.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-forest/5 flex items-center justify-center">
                  <HiPhone className="text-forest text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="text-forest font-medium text-sm">+1 (305) 555-0199</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-forest/5 flex items-center justify-center">
                  <HiLocationMarker className="text-forest text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Address</p>
                  <p className="text-forest font-medium text-sm">1200 Ocean Drive — Miami, FL</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="rounded-2xl overflow-hidden h-48 relative shadow-inner">
              <img src="/studio_exterior.png" alt="Studio Exterior" className="absolute inset-0 w-full h-full object-cover opacity-80" loading="lazy" width="800" height="400" />
              <div className="absolute inset-0 bg-forest/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center bg-white/90 backdrop-blur px-4 py-2 rounded-xl shadow-md">
                  <HiLocationMarker className="text-3xl text-forest mx-auto mb-1" />
                  <p className="text-forest font-semibold text-sm">Miami, Florida</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-forest mb-2">Name</label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-cream-dark focus:border-forest focus:outline-none transition-colors text-sm"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-forest mb-2">Email</label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-cream-dark focus:border-forest focus:outline-none transition-colors text-sm"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-forest mb-2">Phone</label>
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+1 (305) 555-0199"
                  className="w-full px-4 py-3.5 rounded-xl border-2 border-cream-dark focus:border-forest focus:outline-none transition-colors text-sm"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-forest mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your goals..."
                  className="w-full px-4 py-3.5 rounded-xl border-2 border-cream-dark focus:border-forest focus:outline-none transition-colors text-sm resize-none"
                  required
                />
              </div>

              <button type="submit" className="btn-primary w-full justify-center py-4 !rounded-xl">
                {submitted ? '✓ Message Sent!' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/13055550199"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: 'spring' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] z-50"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-white text-2xl" />
      </motion.a>
    </section>
  );
}
