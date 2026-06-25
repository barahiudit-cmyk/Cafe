import { motion } from 'framer-motion';
import HeroSection from '@/components/sections/home/HeroSection';
import HighlightsSection from '@/components/sections/home/HighlightsSection';
import SignatureMenuSection from '@/components/sections/home/SignatureMenuSection';
import AboutPreviewSection from '@/components/sections/home/AboutPreviewSection';
import GalleryPreviewSection from '@/components/sections/home/GalleryPreviewSection';
import ReviewsSection from '@/components/sections/home/ReviewsSection';
import ReservationCTASection from '@/components/sections/home/ReservationCTASection';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

export default function HomePage() {
  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <HeroSection />
      <HighlightsSection />
      <SignatureMenuSection />
      <AboutPreviewSection />
      <GalleryPreviewSection />
      <ReviewsSection />
      <ReservationCTASection />
    </motion.main>
  );
}
