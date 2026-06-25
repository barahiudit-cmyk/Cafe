import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import { galleryItems, getGalleryByCategory } from '@/data/galleryItems';
import type { GalleryCategory } from '@/lib/types';

const CATEGORIES: { value: GalleryCategory; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'cafe', label: 'The Space' },
  { value: 'coffee', label: 'Coffee' },
  { value: 'food', label: 'Food' },
  { value: 'people', label: 'People' },
  { value: 'events', label: 'Events' },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = getGalleryByCategory(activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const goNext = () => setLightboxIndex((prev) => prev !== null ? (prev + 1) % filtered.length : null);
  const goPrev = () => setLightboxIndex((prev) => prev !== null ? (prev - 1 + filtered.length) % filtered.length : null);

  return (
    <main className="min-h-screen bg-[var(--bg)] pt-20">
      {/* Hero */}
      <div className="relative h-64 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=1920&h=600&fit=crop&q=80"
          alt="Gallery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65 flex items-center justify-center">
          <div className="text-center">
            <motion.span initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-caption text-[var(--accent)] block mb-3">
              Visual Journal
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-h1 text-white"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Life at Latte Global
            </motion.h1>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        <SectionHeader
          eyebrow="Photography"
          title="Every Moment, Captured"
          subtitle="From golden-hour brews to the faces behind the bar — our story in photographs."
          className="mb-12"
        />

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.value
                  ? 'bg-[var(--accent)] text-white shadow-md'
                  : 'bg-[var(--surface)] border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="masonry-grid"
          >
            {filtered.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.4) }}
                className="masonry-item group relative cursor-pointer rounded-xl overflow-hidden bg-[var(--surface-elevated)] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-lg)] transition-shadow"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ZoomIn size={28} className="text-white" />
                  </motion.div>
                </div>
                {/* Caption on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                  <p className="text-xs text-white font-medium">{item.caption}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox-overlay"
            onClick={closeLightbox}
          >
            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-5xl max-h-[90vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].alt}
                className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm rounded-b-xl p-4 text-center">
                <p className="text-white text-sm">{filtered[lightboxIndex].caption}</p>
                <p className="text-white/50 text-xs mt-1">{lightboxIndex + 1} / {filtered.length}</p>
              </div>
            </motion.div>

            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            {/* Nav Buttons */}
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Instagram CTA */}
      <div className="py-16 bg-[var(--surface)] border-t border-[var(--border)]">
        <div className="container-custom text-center">
          <p className="text-caption text-[var(--accent)] mb-3">Follow the Journey</p>
          <h2 className="text-h2 text-[var(--text-primary)] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            @latteglobalcafe
          </h2>
          <p className="text-[var(--text-secondary)] mb-6 max-w-sm mx-auto">
            Daily moments from the brew bar, kitchen, and community. Follow us on Instagram.
          </p>
          <a
            href="https://instagram.com/latteglobalcafe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white font-medium rounded-xl hover:opacity-90 transition-opacity"
          >
            Follow on Instagram
          </a>
        </div>
      </div>
    </main>
  );
}
