import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, MapPin, Calendar, Coffee } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

const HERO_IMAGE = '/hero-img/Black and Orange Bold Modern Food Video.gif';

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[78dvh] lg:h-screen lg:min-h-[600px] lg:max-h-[960px] overflow-hidden flex items-end"
      aria-label="Hero">
      {/* Parallax Background */}
      <motion.div className="absolute inset-0 w-full h-full" style={{ y }}>
        <img
          src={HERO_IMAGE}
          alt="Barista crafting a pour-over at Latte Global Cafe"
          className="w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
      </motion.div>

      {/* Grain Texture */}
      {/* <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.75\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'1\'/%3E%3C/svg%3E")',
        }}
      /> */}

      {/* Content */}
      <motion.div
        className="relative z-10  w-full pt-2 pb-30 md:pt-32 md:pb-24 px-4" style={{ opacity }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-row items-end justify-between gap-4 sm:gap-6 lg:gap-16">

            {/* LEFT SIDE - Text Content */}
            <div className="flex-1 min-w-0 max-w-4xl">
              {/* Location Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-center gap-2 mb-4 md:mb-6"
              >
                <MapPin size={14} className="text-[var(--accent)] flex-shrink-0" />
                <span className="text-[10px] md:text-xs text-white/70 tracking-widest uppercase font-medium">
                  MVP COLONY · VISAKHAPATNAM
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-5xl text-display font-bold text-white mb-4 md:mb-5 leading-[1.05] tracking-tight"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Crafted Coffee.
                <br />
                <span className="text-gold-shimmer">Global Flavors.</span>
                <br />
                Memorable
                <br />
                Experiences.
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.65 }}
                className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 max-w-xl leading-relaxed"
                style={{ fontFamily: 'var(--font-accent)' }}
              >
                Visakhapatnam's premier third-wave cafe — where every cup tells the story of the hands that grew it.
              </motion.p>
            </div>

            {/* RIGHT SIDE - CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col gap-2.5 md:gap-3 lg:gap-0 flex-shrink-0 lg:bg-black/[.4] lg:backdrop-blur-3xl lg:border lg:border-white/10 lg:rounded-2xl lg:p-2 lg:shadow-2xl lg:min-w-[260px]"
            >
              {/* Primary CTA - Menu */}
              <Link
                to="/menu"
                className="group inline-flex items-center justify-center lg:justify-between gap-3 w-11 h-11 md:w-12 md:h-12 lg:w-full lg:h-auto lg:px-5 lg:py-4 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-medium rounded-full lg:rounded-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 lg:hover:scale-[1.02] text-sm shadow-lg lg:shadow-[var(--accent)]/30"
                aria-label="Explore the Menu"
                title="Explore the Menu"
              >
                <span className="flex items-center gap-3">
                  <span className="hidden lg:flex items-center justify-center w-9 h-9 rounded-lg bg-white/20 backdrop-blur-sm">
                    <Coffee size={18} className="flex-shrink-0" />
                  </span>
                  <Coffee size={18} className="flex-shrink-0 lg:hidden" />
                  <span className="hidden lg:flex flex-col items-start">
                    <span className="text-xs text-white/80 font-normal">Discover Our</span>
                    <span className="text-sm font-semibold">Crafted Menu</span>
                  </span>
                </span>
                <svg
                  className="hidden lg:block w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              {/* Divider for desktop */}
              <div className="hidden lg:block h-px bg-white/10 my-1" />

              {/* Secondary CTA - Reserve */}
              <Link
                to="/reservations"
                className="group inline-flex items-center justify-center lg:justify-between gap-3 w-11 h-11 md:w-12 md:h-12 lg:w-full lg:h-auto lg:px-5 lg:py-4 bg-white/10 hover:bg-white/15 lg:bg-transparent lg:hover:bg-white/5 backdrop-blur-md lg:backdrop-blur-none text-white font-medium rounded-full lg:rounded-xl border border-white/30 lg:border-0 hover:border-white/50 transition-all duration-300 hover:scale-105 lg:hover:scale-100 text-sm shadow-lg lg:shadow-none"
                aria-label="Reserve a Table"
                title="Reserve a Table"
              >
                <span className="flex items-center gap-3">
                  <span className="hidden lg:flex items-center justify-center w-9 h-9 rounded-lg bg-white/10">
                    <Calendar size={18} className="flex-shrink-0" />
                  </span>
                  <Calendar size={18} className="flex-shrink-0 lg:hidden" />
                  <span className="hidden lg:flex flex-col items-start">
                    <span className="text-xs text-white/60 font-normal">Book Your</span>
                    <span className="text-sm font-semibold">Table Tonight</span>
                  </span>
                </span>
                <svg
                  className="hidden lg:block w-5 h-5 transition-transform group-hover:translate-x-1 text-white/60"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              {/* Divider for desktop */}
              <div className="hidden lg:block h-px bg-white/10 my-1" />

              {/* WhatsApp CTA */}
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center lg:justify-between gap-3 w-11 h-11 md:w-12 md:h-12 lg:w-full lg:h-auto lg:px-5 lg:py-4 bg-[#25D366]/20 hover:bg-[#25D366]/40 lg:bg-transparent lg:hover:bg-[#25D366]/10 backdrop-blur-md lg:backdrop-blur-none text-white font-medium rounded-full lg:rounded-xl border border-[#25D366]/40 lg:border-0 hover:border-[#25D366]/70 transition-all duration-300 hover:scale-105 lg:hover:scale-100 text-sm shadow-lg lg:shadow-none"
                aria-label="WhatsApp Us"
                title="WhatsApp Us"
              >
                <span className="flex items-center gap-3">
                  <span className="hidden lg:flex items-center justify-center w-9 h-9 rounded-lg bg-[#25D366]/20">
                    <svg className="w-[18px] h-[18px] flex-shrink-0 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </span>
                  <svg className="w-[18px] h-[18px] flex-shrink-0 lg:hidden" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  <span className="hidden lg:flex flex-col items-start">
                    <span className="text-xs text-white/60 font-normal">Chat with us</span>
                    <span className="text-sm font-semibold">WhatsApp Now</span>
                  </span>
                </span>
                <svg
                  className="hidden lg:block w-5 h-5 transition-transform group-hover:translate-x-1 text-white/60"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>

          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="sm:flex absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] md:text-xs text-white/50 tracking-widest uppercase font-medium">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={18} className="text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
