import React from 'react';
import { motion } from 'motion/react';
import { MapPin, ArrowRight, Home, Users, TreePine, Coffee, GraduationCap, Music } from 'lucide-react';
import { NEIGHBORHOODS } from '../constants';
import { Link } from 'react-router-dom';

const NeighborhoodsPage = () => {
  const neighborhoodStats = [
    { icon: <Home size={24} />, label: "Avg. Rent", value: "$1,850" },
    { icon: <Users size={24} />, label: "Population", value: "394,264" },
    { icon: <TreePine size={24} />, label: "Parks", value: "82" },
    { icon: <Coffee size={24} />, label: "Local Cafes", value: "150+" }
  ];

  const neighborhoodDetails = [
    {
      id: 'downtown',
      icon: <Music className="text-accent" />,
      highlights: ["Entertainment District", "Arlington Museum of Art", "Levitt Pavilion"],
      vibe: "Urban & Energetic"
    },
    {
      id: 'north',
      icon: <TreePine className="text-secondary" />,
      highlights: ["River Legacy Park", "Top-rated Schools", "Viridian Community"],
      vibe: "Upscale & Family-Friendly"
    },
    {
      id: 'south',
      icon: <Coffee className="text-primary" />,
      highlights: ["The Parks Mall", "Arlington Highlands", "Lake Arlington"],
      vibe: "Convenient & Diverse"
    },
    {
      id: 'uta',
      icon: <GraduationCap className="text-accent" />,
      highlights: ["UT Arlington Campus", "College Park Center", "Walkable Cafes"],
      vibe: "Academic & Vibrant"
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-neutral-bg">
      {/* Hero Section */}
      <section className="bg-slate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1449156001935-d28bc1dc728f?auto=format&fit=crop&q=80&w=2000" 
            alt="Arlington Skyline" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Arlington Neighborhood Guide</h1>
            <p className="text-xl text-slate-300">Discover the unique personality, amenities, and rental opportunities in every corner of Arlington, TX.</p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {neighborhoodStats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-3">
                  {stat.icon}
                </div>
                <span className="text-slate-500 text-sm font-medium uppercase tracking-wider">{stat.label}</span>
                <span className="text-2xl font-bold text-slate-900">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Neighborhoods Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {NEIGHBORHOODS.map((n, i) => {
              const details = neighborhoodDetails.find(d => d.id === n.id);
              return (
                <motion.div 
                  key={n.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
                >
                  <div className="lg:w-1/2 w-full">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                      <img 
                        src={n.image} 
                        alt={n.name} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl flex items-center gap-2 font-bold text-slate-900 shadow-lg">
                        {details?.icon}
                        <span>{details?.vibe}</span>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-1/2 w-full space-y-6">
                    <div className="flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-sm">
                      <MapPin size={16} />
                      <span>Arlington Neighborhood</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{n.name}</h2>
                    <p className="text-slate-600 text-lg leading-relaxed">{n.description}</p>
                    
                    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                      <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <ArrowRight size={18} className="text-accent" />
                        Area Highlights
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {details?.highlights.map((h, j) => (
                          <li key={j} className="flex items-center gap-2 text-slate-600 text-sm">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <Link to="/" className="btn-primary flex items-center justify-center gap-2">
                        View Rentals in {n.name}
                      </Link>
                      <button className="btn-outline">Download Area Guide</button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Still Unsure Which Area is Right for You?</h2>
          <p className="text-xl text-white/80 mb-10">Our local experts can help you find the perfect neighborhood based on your commute, lifestyle, and budget.</p>
          <button className="bg-white text-primary font-bold py-4 px-10 rounded-xl hover:bg-slate-100 transition-all shadow-xl">
            Talk to a Local Expert
          </button>
        </div>
      </section>
    </div>
  );
};

export default NeighborhoodsPage;
