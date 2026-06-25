import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Coffee, Heart, ChevronDown } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { useFavorites } from '@/context/FavoritesContext';
import { SITE_CONFIG } from '@/lib/constants';
import { cn } from '@/lib/utils';

interface NavChild {
  label: string;
  href: string;
}

interface NavItemType {
  label: string;
  href: string;
  children?: NavChild[];
}

const NAV_ITEMS: NavItemType[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Menu',
    href: '/menu',
    children: [
      { label: 'All Items', href: '/menu' },
      { label: 'Coffee & Espresso', href: '/menu?category=coffee' },
      { label: 'Cold Beverages', href: '/menu?category=cold-beverages' },
      { label: 'Teas & Infusions', href: '/menu?category=teas' },
      { label: 'All-Day Breakfast', href: '/menu?category=all-day-breakfast' },
      { label: 'Brunch', href: '/menu?category=brunch' },
      { label: 'Mains', href: '/menu?category=mains' },
      { label: 'Small Plates', href: '/menu?category=small-plates' },
      { label: 'Desserts', href: '/menu?category=desserts' },
      { label: "Chef's Specials", href: '/menu?category=specials' },
    ],
  },
  { label: 'About', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  // { label: 'Blog', href: '/blog' },
  // { label: 'Reservations', href: '/reservations' },
  // { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState<string | null>(null);
  const { isDark, toggleTheme } = useTheme();
  const { favoritesCount } = useFavorites();
  const location = useLocation();
  const headerRef = useRef<HTMLElement>(null);
  const megaMenuTimeout = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaMenuOpen(null);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleMegaEnter = (label: string) => {
    if (megaMenuTimeout.current) clearTimeout(megaMenuTimeout.current);
    setMegaMenuOpen(label);
  };

  const handleMegaLeave = () => {
    megaMenuTimeout.current = setTimeout(() => setMegaMenuOpen(null), 150);
  };

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <>
      <motion.header
        ref={headerRef}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-[var(--surface)] border-b border-[var(--border)] shadow-[var(--shadow-sm)]'
            : 'bg-transparent'
        )}
      >
        <div className="container-custom " style={{padding:'0 10px'}}>
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2.5 group"
              aria-label="SlowDrew Cafe — Home"
            >
              <div className="w-9 h-9 rounded-full bg-[var(--accent)] flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105">
                <Coffee size={18} className="text-white" />
              </div>
              <div className="hidden sm:block">
                <span
                  className="font-heading font-bold text-lg leading-none tracking-tight text-[var(--text-primary)]"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  SlowDrew
                </span>
                <span className="block text-caption text-[var(--text-muted)] mt-0.5">
                  CAFE · VIZAG
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-3" aria-label="Main navigation">
              {NAV_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children ? handleMegaEnter(item.label) : undefined}
                  onMouseLeave={() => item.children ? handleMegaLeave() : undefined}
                >
                  <Link
                    to={item.href}
                    className={cn(
                      'flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors duration-200',
                      isActive(item.href)
                        ? 'text-[var(--accent)] bg-[var(--accent)]/8'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-elevated)]'
                    )}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown
                        size={14}
                        className={cn(
                          'transition-transform duration-200',
                          megaMenuOpen === item.label ? 'rotate-180' : ''
                        )}
                      />
                    )}
                  </Link>

                  {/* Mega Menu Dropdown */}
                  <AnimatePresence>
                    {item.children && megaMenuOpen === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.97 }}
                        transition={{ duration: 0.18, ease: 'easeOut' }}
                        className="absolute top-full left-0 mt-1.5 w-52 bg-[var(--surface)] border border-[var(--border)] rounded-xl shadow-[var(--shadow-lg)] py-2 z-50"
                        onMouseEnter={() => handleMegaEnter(item.label)}
                        onMouseLeave={handleMegaLeave}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            className="flex items-center px-4 py-2.5 text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--surface-elevated)] transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-1">
              {/* Favorites */}
              <Link
                to="/menu"
                className="relative p-2.5 rounded-lg text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--surface-elevated)] transition-colors"
                aria-label="Favorites"
              >
                <Heart size={18} />
                {favoritesCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[var(--accent)] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {favoritesCount > 9 ? '9+' : favoritesCount}
                  </span>
                )}
              </Link>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-lg text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--surface-elevated)] transition-colors"
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isDark ? 'moon' : 'sun'}
                    initial={{ opacity: 0, rotate: -30, scale: 0.8 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 30, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isDark ? <Sun size={18} /> : <Moon size={18} />}
                  </motion.div>
                </AnimatePresence>
              </button>

         
              {/* <Link
                to="/reservations"
                className="hidden md:flex items-center gap-2 ml-2 px-5 py-2 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white text-sm font-medium rounded-lg transition-colors duration-200"
              >
                Reserve a Table
              </Link> */}

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2.5 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-elevated)] transition-colors ml-1"
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={mobileOpen ? 'close' : 'open'}
                    initial={{ opacity: 0, rotate: -30 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 30 }}
                    transition={{ duration: 0.15 }}
                  >
                    {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                  </motion.div>
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-full bg-[var(--surface)] z-50 flex flex-col shadow-2xl lg:hidden"
              aria-label="Mobile navigation"
            >
              {/* Mobile Header */}
              <div className="flex items-center justify-between p-5 border-b border-[var(--border)]">
                <Link to="/" className="flex items-center gap-2.5" onClick={() => setMobileOpen(false)}>
                  <div className="w-8 h-8 rounded-full bg-[var(--accent)] flex items-center justify-center">
                    <Coffee size={16} className="text-white" />
                  </div>
                  <span className="font-heading font-bold text-[var(--text-primary)]" style={{ fontFamily: 'var(--font-heading)' }}>
                    SlowDrew
                  </span>
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg text-[var(--text-secondary)] hover:bg-[var(--surface-elevated)]"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Mobile Nav Links */}
              <div className="flex-1 overflow-y-auto py-4">
                {NAV_ITEMS.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        'flex items-center justify-between px-5 py-3.5 text-base font-medium transition-colors',
                        isActive(item.href)
                          ? 'text-[var(--accent)] bg-[var(--accent)]/8'
                          : 'text-[var(--text-primary)] hover:text-[var(--accent)] hover:bg-[var(--surface-elevated)]'
                      )}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <div className="pl-5 border-l-2 border-[var(--border)] ml-5 mb-2">
                        {item.children.slice(1).map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center px-3 py-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Mobile Footer */}
              <div className="p-5 border-t border-[var(--border)] space-y-3">
                <Link
                  to="/reservations"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center w-full py-3 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-medium rounded-lg transition-colors"
                >
                  Reserve a Table
                </Link>
                <div className="flex items-center justify-between text-sm text-[var(--text-muted)]">
                  <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-[var(--accent)] transition-colors">
                    {SITE_CONFIG.phone}
                  </a>
                  <button
                    onClick={toggleTheme}
                    className="flex items-center gap-1.5 hover:text-[var(--accent)] transition-colors"
                    aria-label="Toggle theme"
                  >
                    {isDark ? <Sun size={16} /> : <Moon size={16} />}
                    {isDark ? 'Light' : 'Dark'}
                  </button>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
