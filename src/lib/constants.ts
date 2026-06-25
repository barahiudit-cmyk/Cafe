export const SITE_CONFIG = {
  name: 'Latte Global Cafe',
  tagline: 'Crafted Coffee. Global Flavors. Memorable Experiences.',
  location: 'Visakhapatnam, India',
  address: 'Plot 42, Beach Road, MVP Colony, Visakhapatnam - 530017',
  phone: '+91 98765 43210',
  whatsapp: '+919876543210',
  email: 'hello@latteglobalcafe.com',
  googleMaps: 'https://maps.google.com/?q=Visakhapatnam',
  instagram: '@latteglobalcafe',
  facebook: '/latteglobalcafe',
  twitter: '@latteglobalcafe',
  instagramUrl: 'https://instagram.com/latteglobalcafe',
  facebookUrl: 'https://facebook.com/latteglobalcafe',
  twitterUrl: 'https://twitter.com/latteglobalcafe',
  currency: '₹',
  currencyCode: 'INR',
} as const;

export const OPENING_HOURS = [
  { days: 'Monday – Friday', hours: '8:00 AM – 10:00 PM' },
  { days: 'Saturday – Sunday', hours: '7:00 AM – 11:00 PM' },
] as const;

export const RESERVATION_TIMES = [
  '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM',
  '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM',
  '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
  '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
  '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM',
  '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM',
] as const;

export const OCCASION_OPTIONS = [
  'None / Regular Visit',
  'Birthday Celebration',
  'Anniversary',
  'Business Meeting',
  'Date Night',
  'Family Gathering',
  'Brunch with Friends',
  'Proposal',
  'Corporate Event',
  'Other',
] as const;

export const SEATING_OPTIONS = [
  'No Preference',
  'Indoor – Main Dining',
  'Indoor – Cozy Corner',
  'Outdoor – Terrace',
  'Bar Seating',
  'Private Booth',
] as const;

export const GUEST_OPTIONS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10+'] as const;

export const CONTACT_SUBJECTS = [
  'General Enquiry',
  'Table Reservation',
  'Private Event / Catering',
  'Feedback / Complaint',
  'Press & Media',
  'Career Opportunities',
  'Bulk Coffee Orders',
  'Partnership',
  'Other',
] as const;

export const NAV_ITEMS = [
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
      { label: 'Chef\'s Specials', href: '/menu?category=specials' },
    ],
  },
  { label: 'About', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blog' },
  { label: 'Reservations', href: '/reservations' },
  { label: 'Contact', href: '/contact' },
] as const;

export const MENU_CATEGORIES = [
  { value: 'all', label: 'All' },
  { value: 'coffee', label: 'Coffee' },
  { value: 'cold-beverages', label: 'Cold Drinks' },
  { value: 'teas', label: 'Teas' },
  { value: 'all-day-breakfast', label: 'Breakfast' },
  { value: 'brunch', label: 'Brunch' },
  { value: 'mains', label: 'Mains' },
  { value: 'small-plates', label: 'Small Plates' },
  { value: 'desserts', label: 'Desserts' },
  { value: 'specials', label: 'Specials' },
] as const;

export const HIGHLIGHTS = [
  {
    icon: '☕',
    title: 'Third-Wave Coffee',
    description: 'Single-origin beans sourced directly from Coorg, Chikmagalur, and global estates.',
    sticker: '/public/coffe.png', 
  },
  {
    icon: '🌍',
    title: 'Global Flavors',
    description: 'A culinary journey through flavors of India, Japan, Italy, Mexico, and beyond.',
    sticker: '/public/world.png', 
  },
  {
    icon: '🌿',
    title: 'Ethically Sourced',
    description: 'Farm-to-cup philosophy. We know the name of every farmer behind your cup.',
    sticker: '/public/leaf.png', 
  },
  {
    icon: '🎨',
    title: 'Curated Ambience',
    description: 'An interior designed to inspire — warm tones, local art, and natural materials.',
    sticker: '/public/colorboard.png', 
  },
] as const;
