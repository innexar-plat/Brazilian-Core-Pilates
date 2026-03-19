import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiLockClosed, HiCreditCard, HiShieldCheck } from 'react-icons/hi';

export default function Payment() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  const formatCardNumber = (value) => {
    const v = value.replace(/\D/g, '').slice(0, 16);
    return v.replace(/(.{4})/g, '$1 ').trim();
  };

  const formatExpiry = (value) => {
    const v = value.replace(/\D/g, '').slice(0, 4);
    if (v.length >= 2) return v.slice(0, 2) + '/' + v.slice(2);
    return v;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setSuccess(true);
    }, 2000);
  };

  return (
    <section id="payment" className="section-padding bg-white" ref={ref}>
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <div className="w-10 h-[2px] bg-gold" />
            <span className="text-gold font-medium text-sm tracking-widest uppercase">
              Checkout
            </span>
            <div className="w-10 h-[2px] bg-gold" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title"
          >
            Secure Payment
          </motion.h2>
        </div>

        {/* Payment Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.06)] border border-cream-dark overflow-hidden"
        >
          {/* Card Preview */}
          <div
            className="p-8 text-white relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #0C3C2C 0%, #1A5C42 50%, #0C3C2C 100%)',
            }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gold/10 -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />
            <div className="relative">
              <div className="flex items-center justify-between mb-8">
                <HiCreditCard className="text-3xl text-gold" />
                <HiShieldCheck className="text-xl text-gold/60" />
              </div>
              <div className="text-xl tracking-[0.25em] font-mono mb-6">
                {cardNumber || '•••• •••• •••• ••••'}
              </div>
              <div className="flex justify-between text-sm">
                <div>
                  <p className="text-white/50 text-xs mb-1">Card Holder</p>
                  <p className="uppercase tracking-wider font-medium">{cardName || 'YOUR NAME'}</p>
                </div>
                <div>
                  <p className="text-white/50 text-xs mb-1">Expires</p>
                  <p className="tracking-wider font-medium">{expiry || 'MM/YY'}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="p-8">
            {success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 rounded-full bg-forest/10 flex items-center justify-center mx-auto mb-4">
                  <HiShieldCheck className="text-3xl text-forest" />
                </div>
                <h3 className="text-xl font-semibold text-forest mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                  Payment Successful!
                </h3>
                <p className="text-gray-500 text-sm">
                  Your membership has been activated. Welcome to Brazilian Core Pilates!
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-forest mb-2">Card Number</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                      placeholder="1234 5678 9012 3456"
                      className="w-full px-4 py-3.5 pl-12 rounded-xl border-2 border-cream-dark focus:border-forest focus:outline-none transition-colors text-sm"
                      maxLength={19}
                    />
                    <HiCreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-forest mb-2">Cardholder Name</label>
                  <input
                    type="text"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-cream-dark focus:border-forest focus:outline-none transition-colors text-sm"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-forest mb-2">Expiry Date</label>
                    <input
                      type="text"
                      value={expiry}
                      onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                      placeholder="MM/YY"
                      className="w-full px-4 py-3.5 rounded-xl border-2 border-cream-dark focus:border-forest focus:outline-none transition-colors text-sm"
                      maxLength={5}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-forest mb-2">CVC</label>
                    <div className="relative">
                      <input
                        type="text"
                        value={cvc}
                        onChange={(e) => setCvc(e.target.value.replace(/\D/g, '').slice(0, 3))}
                        placeholder="123"
                        className="w-full px-4 py-3.5 pr-10 rounded-xl border-2 border-cream-dark focus:border-forest focus:outline-none transition-colors text-sm"
                        maxLength={3}
                      />
                      <HiLockClosed className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={processing}
                  className="w-full btn-primary justify-center py-4 text-base !rounded-xl mt-4 disabled:opacity-60"
                >
                  {processing ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    <>
                      <HiLockClosed className="mr-2" /> Pay $399.00
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-4 pt-2 text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <HiShieldCheck /> SSL Encrypted
                  </span>
                  <span>•</span>
                  <span>256-bit Encryption</span>
                  <span>•</span>
                  <span>PCI Compliant</span>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
