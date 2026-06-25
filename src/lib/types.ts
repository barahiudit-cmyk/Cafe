// ─── Menu Types ──────────────────────────────────────────────────────────────

export type DietaryTag = 'veg' | 'vegan' | 'gluten-free' | 'dairy-free' | 'contains-nuts' | 'spicy' | 'bestseller' | 'new' | 'signature';

export type MenuCategory =
  | 'all'
  | 'coffee'
  | 'cold-beverages'
  | 'teas'
  | 'all-day-breakfast'
  | 'brunch'
  | 'mains'
  | 'small-plates'
  | 'desserts'
  | 'specials';

export interface MenuSize {
  label: string;
  price: number;
}

export interface MenuItem {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  category: MenuCategory;
  subcategory?: string;
  price: number;
  sizes?: MenuSize[];
  tags: DietaryTag[];
  image: string;
  ingredients: string[];
  origin?: string;
  brewMethod?: string;
  pairingWith?: string;
  calories?: number;
  featured: boolean;
  available: boolean;
  rating: number;
  reviewCount: number;
}

// ─── Blog Types ───────────────────────────────────────────────────────────────

export type BlogCategory = 'coffee-culture' | 'recipes' | 'behind-scenes' | 'events' | 'travel' | 'lifestyle';

export interface BlogAuthor {
  id: string;
  name: string;
  role: string;
  avatar: string;
  bio: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  content: string;
  category: BlogCategory;
  tags: string[];
  author: BlogAuthor;
  publishedAt: string;
  readTime: number;
  featuredImage: string;
  featured: boolean;
}

// ─── Review Types ─────────────────────────────────────────────────────────────

export interface Review {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  text: string;
  platform: 'google' | 'instagram' | 'zomato' | 'in-person';
  visitType: 'dine-in' | 'takeaway' | 'delivery';
  verified: boolean;
}

// ─── Team Types ───────────────────────────────────────────────────────────────

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  speciality: string;
  instagram?: string;
  joinedYear: number;
}

// ─── Gallery Types ────────────────────────────────────────────────────────────

export type GalleryCategory = 'all' | 'cafe' | 'coffee' | 'food' | 'people' | 'events';

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: GalleryCategory;
  width: number;
  height: number;
  featured: boolean;
}

// ─── Timeline Types ───────────────────────────────────────────────────────────

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
  milestone: boolean;
}

// ─── Award Types ──────────────────────────────────────────────────────────────

export interface Award {
  id: string;
  title: string;
  organization: string;
  year: string;
  description: string;
  icon: string;
}

// ─── Reservation Types ────────────────────────────────────────────────────────

export interface ReservationFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  date: Date;
  time: string;
  guests: string;
  occasion: string;
  seatingPreference: string;
  specialRequests: string;
}

// ─── Contact Types ────────────────────────────────────────────────────────────

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

// ─── Navigation Types ─────────────────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

// ─── Theme Types ──────────────────────────────────────────────────────────────

export type Theme = 'light' | 'dark';
