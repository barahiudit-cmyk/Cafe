import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50 no-print">
      {/* WhatsApp Button */}
      <motion.a
        href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hello! I'd like to know more about Latte Global Cafe.`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-13 h-13 rounded-full flex items-center justify-center text-white shadow-lg"
        style={{
          width: '52px',
          height: '52px',
          background: '#25D366',
          boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
        }}
      >
        <MessageCircle size={22} fill="white" />
      </motion.a>

      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-[52px] h-[52px] rounded-full flex items-center justify-center text-white shadow-lg transition-colors"
            style={{
              background: 'var(--accent)',
              boxShadow: 'var(--shadow-lg)',
            }}
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
