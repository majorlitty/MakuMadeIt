import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, MapPin, Bed, Bath, Maximize, Filter, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { MOCK_LISTINGS, Listing } from '../constants';

interface RentalsPageProps {
  onScheduleTour: () => void;
}

const RentalsPage = ({ onScheduleTour }: RentalsPageProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNeighborhood, setSelectedNeighborhood] = useState('All Neighborhoods');
  const [priceRange, setPriceRange] = useState('All Prices');

  const neighborhoods = ['All Neighborhoods', 'Downtown Arlington', 'North Arlington', 'South Arlington', 'Near UT Arlington'];
  const priceRanges = ['All Prices', 'Under $1,500', '$1,500 - $2,000', '$2,000 - $2,500', '$2,500+'];

  const filteredListings = MOCK_LISTINGS.filter(listing => {
    const matchesSearch = listing.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         listing.neighborhood.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesNeighborhood = selectedNeighborhood === 'All Neighborhoods' || listing.neighborhood === selectedNeighborhood;
    
    let matchesPrice = true;
    if (priceRange === 'Under $1,500') matchesPrice = listing.price < 1500;
    else if (priceRange === '$1,500 - $2,000') matchesPrice = listing.price >= 1500 && listing.price <= 2000;
    else if (priceRange === '$2,000 - $2,500') matchesPrice = listing.price > 2000 && listing.price <= 2500;
    else if (priceRange === '$2,500+') matchesPrice = listing.price > 2500;

    return matchesSearch && matchesNeighborhood && matchesPrice;
  });

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-white border-b border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Available Rentals in Arlington</h1>
              <p className="text-slate-500">Showing {filteredListings.length} verified properties ready for move-in.</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="btn-outline flex items-center gap-2 py-2.5">
                <SlidersHorizontal size={18} />
                Advanced Filters
              </button>
              <select className="bg-white border border-slate-200 rounded-xl px-4 py-2.5 font-medium text-slate-700 outline-none focus:ring-2 focus:ring-primary/20">
                <option>Sort by: Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Search & Quick Filters */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input 
                type="text" 
                placeholder="Search by building name or street..." 
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/20 outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <select 
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white appearance-none outline-none focus:ring-2 focus:ring-primary/20"
                value={selectedNeighborhood}
                onChange={(e) => setSelectedNeighborhood(e.target.value)}
              >
                {neighborhoods.map(n => <option key={n} value={n}>{n}</option>)}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
            </div>
            <div className="relative">
              <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <select 
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white appearance-none outline-none focus:ring-2 focus:ring-primary/20"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
              >
                {priceRanges.map(p => <option key={p} value={p}>{p}</option>)}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
            </div>
          </div>
        </div>
      </section>

      {/* Listings Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredListings.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredListings.map((listing) => (
                <motion.div 
                  key={listing.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
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
                      <button onClick={onScheduleTour} className="btn-primary py-2 px-4 text-sm">Schedule Tour</button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
                <Search size={40} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">No rentals found matching your criteria</h3>
              <p className="text-slate-500 mb-8">Try adjusting your filters or search query to find more properties.</p>
              <button 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedNeighborhood('All Neighborhoods');
                  setPriceRange('All Prices');
                }}
                className="btn-primary"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Map Toggle (Floating) */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40">
        <button className="bg-slate-900 text-white px-8 py-4 rounded-full shadow-2xl flex items-center gap-3 font-bold hover:scale-105 transition-transform">
          <MapPin size={20} className="text-accent" />
          View on Map
        </button>
      </div>
    </div>
  );
};

export default RentalsPage;
