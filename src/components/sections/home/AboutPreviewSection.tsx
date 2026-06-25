import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const IMAGES = [
  'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=600&h=700&fit=crop&q=80',
  'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&h=500&fit=crop&q=80',
  'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=600&h=400&fit=crop&q=80',
];

const STATS = [
  { value: '2019', label: 'Est. in Vizag' },
  { value: '50+', label: 'Menu Items' },
  { value: '4.9★', label: 'Google Rating' },
  { value: '100%', label: 'Direct Trade' },
];

export default function AboutPreviewSection() {
  return (
    <section className="section-padding bg-[var(--bg)] overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-xl)]">
              <img
                src={IMAGES[0]}
                alt="SlowDrew Cafe interior"
                className="w-full h-96 lg:h-[480px] object-cover"
              />
            </div>

            {/* Floating Image 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-8 -right-6 w-40 h-32 md:w-52 md:h-40 rounded-xl overflow-hidden border-4 border-[var(--surface)] shadow-[var(--shadow-lg)]"
            >
              <img src={IMAGES[2]} alt="Cafe ambience" className="w-full h-full object-cover" />
            </motion.div>

            {/* Floating Image 2 */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -top-6 -left-6 w-32 h-24 md:w-44 md:h-32 rounded-xl overflow-hidden border-4 border-[var(--surface)] shadow-[var(--shadow-lg)]"
            >
              <img src={IMAGES[1]} alt="Coffee sourcing" className="w-full h-full object-cover" />
            </motion.div>

            {/* Gold Accent Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute bottom-12 left-6 bg-[var(--accent)] text-white px-5 py-4 rounded-xl shadow-lg"
            >
              <p className="text-caption mb-1">Since</p>
              <p className="text-3xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>2022</p>
              <p className="text-xs opacity-80">Crafting Vizag's Coffee Culture</p>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="text-caption text-[var(--accent)] block mb-4">Our Story</span>

            <h2 className="text-h2 text-[var(--text-primary)] mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              More Than a Cafe.{' '}
              <em className="not-italic text-[var(--accent)]">A Commitment.</em>
            </h2>

            <p
              className="text-pull-quote text-[var(--text-secondary)] mb-6"
              style={{ fontFamily: 'var(--font-accent)' }}
            >
              "We opened SlowDrew because Vizag deserved a cafe that treats coffee as the extraordinary agricultural product it is — while also celebrating the flavors of our coastal home."
            </p>

            <p className="text-base text-[var(--text-secondary)] leading-relaxed mb-6">
              Founded by Q-Grader certified barista Arjun Naidu and Cordon Bleu-trained chef Meera Sharma, SlowDrew Cafe sits at the intersection of world-class coffee culture and the bold, layered flavors of India's culinary heritage.
            </p>

            <p className="text-base text-[var(--text-secondary)] leading-relaxed mb-10">
              Every bean on our menu is sourced through direct trade partnerships with Indian farmers — from Araku Valley tribal cooperatives to century-old Coorg estates. We know our farmers by name. That's not a tagline. That's how we shop.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10 py-8 border-y border-[var(--border)]">
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p
                    className="text-2xl font-bold text-[var(--accent)] mb-1"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-caption text-[var(--text-muted)]">{stat.label}</p>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--accent)] border border-transparent hover:border-[var(--accent)] hover:bg-[transparent] text-white font-medium rounded-xl transition-all duration-200 hover:gap-3 text-sm"
            >Read Our Full Story <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
