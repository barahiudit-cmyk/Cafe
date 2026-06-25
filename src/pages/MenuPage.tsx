import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, X } from 'lucide-react';
import FavoriteButton from '@/components/shared/FavoriteButton';
import RatingStars from '@/components/shared/RatingStars';
import { menuItems } from '@/data/menuItems';
import { MENU_CATEGORIES } from '@/lib/constants';
import { formatPrice } from '@/lib/utils';
import type { MenuCategory } from '@/lib/types';

const TAG_COLORS: Record<string, string> = {
  signature: 'bg-[var(--accent)] text-white',
  bestseller: 'bg-[var(--coffee)] text-white',
  new: 'bg-emerald-500 text-white',
  vegan: 'bg-emerald-100 text-emerald-800',
  veg: 'bg-green-100 text-green-800',
  'gluten-free': 'bg-blue-100 text-blue-800',
  spicy: 'bg-red-100 text-red-800',
};

const DIETARY_FILTERS = ['veg', 'vegan', 'gluten-free', 'spicy', 'signature', 'new'];

export default function MenuPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = (searchParams.get('category') || 'all') as MenuCategory;
  const [activeCategory, setActiveCategory] = useState<MenuCategory>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDietaryFilters, setActiveDietaryFilters] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const filteredItems = useMemo(() => {
    let items = menuItems.filter((i) => i.available);

    if (activeCategory !== 'all') {
      items = items.filter((i) => i.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      items = items.filter(
        (i) =>
          i.name.toLowerCase().includes(q) ||
          i.description.toLowerCase().includes(q) ||
          i.tagline.toLowerCase().includes(q) ||
          (i.origin && i.origin.toLowerCase().includes(q))
      );
    }

    if (activeDietaryFilters.length > 0) {
      items = items.filter((i) =>
        activeDietaryFilters.every((f) => i.tags.includes(f as typeof i.tags[number]))
      );
    }

    return items;
  }, [activeCategory, searchQuery, activeDietaryFilters]);

  const handleCategoryChange = (cat: MenuCategory) => {
    setActiveCategory(cat);
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams, { replace: true });
  };

  const toggleDietaryFilter = (filter: string) => {
    setActiveDietaryFilters((prev) =>
      prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]
    );
  };

  return (
    <main className="min-h-screen bg-[var(--bg)] pt-20">
      {/* Hero */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=1920&h=600&fit=crop&q=80"
          alt="Menu at Latte Global Cafe"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65 flex items-center justify-center">
          <div className="text-center">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-caption text-[var(--accent)] block mb-3"
            >
              Curated with care
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-h1 text-white"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Our Menu
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-white/70 mt-3 max-w-md mx-auto"
              style={{ fontFamily: 'var(--font-accent)' }}
            >
              Every item tells a story of origin, technique, and love.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        {/* Search + Filter Bar */}
        <div className="flex flex-col md:flex-row gap-3 mb-8">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
            <input
              type="text"
              placeholder="Search dishes, drinks, or ingredients…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-styled pl-10"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              >
                <X size={14} />
              </button>
            )}
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl border transition-colors text-sm font-medium ${
              showFilters || activeDietaryFilters.length > 0
                ? 'border-[var(--accent)] text-[var(--accent)] bg-[var(--accent)]/8'
                : 'border-[var(--border)] text-[var(--text-secondary)] bg-[var(--surface)]'
            }`}
          >
            <Filter size={16} />
            Filters
            {activeDietaryFilters.length > 0 && (
              <span className="bg-[var(--accent)] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {activeDietaryFilters.length}
              </span>
            )}
          </button>
        </div>

        {/* Dietary Filters */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden mb-6"
            >
              <div className="flex flex-wrap gap-2 py-4 border-y border-[var(--border)]">
                <span className="text-xs text-[var(--text-muted)] self-center mr-2">Filter by:</span>
                {DIETARY_FILTERS.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => toggleDietaryFilter(filter)}
                    className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-all capitalize ${
                      activeDietaryFilters.includes(filter)
                        ? 'bg-[var(--accent)] text-white border-[var(--accent)]'
                        : 'border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)]'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
                {activeDietaryFilters.length > 0 && (
                  <button
                    onClick={() => setActiveDietaryFilters([])}
                    className="px-4 py-1.5 rounded-full text-xs font-medium text-[var(--text-muted)] hover:text-[var(--error)] transition-colors"
                  >
                    Clear all
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Category Tabs — Scrollable */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-10 scrollbar-hide">
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => handleCategoryChange(cat.value as MenuCategory)}
              className={`flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                activeCategory === cat.value
                  ? 'bg-[var(--accent)] text-white shadow-md'
                  : 'bg-[var(--surface)] border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-sm text-[var(--text-muted)]">
            {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'}
            {activeCategory !== 'all' && ` in ${MENU_CATEGORIES.find(c => c.value === activeCategory)?.label}`}
            {searchQuery && ` matching "${searchQuery}"`}
          </p>
        </div>

        {/* Menu Grid */}
        <AnimatePresence mode="wait">
          {filteredItems.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-24"
            >
              <p className="text-4xl mb-4">☕</p>
              <h3 className="text-xl font-heading text-[var(--text-primary)] mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                Nothing found
              </h3>
              <p className="text-[var(--text-secondary)]">
                Try a different search or clear the filters.
              </p>
              <button
                onClick={() => { setSearchQuery(''); setActiveDietaryFilters([]); handleCategoryChange('all'); }}
                className="mt-6 px-6 py-2.5 bg-[var(--accent)] text-white rounded-lg text-sm font-medium hover:bg-[var(--accent-hover)] transition-colors"
              >
                Clear all filters
              </button>
            </motion.div>
          ) : (
            <motion.div
              key={`${activeCategory}-${searchQuery}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
            >
              {filteredItems.map((item, index) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: Math.min(index * 0.05, 0.4) }}
                  className="group flex flex-col bg-[var(--surface)] border border-[var(--border)] rounded-2xl overflow-hidden hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-[var(--surface-elevated)]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                      {item.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${TAG_COLORS[tag] || 'bg-[var(--surface)] text-[var(--text-secondary)]'}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="absolute top-3 right-3">
                      <FavoriteButton itemId={item.id} size={16} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-4">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <Link to={`/menu/${item.slug}`}>
                        <h3
                          className="text-sm font-semibold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors leading-snug"
                          style={{ fontFamily: 'var(--font-heading)' }}
                        >
                          {item.name}
                        </h3>
                      </Link>
                      <span className="text-sm font-semibold text-[var(--accent)] whitespace-nowrap flex-shrink-0">
                        {formatPrice(item.price)}
                      </span>
                    </div>

                    <p className="text-xs text-[var(--text-muted)] italic mb-2" style={{ fontFamily: 'var(--font-accent)' }}>
                      {item.tagline}
                    </p>

                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3 flex-1 line-clamp-2">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between pt-3 border-t border-[var(--border)]">
                      <RatingStars rating={item.rating} size={11} />
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
