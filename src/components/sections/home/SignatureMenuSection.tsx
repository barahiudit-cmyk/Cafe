import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import FavoriteButton from '@/components/shared/FavoriteButton';
import RatingStars from '@/components/shared/RatingStars';
import { getFeaturedItems } from '@/data/menuItems';
import { formatPrice } from '@/lib/utils';

const featured = getFeaturedItems().slice(0, 6);

const TAG_COLORS: Record<string, string> = {
  signature: 'bg-[var(--accent)] text-white',
  bestseller: 'bg-[var(--coffee)] text-white',
  new: 'bg-[var(--success)] text-white',
  vegan: 'bg-emerald-100 text-emerald-800',
  veg: 'bg-green-100 text-green-800',
  'gluten-free': 'bg-blue-100 text-blue-800',
};

export default function SignatureMenuSection() {
  return (
    <section className="section-padding bg-[var(--surface-elevated)]">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <SectionHeader
            eyebrow="Our Offerings"
            title="Signature Creations"
            subtitle="From single-origin pour-overs to coastal-inspired brunch — every item tells a story."
            align="left"
          />
          <Link
            to="/menu"
            className="flex items-center gap-2 text-sm font-medium text-[var(--accent)] hover:gap-3 transition-all whitespace-nowrap"
          >
            View Full Menu <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative flex flex-col bg-[var(--surface)] border border-[var(--border)] rounded-2xl overflow-hidden hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden bg-[var(--surface-elevated)]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Tags */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  {item.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${TAG_COLORS[tag] || 'bg-[var(--surface)] text-[var(--text-secondary)]'}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Favorite */}
                <div className="absolute top-3 right-3">
                  <FavoriteButton itemId={item.id} />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5">
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <Link to={`/menu/${item.slug}`}>
                    <h3
                      className="text-base font-semibold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors leading-snug"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {item.name}
                    </h3>
                  </Link>
                  <span className="text-base font-semibold text-[var(--accent)] whitespace-nowrap flex-shrink-0">
                    {formatPrice(item.price)}
                  </span>
                </div>

                <p className="text-xs text-[var(--text-muted)] italic mb-2" style={{ fontFamily: 'var(--font-accent)' }}>
                  {item.tagline}
                </p>

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 flex-1">
                  {item.description}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-[var(--border)]">
                  <div className="flex items-center gap-1.5">
                    <RatingStars rating={item.rating} size={12} />
                    <span className="text-xs text-[var(--text-muted)]">
                      {item.rating} ({item.reviewCount})
                    </span>
                  </div>
                  <Link
                    to={`/menu/${item.slug}`}
                    className="text-xs font-medium text-[var(--accent)] hover:underline"
                  >
                    Details →
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
