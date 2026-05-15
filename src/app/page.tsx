import React from 'react';
import { Volume2, Zap, Calendar, Award, ArrowRight, Instagram, Youtube, Linkedin } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-yellow-400 selection:text-black">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10 px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-black tracking-tighter italic">ECOBOOM</div>
        <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest text-white/70">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        <a href="#contact" className="bg-white text-black px-5 py-2 text-xs font-bold uppercase tracking-tighter hover:bg-yellow-400 transition-colors">
          Let's Talk
        </a>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center px-6 md:px-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent z-10" />
          <img 
            src="/api/placeholder/1920/1080" 
            alt="Event Production" 
            className="w-full h-full object-cover grayscale opacity-50"
          />
        </div>
        
        <div className="relative z-20 max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-6">
            POWER, <br/>REDEFINED.
          </h1>
          <p className="text-xl md:text-2xl text-white/60 max-w-2xl mb-10 font-light leading-relaxed">
            Sustainable event production for the high-end market. Premium audio, specialized power rentals, and zero-compromise results.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-yellow-400 text-black px-8 py-4 font-black uppercase tracking-tighter flex items-center gap-2 hover:bg-white transition-colors group">
              Explore Our Solutions <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Stats/Value Prop */}
      <section className="py-24 px-6 md:px-20 border-y border-white/10 bg-zinc-950">
        <div className="grid md:grid-cols-3 gap-16">
          <div>
            <div className="text-5xl font-black mb-2 italic">20+</div>
            <div className="text-sm font-bold uppercase tracking-widest text-yellow-400 mb-4">Years Experience</div>
            <p className="text-white/50 text-sm leading-relaxed">
              From sound engineering to event production, we bring decades of industry-leading expertise to every project.
            </p>
          </div>
          <div>
            <div className="text-5xl font-black mb-2 italic">0</div>
            <div className="text-sm font-bold uppercase tracking-widest text-yellow-400 mb-4">Failed Clients</div>
            <p className="text-white/50 text-sm leading-relaxed">
              Our record is spotless. We deliver high-stakes production reliability where failure is not an option.
            </p>
          </div>
          <div>
            <div className="text-5xl font-black mb-2 italic">86%</div>
            <div className="text-sm font-bold uppercase tracking-widest text-yellow-400 mb-4">Carbon Reduction</div>
            <p className="text-white/50 text-sm leading-relaxed">
              We substantially reduce the footprint of your events through sustainable design and intelligent power solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-32 px-6 md:px-20">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 uppercase italic">What We Do</h2>
            <p className="text-white/60 text-lg">Integrated production solutions that perform when it matters most.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
          <div className="bg-black p-12 hover:bg-zinc-900 transition-colors group">
            <Volume2 className="w-12 h-12 text-yellow-400 mb-8 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-black uppercase mb-4 tracking-tighter italic">Sound & Light</h3>
            <p className="text-white/50 mb-8 leading-relaxed">
              Tailored audio and lighting design for weddings, corporate summits, and festivals. We don't just set up gear; we create experiences.
            </p>
          </div>
          <div className="bg-black p-12 hover:bg-zinc-900 transition-colors group">
            <Zap className="w-12 h-12 text-yellow-400 mb-8 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-black uppercase mb-4 tracking-tighter italic">Power Rentals</h3>
            <p className="text-white/50 mb-8 leading-relaxed">
              Specialized power distribution and rental solutions for any terrain. Reliable, efficient, and professionally managed.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <footer id="contact" className="bg-zinc-950 pt-32 pb-12 px-6 md:px-20 border-t border-white/10">
        <div className="grid md:grid-cols-2 gap-20 mb-32">
          <div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic mb-8">Let's Talk Production.</h2>
            <div className="flex flex-col gap-4 text-xl">
              <a href="tel:+18183304052" className="hover:text-yellow-400 transition-colors">(818) 330-4052</a>
              <a href="mailto:info@ecoboom.org" className="hover:text-yellow-400 transition-colors">info@ecoboom.org</a>
            </div>
          </div>
          <div className="flex flex-col justify-end">
            <div className="flex gap-6 mb-8">
              <Instagram className="w-6 h-6 text-white/40 hover:text-white cursor-pointer" />
              <Youtube className="w-6 h-6 text-white/40 hover:text-white cursor-pointer" />
              <Linkedin className="w-6 h-6 text-white/40 hover:text-white cursor-pointer" />
            </div>
            <p className="text-white/30 text-sm">© 2026 ECOBOOM PRODUCTION COMPANY. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;