import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Phone } from 'lucide-react';
import { SITE_CONFIG, OPENING_HOURS } from '@/lib/constants';

const BG = 'https://images.unsplash.com/photo-1541014741259-de529411b96a?w=1920&h=800&fit=crop&q=80';

export default function ReservationCTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={BG}
          alt="SlowDrew Cafe terrace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-[var(--accent)]/10" />
      </div>

      <div className="relative z-10 container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-caption text-[var(--accent)] block mb-5"
          >
            Book Your Experience
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-h1 text-white mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Reserve Your Table at
            <br />
            <span className="text-[var(--accent)]">SlowDrew Cafe</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-pull-quote text-white/75 mb-10"
            style={{ fontFamily: 'var(--font-accent)' }}
          >
            Whether it's a quiet Monday morning or a weekend brunch celebration — we'll have the perfect table, the right light, and your first cup ready.
          </motion.p>

          {/* Opening Hours */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 text-sm text-white/70"
          >
            {OPENING_HOURS.map((oh) => (
              <div key={oh.days} className="flex flex-col items-center">
                <span className="text-caption text-[var(--accent)] mb-1">{oh.days}</span>
                <span className="text-white font-medium">{oh.hours}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/reservations"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-medium rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
            >
              <Calendar size={18} />
              Book a Table Online
            </Link>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-medium rounded-xl border border-white/30 transition-all duration-200 hover:-translate-y-0.5"
            >
              <Phone size={18} />
              Call to Reserve
            </a>
          </motion.div>

          {/* Small Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-xs text-white/40 mt-6"
          >
            Walk-ins welcome subject to availability. We recommend booking for weekends.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
