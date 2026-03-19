import { useState, useMemo, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { HiCalendar, HiClock, HiCheck, HiArrowRight, HiArrowLeft } from 'react-icons/hi';

const timeSlots = [
  '07:00', '08:00', '09:00', '10:00', '11:00',
  '14:00', '15:00', '16:00', '17:00', '18:00',
];

const sessionTypes = [
  { id: 'private', label: 'Private Session', price: '$180' },
  { id: 'group', label: 'Group Class', price: '$80' },
  { id: 'online', label: 'Online Class', price: '$60' },
];

export default function Booking() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const daysInMonth = useMemo(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const days = [];
    for (let i = 0; i < firstDay; i++) days.push(null);
    for (let d = 1; d <= lastDate; d++) {
      const date = new Date(year, month, d);
      days.push({
        day: d,
        date,
        isPast: date < today,
        isToday: date.getTime() === today.getTime(),
        isWeekend: date.getDay() === 0,
      });
    }
    return days;
  }, [currentMonth]);

  const monthName = currentMonth.toLocaleString('en-US', { month: 'long', year: 'numeric' });

  const navigateMonth = (dir) => {
    setCurrentMonth((prev) => {
      const n = new Date(prev);
      n.setMonth(n.getMonth() + dir);
      return n;
    });
  };

  const canProceed =
    (step === 1 && selectedType) ||
    (step === 2 && selectedDate) ||
    (step === 3 && selectedTime);

  return (
    <section id="booking" className="section-padding bg-white" ref={ref}>
      <div className="max-w-5xl mx-auto">
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
              Book Now
            </span>
            <div className="w-10 h-[2px] bg-gold" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title"
          >
            Schedule Your Session
          </motion.h2>
        </div>

        {/* Progress Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          {[
            { num: 1, label: 'Session Type' },
            { num: 2, label: 'Choose Date' },
            { num: 3, label: 'Select Time' },
          ].map(({ num, label }) => (
            <div key={num} className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                  step >= num
                    ? 'bg-forest text-white'
                    : 'bg-cream text-gray-400'
                }`}
              >
                {step > num ? <HiCheck /> : num}
              </div>
              <span className={`text-sm hidden sm:block ${step >= num ? 'text-forest font-medium' : 'text-gray-400'}`}>
                {label}
              </span>
              {num < 3 && <div className="w-12 h-[2px] bg-cream-dark" />}
            </div>
          ))}
        </motion.div>

        {/* Booking Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.06)] border border-cream-dark p-6 md:p-10"
        >
          <AnimatePresence mode="wait">
            {/* Step 1: Session Type */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold text-forest mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                  Choose Your Session Type
                </h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  {sessionTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setSelectedType(type.id)}
                      className={`p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                        selectedType === type.id
                          ? 'border-forest bg-forest/5'
                          : 'border-cream-dark hover:border-gold/50'
                      }`}
                    >
                      <p className="font-semibold text-forest mb-1">{type.label}</p>
                      <p className="text-gold font-bold text-lg">{type.price}</p>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2: Calendar */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold text-forest mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                  <HiCalendar className="inline mr-2" /> Pick a Date
                </h3>
                <div className="max-w-md mx-auto">
                  <div className="flex items-center justify-between mb-6">
                    <button onClick={() => navigateMonth(-1)} aria-label="Previous Month" className="p-2 hover:bg-cream rounded-lg transition-colors">
                      <HiArrowLeft className="text-forest" />
                    </button>
                    <span className="font-semibold text-forest">{monthName}</span>
                    <button onClick={() => navigateMonth(1)} aria-label="Next Month" className="p-2 hover:bg-cream rounded-lg transition-colors">
                      <HiArrowRight className="text-forest" />
                    </button>
                  </div>
                  <div className="calendar-grid mb-2">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
                      <div key={d} className="text-center text-xs text-gray-400 font-medium py-2">
                        {d}
                      </div>
                    ))}
                  </div>
                  <div className="calendar-grid">
                    {daysInMonth.map((d, i) =>
                      d ? (
                        <button
                          key={i}
                          disabled={d.isPast || d.isWeekend}
                          onClick={() => setSelectedDate(d.date)}
                          className={`calendar-day ${
                            selectedDate && selectedDate.getTime() === d.date.getTime()
                              ? 'selected'
                              : ''
                          } ${d.isToday ? 'today' : ''}`}
                        >
                          {d.day}
                        </button>
                      ) : (
                        <div key={i} />
                      )
                    )}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Time Slots */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold text-forest mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                  <HiClock className="inline mr-2" /> Select a Time
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 max-w-lg mx-auto">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`py-3 px-4 rounded-xl border-2 font-medium text-sm transition-all duration-300 ${
                        selectedTime === time
                          ? 'border-forest bg-forest text-white'
                          : 'border-cream-dark hover:border-gold/50 text-forest'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-10 pt-6 border-t border-cream-dark">
            <button
              onClick={() => setStep((s) => Math.max(1, s - 1))}
              className={`flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-forest transition-colors ${
                step === 1 ? 'invisible' : ''
              }`}
            >
              <HiArrowLeft /> Back
            </button>

            {step < 3 ? (
              <button
                onClick={() => canProceed && setStep((s) => s + 1)}
                disabled={!canProceed}
                className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:transform-none disabled:hover:shadow-none"
              >
                Continue <HiArrowRight />
              </button>
            ) : (
              <button
                onClick={() => {
                  if (canProceed) {
                    setStep(1);
                    setSelectedDate(null);
                    setSelectedTime(null);
                    setSelectedType(null);
                    alert('Booking confirmed! We will contact you shortly.');
                  }
                }}
                disabled={!canProceed}
                className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Confirm Booking <HiCheck />
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
