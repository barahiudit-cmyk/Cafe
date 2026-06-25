import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import RatingStars from '@/components/shared/RatingStars';
import { getFeaturedReviews } from '@/data/reviews';
import { formatDate } from '@/lib/utils';

const reviews = getFeaturedReviews();

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + reviews.length) % reviews.length);
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
  };

  return (
    <section className="section-padding bg-[var(--bg)]">
      <div className="container-custom">
        <SectionHeader
          eyebrow="Guest Stories"
          title="What Our Guests Say"
          subtitle="Real words from the people who make our mornings meaningful."
          className="mb-16"
        />

       

        {/* Featured Large Review Carousel */}
        <div className="relative bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-8 md:p-12 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 opacity-5" style={{
            background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
          }} />

          <div className="relative">
            <Quote size={40} className="text-[var(--accent)] opacity-30 mb-6" />

            <div className="min-h-[120px] flex items-center">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="w-full"
                >
                  <p
                    className="text-xl md:text-2xl text-[var(--text-primary)] leading-relaxed italic mb-8"
                    style={{ fontFamily: 'var(--font-accent)', fontWeight: 300 }}
                  >
                    "{reviews[currentIndex].text}"
                  </p>

                  <div className="flex items-center gap-4">
                    <img
                      src={reviews[currentIndex].avatar}
                      alt={reviews[currentIndex].name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-[var(--text-primary)]">
                        {reviews[currentIndex].name}
                      </p>
                      <div className="flex items-center gap-2 mt-0.5">
                        <RatingStars rating={reviews[currentIndex].rating} size={12} />
                        <span className="text-xs text-[var(--text-muted)]">
                          {formatDate(reviews[currentIndex].date)}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between mt-8">
              <div className="flex items-center gap-2">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setDirection(i > currentIndex ? 1 : -1); setCurrentIndex(i); }}
                    className={`transition-all duration-200 rounded-full ${
                      i === currentIndex
                        ? 'w-6 h-2 bg-[var(--accent)]'
                        : 'w-2 h-2 bg-[var(--border)]'
                    }`}
                    aria-label={`Review ${i + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => paginate(-1)}
                  className="w-10 h-10 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
                  aria-label="Previous review"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={() => paginate(1)}
                  className="w-10 h-10 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
                  aria-label="Next review"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
        
         {/* Grid Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
          {reviews.slice(0, 6).map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="review-card flex flex-col gap-4 transition-theme"
            >
              {/* Quote Icon */}
              <Quote size={20} className="text-[var(--accent)] opacity-60" />

              {/* Stars */}
              <RatingStars rating={review.rating} size={14} />

              {/* Text */}
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed flex-1 italic">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-3 border-t border-[var(--border)]">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-9 h-9 rounded-full object-cover bg-[var(--surface-elevated)]"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">{review.name}</p>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs text-[var(--text-muted)]">
                      via {review.platform.charAt(0).toUpperCase() + review.platform.slice(1)}
                    </span>
                    <span className="text-[var(--border)]">·</span>
                    <span className="text-xs text-[var(--text-muted)]">{formatDate(review.date)}</span>
                  </div>
                </div>
                {review.verified && (
                  <span className="ml-auto text-[10px] font-medium text-green-600 bg-green-50 dark:bg-green-900/20 px-2 py-0.5 rounded-full">
                    Verified
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
