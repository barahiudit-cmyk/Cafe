import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Coffee, Leaf, Flame } from 'lucide-react';
import FavoriteButton from '@/components/shared/FavoriteButton';
import RatingStars from '@/components/shared/RatingStars';
import { getItemBySlug, menuItems } from '@/data/menuItems';
import { formatPrice } from '@/lib/utils';

const TAG_COLORS: Record<string, string> = {
  signature: 'bg-[var(--accent)] text-white',
  bestseller: 'bg-[var(--coffee)] text-white',
  new: 'bg-emerald-500 text-white',
  vegan: 'bg-emerald-100 text-emerald-700',
  veg: 'bg-green-100 text-green-700',
  'gluten-free': 'bg-blue-100 text-blue-700',
  spicy: 'bg-red-100 text-red-700',
  'dairy-free': 'bg-orange-100 text-orange-700',
  'contains-nuts': 'bg-amber-100 text-amber-700',
};

export default function MenuDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const item = slug ? getItemBySlug(slug) : undefined;

  if (!item) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-[var(--bg)]">
        <div className="text-center">
          <p className="text-6xl mb-4">🍽️</p>
          <h2 className="text-h2 text-[var(--text-primary)] mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
            Item Not Found
          </h2>
          <p className="text-[var(--text-secondary)] mb-6">This dish has left the building (or was never here).</p>
          <Link to="/menu" className="px-6 py-3 bg-[var(--accent)] text-white rounded-xl font-medium hover:bg-[var(--accent-hover)] transition-colors">
            Back to Menu
          </Link>
        </div>
      </div>
    );
  }

  const relatedItems = menuItems
    .filter((m) => m.category === item.category && m.id !== item.id && m.available)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-[var(--bg)] pt-20">
      <div className="container-custom py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-[var(--text-muted)] mb-8">
          <Link to="/" className="hover:text-[var(--accent)] transition-colors">Home</Link>
          <span>/</span>
          <Link to="/menu" className="hover:text-[var(--accent)] transition-colors">Menu</Link>
          <span>/</span>
          <span className="text-[var(--text-primary)]">{item.name}</span>
        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] mb-8 transition-colors"
        >
          <ArrowLeft size={16} />
          Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          {/* Image - STICKY */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative lg:sticky lg:top-24 self-start"
          >
            <div className="aspect-square rounded-2xl overflow-hidden bg-[var(--surface-elevated)] shadow-[var(--shadow-sm)]">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Tags overlay */}
            <div className="absolute top-5 left-5 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${TAG_COLORS[tag] || 'bg-[var(--surface)] text-[var(--text-secondary)]'}`}
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="absolute top-5 right-5">
              <FavoriteButton itemId={item.id} size={20} />
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-caption text-[var(--accent)] block mb-3">
              {item.category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
              {item.subcategory && ` · ${item.subcategory}`}
            </span>

            <h1 className="text-h1 text-[var(--text-primary)] mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
              {item.name}
            </h1>

            <p
              className="text-pull-quote text-[var(--text-secondary)] mb-6"
              style={{ fontFamily: 'var(--font-accent)' }}
            >
              {item.tagline}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <RatingStars rating={item.rating} size={16} showValue />
              <span className="text-sm text-[var(--text-muted)]">({item.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            {item.sizes ? (
              <div className="mb-6">
                <p className="text-caption text-[var(--text-muted)] mb-3">Available Sizes</p>
                <div className="flex flex-wrap gap-3">
                  {item.sizes.map((size) => (
                    <div
                      key={size.label}
                      className="px-5 py-3 bg-[var(--surface)] border border-[var(--border)] rounded-xl"
                    >
                      <p className="text-xs text-[var(--text-muted)] mb-0.5">{size.label}</p>
                      <p className="text-base font-semibold text-[var(--accent)]">{formatPrice(size.price)}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="mb-6">
                <p className="text-3xl font-bold text-[var(--accent)]" style={{ fontFamily: 'var(--font-heading)' }}>
                  {formatPrice(item.price)}
                </p>
              </div>
            )}

            {/* Divider */}
            <hr className="border-[var(--border)] mb-6" />

            {/* Long Description */}
            <p className="text-base text-[var(--text-secondary)] leading-relaxed mb-8">
              {item.longDescription}
            </p>

            {/* Meta Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {item.origin && (
                <div className="flex items-start gap-3 p-4 bg-[var(--surface)] border border-[var(--border)] rounded-xl">
                  <MapPin size={16} className="text-[var(--accent)] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-[var(--text-muted)] mb-0.5">Origin</p>
                    <p className="text-sm font-medium text-[var(--text-primary)]">{item.origin}</p>
                  </div>
                </div>
              )}
              {item.brewMethod && (
                <div className="flex items-start gap-3 p-4 bg-[var(--surface)] border border-[var(--border)] rounded-xl">
                  <Coffee size={16} className="text-[var(--accent)] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-[var(--text-muted)] mb-0.5">Method</p>
                    <p className="text-sm font-medium text-[var(--text-primary)]">{item.brewMethod}</p>
                  </div>
                </div>
              )}
              {item.pairingWith && (
                <div className="flex items-start gap-3 p-4 bg-[var(--surface)] border border-[var(--border)] rounded-xl">
                  <Leaf size={16} className="text-[var(--accent)] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-[var(--text-muted)] mb-0.5">Pairs with</p>
                    <p className="text-sm font-medium text-[var(--text-primary)]">{item.pairingWith}</p>
                  </div>
                </div>
              )}
              {item.calories && (
                <div className="flex items-start gap-3 p-4 bg-[var(--surface)] border border-[var(--border)] rounded-xl">
                  <Flame size={16} className="text-[var(--accent)] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-[var(--text-muted)] mb-0.5">Calories (approx.)</p>
                    <p className="text-sm font-medium text-[var(--text-primary)]">{item.calories} kcal</p>
                  </div>
                </div>
              )}
            </div>

            {/* Ingredients */}
            <div className="mb-8">
              <p className="text-caption text-[var(--text-muted)] mb-3">Key Ingredients</p>
              <div className="flex flex-wrap gap-2">
                {item.ingredients.map((ing) => (
                  <span
                    key={ing}
                    className="px-3 py-1.5 bg-[var(--surface)] border border-[var(--border)] rounded-full text-xs text-[var(--text-secondary)]"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Link
              to="/reservations"
              className="inline-flex items-center justify-center w-full py-4 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-medium rounded-xl transition-colors"
            >
              Reserve a Table to Try This
            </Link>
          </motion.div>
        </div>

        {/* Related Items */}
        {relatedItems.length > 0 && (
          <div>
            <h2
              className="text-h3 text-[var(--text-primary)] mb-8"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              You might also enjoy
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {relatedItems.map((related) => (
                <Link
                  key={related.id}
                  to={`/menu/${related.slug}`}
                  className="group flex flex-col bg-[var(--surface)] border border-[var(--border)] rounded-2xl overflow-hidden hover:shadow-[var(--shadow-md)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="h-40 overflow-hidden bg-[var(--surface-elevated)]">
                    <img
                      src={related.image}
                      alt={related.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3
                      className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors mb-1"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {related.name}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)]">{formatPrice(related.price)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
