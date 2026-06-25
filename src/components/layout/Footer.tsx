import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Coffee, MapPin, Phone, Mail, Clock, Heart } from 'lucide-react';
import { SITE_CONFIG, OPENING_HOURS } from '@/lib/constants';

const footerLinks = {
  Explore: [
    { label: 'Our Menu', href: '/menu' },
    { label: 'About Us', href: '/about' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Blog', href: '/blog' },
    { label: 'Reservations', href: '/reservations' },
    { label: 'Contact', href: '/contact' },
  ],
  Menu: [
    { label: 'Coffee & Espresso', href: '/menu?category=coffee' },
    { label: 'Cold Beverages', href: '/menu?category=cold-beverages' },
    { label: 'All-Day Breakfast', href: '/menu?category=all-day-breakfast' },
    { label: 'Brunch', href: '/menu?category=brunch' },
    { label: 'Mains', href: '/menu?category=mains' },
    { label: "Chef's Specials", href: '/menu?category=specials' },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--surface)] border-t border-[var(--border)] pt-12 pb-6">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-5 group">
              <div className="w-10 h-10 rounded-full bg-[var(--accent)] flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105">
                <Coffee size={18} className="text-white" />
              </div>
              <div>
                <span className="block font-heading font-bold text-lg text-[var(--text-primary)] leading-none" style={{ fontFamily: 'var(--font-heading)' }}>
                  SlowDrew
                </span>
                <span className="text-caption text-[var(--text-muted)]">CAFE · VIZAG</span>
              </div>
            </Link>

            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6 max-w-xs">
              A premium third-wave cafe and all-day dining destination in the heart of Visakhapatnam. Crafting memorable experiences, one cup at a time.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {[
                { href: SITE_CONFIG.instagramUrl, label: 'Instagram', icon: 'IG' },
                { href: SITE_CONFIG.facebookUrl, label: 'Facebook', icon: 'FB' },
                { href: SITE_CONFIG.twitterUrl, label: 'Twitter / X', icon: 'X' },
              ].map(({ href, label, icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-lg bg-[var(--surface-elevated)] border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors text-xs font-bold"
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-caption text-[var(--text-muted)] mb-5">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div>
            <h3 className="text-caption text-[var(--text-muted)] mb-5">Visit Us</h3>
            <div className="space-y-4">
              <a
                href={SITE_CONFIG.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors group"
              >
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-[var(--accent)]" />
                <span className="leading-relaxed">{SITE_CONFIG.address}</span>
              </a>

              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center gap-3 text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
              >
                <Phone size={16} className="flex-shrink-0 text-[var(--accent)]" />
                <span>{SITE_CONFIG.phone}</span>
              </a>

              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-3 text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
              >
                <Mail size={16} className="flex-shrink-0 text-[var(--accent)]" />
                <span>{SITE_CONFIG.email}</span>
              </a>

              <div className="flex gap-3 text-sm text-[var(--text-secondary)]">
                <Clock size={16} className="flex-shrink-0 mt-0.5 text-[var(--accent)]" />
                <div className="space-y-1">
                  {OPENING_HOURS.map((oh) => (
                    <div key={oh.days}>
                      <span className="text-[var(--text-muted)]">{oh.days}: </span>
                      <span>{oh.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="divider-gold" />

      {/* Bottom Bar */}
      <div className="container-custom py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--text-muted)]">
          <p>
            © {year} SlowDrew Cafe. All rights reserved.
            <br/>
            By: <a href="https://barahiudit.netlify.app" className="border-b text-sm "> Barahiudit.netlify.app</a>
          </p>
          <p className="flex items-center gap-1">
            Crafted with <Heart size={12} className="text-[var(--accent)] fill-[var(--accent)]" /> in Visakhapatnam
          </p>
          <div className="flex items-center gap-4">
            <Link to="/contact" className="hover:text-[var(--accent)] transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-[var(--accent)] transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
