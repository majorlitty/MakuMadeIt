import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Users, MapPin, Heart, Award, CheckCircle } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { label: "Renters Placed", value: "5,000+" },
    { label: "Verified Landlords", value: "850+" },
    { label: "Years in Arlington", value: "12" },
    { label: "Average Fill Time", value: "12 Days" }
  ];

  const values = [
    {
      icon: <ShieldCheck className="text-primary" size={32} />,
      title: "Trust & Transparency",
      desc: "We manually verify every listing and landlord to ensure a safe rental experience for everyone."
    },
    {
      icon: <Users className="text-secondary" size={32} />,
      title: "Community First",
      desc: "We are deeply rooted in Arlington and committed to helping our neighbors find their perfect homes."
    },
    {
      icon: <Award className="text-accent" size={32} />,
      title: "Excellence in Service",
      desc: "Our team provides personalized support to both renters and landlords throughout the entire process."
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=2000" 
            alt="Arlington Skyline" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Our Story</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">Arlington's Most Trusted Rental Platform</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              We started with a simple mission: to make finding a home in Arlington as easy and transparent as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-black text-primary mb-2">{stat.value}</div>
                <div className="text-slate-500 font-medium uppercase tracking-wider text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">Why We Do What We Do</h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Arlington is more than just a city to us—it's home. From the vibrant energy of Downtown to the quiet streets of North Arlington, we believe everyone deserves a place they love to live.
              </p>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Traditional rental searches are often filled with outdated listings, unresponsive landlords, and hidden fees. We built ArlingtonRentals to solve these problems through technology and local expertise.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-secondary" size={20} />
                  <span className="font-bold text-slate-900">100% Verified Local Listings</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-secondary" size={20} />
                  <span className="font-bold text-slate-900">Direct Communication with Landlords</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-secondary" size={20} />
                  <span className="font-bold text-slate-900">No Hidden Fees or Surprise Costs</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                  alt="Our Team" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl hidden md:block max-w-xs border border-slate-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <Heart size={24} />
                  </div>
                  <h4 className="font-bold text-slate-900">Local Love</h4>
                </div>
                <p className="text-slate-500 text-sm">We donate 1% of our revenue back to local Arlington community projects.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-slate-600 text-lg">These principles guide everything we do at ArlingtonRentals.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((v, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100">
                <div className="mb-6">{v.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{v.title}</h3>
                <p className="text-slate-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Meet the Experts</h2>
            <p className="text-slate-600 text-lg">Our team of local Arlington residents is here to help you find your next home.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Marcus Thompson", role: "Founder & CEO", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" },
              { name: "Elena Rodriguez", role: "Head of Operations", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400" },
              { name: "David Chen", role: "Lead Developer", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400" },
              { name: "Sarah Jenkins", role: "Renter Support", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400" }
            ].map((member, i) => (
              <div key={i} className="text-center group">
                <div className="relative mb-6 rounded-3xl overflow-hidden aspect-[4/5] shadow-lg">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="text-xl font-bold text-slate-900">{member.name}</h4>
                <p className="text-slate-500 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Want to Join Our Team?</h2>
          <p className="text-xl text-white/80 mb-10">We're always looking for passionate locals who want to help shape the future of renting in Arlington.</p>
          <button className="bg-white text-primary font-bold py-4 px-10 rounded-xl hover:bg-slate-100 transition-all shadow-xl">
            View Open Positions
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
