import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import GalleryPage from '@/pages/GalleryPage';
import MenuPage from '@/pages/MenuPage';
import MenuDetailPage from '@/pages/MenuDetailPage';
import { ThemeProvider } from '@/context/ThemeContext';
import { FavoritesProvider } from '@/context/FavoritesContext';

export default function App() {
  return (
    <ThemeProvider>
      <FavoritesProvider>
        <BrowserRouter>
          <div className="min-h-screen bg-[var(--bg)] text-[var(--text-primary)]">
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/menu/:slug" element={<MenuDetailPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      </FavoritesProvider>
    </ThemeProvider>
  );
}
