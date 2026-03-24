import { 
  Home, 
  Search, 
  Calendar, 
  FileText, 
  CheckCircle, 
  MapPin, 
  Bed, 
  Bath, 
  Maximize, 
  Star, 
  ChevronDown, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook, 
  Twitter,
  ArrowRight,
  ShieldCheck,
  Zap,
  Clock
} from 'lucide-react';

export interface Listing {
  id: string;
  title: string;
  price: number;
  neighborhood: string;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  tags: string[];
}

export interface Neighborhood {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const MOCK_LISTINGS: Listing[] = [
  {
    id: '1',
    title: 'Modern Downtown Loft',
    price: 1850,
    neighborhood: 'Downtown Arlington',
    beds: 1,
    baths: 1,
    sqft: 850,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800',
    tags: ['New Listing', 'Available Now']
  },
  {
    id: '2',
    title: 'Spacious Family Home',
    price: 2400,
    neighborhood: 'North Arlington',
    beds: 3,
    baths: 2,
    sqft: 1800,
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80&w=800',
    tags: ['Pet Friendly']
  },
  {
    id: '3',
    title: 'Luxury Apartment near UTA',
    price: 1550,
    neighborhood: 'Near UT Arlington',
    beds: 2,
    baths: 2,
    sqft: 1100,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800',
    tags: ['Available Now']
  },
  {
    id: '4',
    title: 'Cozy Townhome',
    price: 2100,
    neighborhood: 'South Arlington',
    beds: 2,
    baths: 2.5,
    sqft: 1450,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
    tags: ['Pet Friendly']
  },
  {
    id: '5',
    title: 'Entertainment District Condo',
    price: 1950,
    neighborhood: 'Entertainment District',
    beds: 1,
    baths: 1,
    sqft: 920,
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=800',
    tags: ['New Listing']
  },
  {
    id: '6',
    title: 'Suburban Retreat',
    price: 2800,
    neighborhood: 'North Arlington',
    beds: 4,
    baths: 3,
    sqft: 2200,
    image: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&q=80&w=800',
    tags: ['Available Now']
  }
];

export const NEIGHBORHOODS: Neighborhood[] = [
  {
    id: 'downtown',
    name: 'Downtown Arlington',
    description: 'The heart of the city with dining, nightlife, and culture.',
    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'north',
    name: 'North Arlington',
    description: 'Upscale residential areas with great schools and parks.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'south',
    name: 'South Arlington',
    description: 'Diverse neighborhoods with easy access to shopping centers.',
    image: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'uta',
    name: 'Near UT Arlington',
    description: 'Perfect for students and faculty, vibrant and walkable.',
    image: 'https://images.unsplash.com/photo-1525920980995-f8a382bf42c5?auto=format&fit=crop&q=80&w=800'
  }
];

export const FAQS = [
  {
    question: "How do I schedule a tour?",
    answer: "You can schedule a tour directly through any listing page by clicking the 'Schedule Tour' button. Choose a time that works for you, and our team will confirm within 24 hours."
  },
  {
    question: "How long does approval take?",
    answer: "Our approval process is fast! Once you submit a complete application with all required documents, we typically provide a decision within 24-48 business hours."
  },
  {
    question: "Are pets allowed?",
    answer: "Many of our properties are pet-friendly. Look for the 'Pet Friendly' tag on listings. Specific pet policies and deposits vary by property."
  },
  {
    question: "What documents are required?",
    answer: "Generally, we require proof of income (last 3 pay stubs), a valid government-issued ID, and rental history references."
  },
  {
    question: "How much is the deposit?",
    answer: "Standard security deposits are typically equal to one month's rent, but this can vary based on credit history and specific property requirements."
  }
];
