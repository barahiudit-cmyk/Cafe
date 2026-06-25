import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import { getFeaturedGalleryItems } from '@/data/galleryItems';

const items = getFeaturedGalleryItems().slice(0, 7);

export default function GalleryPreviewSection() {
  return (
    <section className="section-padding bg-[var(--surface-elevated)]">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <SectionHeader
            eyebrow="Visual Stories"
            title="Life at SlowDrew"
            subtitle="Moments captured — from first pours to last bites."
            align="left"
          />
          <Link
            to="/gallery"
            className="flex items-center gap-2 text-sm font-medium text-[var(--accent)] hover:gap-3 transition-all whitespace-nowrap"
          >
            Full Gallery <ArrowRight size={16} />
          </Link>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-4 grid-rows-2 gap-3 h-[450px] md:h-[500px]">
          {/* Large item — top left, spans 2 cols 2 rows */}
          {items[0] && (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="col-span-2 row-span-2 relative group overflow-hidden rounded-2xl bg-[var(--surface-elevated)] cursor-pointer"
            >
              <img
                src={items[0].src}
                alt={items[0].alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <p className="text-white text-sm font-medium">{items[0].caption}</p>
              </div>
            </motion.div>
          )}

          {/* Top right 1 */}
          {items[1] && (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="col-span-2 row-span-1 relative group overflow-hidden rounded-2xl bg-[var(--surface-elevated)] cursor-pointer"
            >
              <img
                src={items[1].src}
                alt={items[1].alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-white text-xs">{items[1].caption}</p>
              </div>
            </motion.div>
          )}

          {/* Top right 2 */}
          {items[2] && (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="col-span-1 row-span-1 relative group overflow-hidden rounded-2xl bg-[var(--surface-elevated)] cursor-pointer"
            >
              <img
                src={items[2].src}
                alt={items[2].alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          )}

          {/* Mid right */}
          {items[3] && (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="col-span-1 row-span-1 relative group overflow-hidden rounded-2xl bg-[var(--surface-elevated)] cursor-pointer"
            >
              <img
                src={items[3].src}
                alt={items[3].alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          )}

          {/* Bottom row — 4 items */}
          {/* {items.slice(4, 7).map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              className={`${i === 2 ? 'col-span-2' : 'col-span-1'} row-span-1 relative group overflow-hidden rounded-2xl bg-[var(--surface-elevated)] cursor-pointer`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-white text-xs">{item.caption}</p>
              </div>
            </motion.div>
          ))} */}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-3 mt-8 text-sm text-[var(--text-secondary)]"
        >
          <span>Follow us at</span>
          <a
            href="https://instagram.com/latteglobalcafe"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[var(--accent)] hover:underline"
          >
            @latteglobalcafe
          </a>
          <span>for daily moments</span>
        </motion.div>
      </div>
    </section>
  );
}
