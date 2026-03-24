import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  Phone, 
  Search, 
  MapPin, 
  Bed, 
  Bath, 
  Maximize, 
  CheckCircle, 
  Zap, 
  ShieldCheck, 
  Clock, 
  ArrowRight,
  Star,
  ChevronDown,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  FileText
} from 'lucide-react';
import { MOCK_LISTINGS, NEIGHBORHOODS, FAQS, Listing } from './constants';
import NeighborhoodsPage from './pages/NeighborhoodsPage';

// --- Components ---

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = scrolled || !isHome ? 'bg-white shadow-md py-3' : 'bg-transparent py-5';
  const textClass = scrolled || !isHome ? 'text-slate-900' : 'text-white';
  const linkClass = scrolled || !isHome ? 'text-slate-600' : 'text-white/90';

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${navClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">A</div>
            <span className={`text-xl font-display font-bold ${textClass}`}>ArlingtonRentals</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <div className={`flex gap-6 font-medium ${linkClass}`}>
              <Link to="/" className="hover:text-primary transition-colors">Rentals</Link>
              <Link to="/neighborhoods" className="hover:text-primary transition-colors">Neighborhoods</Link>
              <a href="#management" className="hover:text-primary transition-colors">Management</a>
              <a href="#about" className="hover:text-primary transition-colors">About</a>
            </div>
            <div className="flex items-center gap-4">
              <div className={`flex items-center gap-2 font-semibold ${textClass}`}>
                <Phone size={18} className="text-accent" />
                <span>(817) 555-0123</span>
              </div>
              <button className="btn-primary py-2 px-5 text-sm">List Your Rental</button>
              <button className={`font-semibold text-sm ${scrolled || !isHome ? 'text-primary' : 'text-white'}`}>Apply Now</button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className={textClass} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              <Link to="/" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-slate-700 py-2">Rentals</Link>
              <Link to="/neighborhoods" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-slate-700 py-2">Neighborhoods</Link>
              <a href="#management" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-slate-700 py-2">Property Management</a>
              <a href="#about" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-slate-700 py-2">About</a>
              <div className="pt-4 flex flex-col gap-3">
                <button className="btn-primary w-full">List Your Rental</button>
                <button className="btn-outline w-full">Apply Now</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=2000" 
          alt="Modern Arlington Apartment" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Find Apartments & Homes for Rent in <span className="text-accent">Arlington, TX</span>
          </h1>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Browse verified rental listings, schedule tours, and apply online in minutes. Your next home is just a few clicks away.
          </p>

          {/* Search Bar */}
          <div className="bg-white p-2 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-2">
            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-2 p-2">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input type="text" placeholder="Location" className="w-full pl-10 pr-4 py-3 rounded-xl border-none bg-slate-50 focus:ring-2 focus:ring-primary/20 outline-none" />
              </div>
              <div className="relative">
                <Bed className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <select className="w-full pl-10 pr-4 py-3 rounded-xl border-none bg-slate-50 focus:ring-2 focus:ring-primary/20 outline-none appearance-none">
                  <option>Bedrooms</option>
                  <option>Studio</option>
                  <option>1+ Bed</option>
                  <option>2+ Beds</option>
                  <option>3+ Beds</option>
                </select>
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input type="text" placeholder="Max Budget" className="w-full pl-10 pr-4 py-3 rounded-xl border-none bg-slate-50 focus:ring-2 focus:ring-primary/20 outline-none" />
              </div>
            </div>
            <button className="btn-primary md:w-48 flex items-center justify-center gap-2">
              <Search size={20} />
              Search Rentals
            </button>
          </div>

          <div className="mt-8 flex flex-wrap gap-6">
            <div className="flex items-center gap-2 text-white/80">
              <CheckCircle size={20} className="text-accent" />
              <span>Verified Listings</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <CheckCircle size={20} className="text-accent" />
              <span>Fast Approval</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <CheckCircle size={20} className="text-accent" />
              <span>Local Experts</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TrustSection = () => {
  return (
    <section className="py-12 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-2 text-xl font-bold text-slate-800">
            <ShieldCheck className="text-primary" />
            <span>Arlington Housing Authority</span>
          </div>
          <div className="flex items-center gap-2 text-xl font-bold text-slate-800">
            <Star className="text-yellow-500" />
            <span>4.9/5 Renter Rating</span>
          </div>
          <div className="flex items-center gap-2 text-xl font-bold text-slate-800">
            <Zap className="text-accent" />
            <span>FastTrack™ Approvals</span>
          </div>
          <div className="flex items-center gap-2 text-xl font-bold text-slate-800">
            <MapPin className="text-secondary" />
            <span>100% Local Expertise</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const ListingCard = ({ listing, ...props }: { listing: Listing; [key: string]: any }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 flex flex-col h-full"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={listing.image} 
          alt={listing.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {listing.tags.map(tag => (
            <span key={tag} className="bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
              {tag}
            </span>
          ))}
        </div>
        <div className="absolute bottom-4 left-4">
          <span className="bg-primary text-white text-xl font-bold px-4 py-1 rounded-lg shadow-lg">
            ${listing.price}<span className="text-sm font-normal opacity-80">/mo</span>
          </span>
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-slate-900 mb-2">{listing.title}</h3>
        <div className="flex items-center gap-1 text-slate-500 text-sm mb-4">
          <MapPin size={16} />
          <span>{listing.neighborhood}, Arlington</span>
        </div>
        <div className="grid grid-cols-3 gap-4 py-4 border-y border-slate-50 mb-6">
          <div className="flex flex-col items-center gap-1">
            <Bed size={18} className="text-slate-400" />
            <span className="text-sm font-semibold">{listing.beds} Beds</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Bath size={18} className="text-slate-400" />
            <span className="text-sm font-semibold">{listing.baths} Baths</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Maximize size={18} className="text-slate-400" />
            <span className="text-sm font-semibold">{listing.sqft} sqft</span>
          </div>
        </div>
        <div className="mt-auto grid grid-cols-2 gap-3">
          <button className="btn-outline py-2 px-4 text-sm">View Details</button>
          <button className="btn-primary py-2 px-4 text-sm">Schedule Tour</button>
        </div>
      </div>
    </motion.div>
  );
};

const FeaturedRentals = () => {
  return (
    <section id="rentals" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Available Now</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Featured Arlington Rentals</h2>
          </div>
          <button className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
            View All 150+ Listings <ArrowRight size={20} />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_LISTINGS.map(listing => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Neighborhoods = () => {
  return (
    <section id="neighborhoods" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Explore Popular Neighborhoods</h2>
          <p className="text-slate-600 text-lg">Find the perfect area that fits your lifestyle, from vibrant downtown living to quiet suburban retreats.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {NEIGHBORHOODS.map(n => (
            <motion.div 
              key={n.id}
              whileHover={{ scale: 1.02 }}
              className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img 
                src={n.image} 
                alt={n.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="text-xl font-bold text-white mb-2">{n.name}</h3>
                <p className="text-white/80 text-sm mb-4 line-clamp-2">{n.description}</p>
                <Link to="/neighborhoods" className="text-white font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  View Rentals <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyRentWithUs = () => {
  const benefits = [
    { icon: <ShieldCheck size={32} />, title: "Verified Listings", desc: "Every property is manually verified to ensure accuracy and safety for our renters." },
    { icon: <Zap size={32} />, title: "Fast Responses", desc: "Our team and landlords respond quickly to tour requests and application inquiries." },
    { icon: <FileText size={32} />, title: "Easy Applications", desc: "Apply to multiple properties with a single profile and background check." },
    { icon: <MapPin size={32} />, title: "Local Market Knowledge", desc: "We live and work in Arlington. We know every street and neighborhood." }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 blur-3xl rounded-full translate-x-1/2"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Rent With ArlingtonRentals?</h2>
            <p className="text-slate-400 text-lg mb-10">We've simplified the rental process to make finding your next home in Arlington as stress-free as possible.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {benefits.map((b, i) => (
                <div key={i} className="flex flex-col gap-4">
                  <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center text-primary">
                    {b.icon}
                  </div>
                  <h3 className="text-xl font-bold">{b.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold">98%</div>
                <div>
                  <h4 className="font-bold">Renter Satisfaction</h4>
                  <p className="text-slate-400 text-sm">Based on 2,000+ reviews</p>
                </div>
              </div>
              <blockquote className="text-xl italic text-slate-200 mb-6">
                "The FastTrack approval process was a lifesaver. I found a place on Monday and was signed by Wednesday. Best rental experience in Arlington!"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-700 rounded-full"></div>
                <div>
                  <p className="font-bold">Sarah Jenkins</p>
                  <p className="text-slate-400 text-xs">Rented in North Arlington</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    { step: "01", title: "Search Rentals", desc: "Use our advanced filters to find the perfect home in your budget." },
    { step: "02", title: "Schedule a Tour", desc: "Book an in-person or virtual tour directly from the listing page." },
    { step: "03", title: "Apply Online", desc: "Submit your application and documents through our secure portal." },
    { step: "04", title: "Move In", desc: "Get approved fast and move into your new Arlington home!" }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How Renting Works</h2>
          <p className="text-slate-600">Your journey to a new home in 4 simple steps.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="relative group">
              <div className="text-6xl font-black text-slate-100 group-hover:text-primary/10 transition-colors absolute -top-10 -left-4 z-0">
                {s.step}
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
              {i < 3 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-slate-200"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LandlordSection = () => {
  return (
    <section id="management" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-8 md:p-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Need Tenants for Your Arlington Rental?</h2>
            <p className="text-slate-600 text-lg mb-8">We help landlords find qualified renters quickly through our advanced marketing and screening platform.</p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3">
                <CheckCircle className="text-secondary" size={20} />
                <span className="font-medium">Comprehensive Tenant Screening</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="text-secondary" size={20} />
                <span className="font-medium">Professional Listing Promotion</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="text-secondary" size={20} />
                <span className="font-medium">Fast Occupancy Guarantee</span>
              </li>
            </ul>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <p className="text-sm font-bold text-primary mb-1 uppercase tracking-wider">Average Fill Time</p>
              <p className="text-3xl font-black text-slate-900">12 Days</p>
            </div>
          </div>
          <div className="lg:w-1/2 bg-primary p-8 md:p-16 text-white">
            <h3 className="text-2xl font-bold mb-8">Get Your Free Rental Analysis</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Full Name" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 outline-none focus:bg-white/20 transition-all" />
                <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 outline-none focus:bg-white/20 transition-all" />
              </div>
              <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 outline-none focus:bg-white/20 transition-all" />
              <input type="text" placeholder="Property Address" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 outline-none focus:bg-white/20 transition-all" />
              <button className="btn-primary w-full py-4 text-lg">List Your Property</button>
              <p className="text-center text-white/60 text-xs">By submitting, you agree to our Terms of Service and Privacy Policy.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-600">Everything you need to know about renting in Arlington.</p>
        </div>
        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div key={i} className="border border-slate-100 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setActiveIdx(activeIdx === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-slate-900">{faq.question}</span>
                <ChevronDown className={`text-slate-400 transition-transform duration-300 ${activeIdx === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {activeIdx === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=2000" 
          alt="Arlington Skyline" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-primary/90 mix-blend-multiply"></div>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 italic">Your Next Rental in Arlington Is Waiting</h2>
        <p className="text-xl text-white/80 mb-10">Join thousands of happy renters who found their perfect home with us. New listings added every single week.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-primary py-4 px-10 text-lg">Browse Available Rentals</button>
          <button className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-bold py-4 px-10 rounded-lg transition-all border border-white/20">Schedule a Tour Today</button>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">A</div>
              <span className="text-xl font-display font-bold">ArlingtonRentals</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Arlington's most trusted rental platform. We connect quality renters with verified landlords across the city.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-colors"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-colors"><Twitter size={18} /></a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-colors"><Instagram size={18} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Available Rentals</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Neighborhood Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">List Your Property</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Rental Application</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Renter Resources</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Neighborhoods</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Downtown Arlington</a></li>
              <li><a href="#" className="hover:text-white transition-colors">North Arlington</a></li>
              <li><a href="#" className="hover:text-white transition-colors">South Arlington</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Near UT Arlington</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Entertainment District</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0" />
                <span>123 Main St, Suite 456<br />Arlington, TX 76010</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <span>(817) 555-0123</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <span>hello@arlingtonrentals.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-xs">
          <p>© 2026 ArlingtonRentals. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Fair Housing</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

const HomePage = () => (
  <>
    <Hero />
    <TrustSection />
    <FeaturedRentals />
    <Neighborhoods />
    <WhyRentWithUs />
    <HowItWorks />
    <LandlordSection />
    <FAQSection />
    <FinalCTA />
  </>
);

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/neighborhoods" element={<NeighborhoodsPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
