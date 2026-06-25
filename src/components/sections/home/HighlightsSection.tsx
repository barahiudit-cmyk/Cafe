import { motion } from 'framer-motion';
import { HIGHLIGHTS } from '@/lib/constants';

export default function HighlightsSection() {
  return (
    <section className="section-padding bg-[var(--bg)]">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {HIGHLIGHTS.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col gap-4 p-7 bg-[var(--surface)] border border-[var(--border)] rounded-2xl hover:border-[var(--accent)]/40 hover:shadow-[var(--shadow-md)] transition-all duration-300 overflow-hidden min-h-[100px]"
            >
              {/* Custom Image Sticker - Bottom Right */}
              <img
                src={item.sticker}
                alt=""
                className="absolute bottom-[-50px] right-[-40px] w-45 h-45 object-contain opacity-10 group-hover:opacity-60 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 pointer-events-none select-none"
                aria-hidden="true"
              />


              <div className="relative z-10">
                {/* Content */}
                <div className="flex items-center gap-1 mb-2">
                  <span
                    className="text-4xl relative z-10 flex-shrink-0"
                    aria-hidden="true">
                    {item.icon}
                  </span>

                  <h3
                    className="text-[1.125rem] font-semibold text-[var(--text-primary)] leading-tight"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="h-px bg-gradient-to-r from-[var(--accent)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
