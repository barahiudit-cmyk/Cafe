import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RatingStarsProps {
  rating: number;
  max?: number;
  size?: number;
  showValue?: boolean;
  className?: string;
}

export default function RatingStars({
  rating,
  max = 5,
  size = 14,
  showValue = false,
  className,
}: RatingStarsProps) {
  return (
    <div className={cn('flex items-center gap-1', className)}>
      <div className="flex items-center gap-0.5">
        {Array.from({ length: max }).map((_, i) => {
          const filled = i < Math.floor(rating);
          const partial = !filled && i < rating;

          return (
            <span key={i} className="relative inline-flex">
              <Star
                size={size}
                className={filled || partial ? 'star-filled' : 'star-empty'}
              />
              {partial && (
                <span
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${(rating % 1) * 100}%` }}
                >
                  <Star size={size} className="star-filled" />
                </span>
              )}
            </span>
          );
        })}
      </div>
      {showValue && (
        <span className="text-sm font-medium text-[var(--text-secondary)] ml-1">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
}
