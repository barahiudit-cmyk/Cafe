import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useFavorites } from '@/context/FavoritesContext';
import { cn } from '@/lib/utils';

interface FavoriteButtonProps {
  itemId: string;
  className?: string;
  size?: number;
}

export default function FavoriteButton({ itemId, className, size = 18 }: FavoriteButtonProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const active = isFavorite(itemId);

  return (
    <motion.button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleFavorite(itemId);
      }}
      whileTap={{ scale: 0.8 }}
      aria-label={active ? 'Remove from favorites' : 'Add to favorites'}
      className={cn(
        'w-9 h-9 rounded-full flex items-center justify-center transition-colors',
        active
          ? 'bg-red-50 dark:bg-red-900/20'
          : 'bg-[var(--surface)]/80 hover:bg-red-50 dark:hover:bg-red-900/20',
        className
      )}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={active ? 'filled' : 'empty'}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          <Heart
            size={size}
            className={cn(
              'transition-colors',
              active ? 'text-red-500 fill-red-500' : 'text-[var(--text-muted)]'
            )}
          />
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
}
