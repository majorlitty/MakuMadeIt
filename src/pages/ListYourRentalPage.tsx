import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Building2, 
  CheckCircle, 
  Zap, 
  ShieldCheck, 
  Clock, 
  ArrowRight, 
  BarChart3, 
  Users, 
  Camera,
  MapPin,
  DollarSign
} from 'lucide-react';

const ListYourRentalPage = () => {
  const [formStep, setFormStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const benefits = [
    {
      icon: <Zap className="text-accent" size={32} />,
      title: "Fast Occupancy",
      desc: "Our average property is filled in just 12 days, significantly faster than the Arlington average."
    },
    {
      icon: <ShieldCheck className="text-secondary" size={32} />,
      title: "Qualified Renters",
      desc: "We handle comprehensive background, credit, and income checks so you get reliable tenants."
    },
    {
      icon: <BarChart3 className="text-primary" size={32} />,
      title: "Market Analysis",
      desc: "Get a free, data-driven rental analysis to ensure you're pricing your property competitively."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="pt-32 pb-24 min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white p-10 rounded-3xl shadow-2xl text-center border border-slate-100"
        >
          <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-secondary">
            <CheckCircle size={48} />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Request Received!</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            One of our Arlington property experts will review your details and contact you within 24 hours for your free rental analysis.
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="btn-primary w-full"
          >
            Back to Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=2000" 
            alt="Modern Building" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">For Landlords & Owners</span>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                List Your Arlington Rental with <span className="text-primary">Confidence</span>
              </h1>
              <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                Reach thousands of qualified Arlington renters and fill your vacancy in record time with our professional management tools.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-white/80">
                  <CheckCircle size={20} className="text-secondary" />
                  <span>Free Rental Analysis</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <CheckCircle size={20} className="text-secondary" />
                  <span>No Upfront Fees</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <CheckCircle size={20} className="text-secondary" />
                  <span>Verified Tenants</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Form Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-slate-100"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Get Your Free Analysis</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Full Name</label>
                    <input required type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Address</label>
                    <input required type="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Property Address</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input required type="text" placeholder="123 Arlington St, Arlington, TX" className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Property Type</label>
                    <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none">
                      <option>Apartment</option>
                      <option>Single Family Home</option>
                      <option>Townhouse</option>
                      <option>Condo</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Expected Rent</label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input type="number" placeholder="1800" className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn-primary w-full py-4 text-lg mt-4 flex items-center justify-center gap-2">
                  Get My Free Analysis <ArrowRight size={20} />
                </button>
                <p className="text-center text-slate-400 text-xs">No commitment required. We'll never share your data.</p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why List With Us?</h2>
            <p className="text-slate-600 text-lg">We provide the tools and expertise to make property management profitable and stress-free.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {benefits.map((b, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 text-center">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {b.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{b.title}</h3>
                <p className="text-slate-600 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1000" 
                  alt="Professional Meeting" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Seamless Listing Process</h2>
              <div className="space-y-6">
                {[
                  { icon: <BarChart3 size={24} />, title: "1. Professional Valuation", desc: "We analyze local Arlington market data to determine the optimal rental price for your property." },
                  { icon: <Camera size={24} />, title: "2. High-Impact Marketing", desc: "Professional photography and listing syndication to major platforms ensure maximum visibility." },
                  { icon: <Users size={24} />, title: "3. Rigorous Screening", desc: "We handle all inquiries and perform deep background checks on every potential tenant." },
                  { icon: <Building2 size={24} />, title: "4. Stress-Free Leasing", desc: "From lease signing to move-in day, we handle the paperwork so you can relax." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                      {step.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">{step.title}</h4>
                      <p className="text-slate-600">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-black mb-2">12 Days</div>
              <div className="text-white/70 text-sm uppercase tracking-widest font-bold">Avg. Fill Time</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black mb-2">99.2%</div>
              <div className="text-white/70 text-sm uppercase tracking-widest font-bold">Rent Collection Rate</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black mb-2">850+</div>
              <div className="text-white/70 text-sm uppercase tracking-widest font-bold">Active Landlords</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black mb-2">24/7</div>
              <div className="text-white/70 text-sm uppercase tracking-widest font-bold">Support Access</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ for Landlords */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Landlord FAQs</h2>
          <div className="space-y-6">
            {[
              { q: "How much does it cost to list my property?", a: "Listing your property for analysis is free. We only charge a small percentage once we successfully place a qualified tenant in your home." },
              { q: "How do you screen tenants?", a: "Our screening process includes a nationwide criminal background check, credit score analysis, employment verification, and previous landlord references." },
              { q: "Do I still have control over who rents my property?", a: "Absolutely. We provide you with the top qualified candidates and our professional recommendation, but the final decision is always yours." },
              { q: "How quickly can you find a tenant?", a: "On average, we fill vacancies in Arlington within 12 days, depending on the property's condition and market pricing." }
            ].map((faq, i) => (
              <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-2">{faq.q}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ListYourRentalPage;
