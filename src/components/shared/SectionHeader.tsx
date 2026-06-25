import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  titleClassName?: string;
  light?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className,
  titleClassName,
  light = false,
}: SectionHeaderProps) {
  const alignClass = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  }[align];

  return (
    <div className={cn('flex flex-col gap-3', alignClass, className)}>
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={cn(
            'text-caption',
            light ? 'text-[var(--accent)]' : 'text-[var(--accent)]'
          )}
        >
          {eyebrow}
        </motion.span>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: eyebrow ? 0.1 : 0 }}
        className={cn(
          'text-h2',
          light ? 'text-white' : 'text-[var(--text-primary)]',
          titleClassName
        )}
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: eyebrow ? 0.2 : 0.1 }}
          className={cn(
            'text-base max-w-2xl leading-relaxed',
            light ? 'text-white/75' : 'text-[var(--text-secondary)]'
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
