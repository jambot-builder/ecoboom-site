import React from 'react';

const LOGO_STROKE_FILTER =
  'drop-shadow(1px 0 0 #fff) drop-shadow(-1px 0 0 #fff) drop-shadow(0 1px 0 #fff) drop-shadow(0 -1px 0 #fff) drop-shadow(1px 1px 0 #fff) drop-shadow(-1px -1px 0 #fff) drop-shadow(1px -1px 0 #fff) drop-shadow(-1px 1px 0 #fff)';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-black/95 backdrop-blur-md border-b border-white/10 flex justify-between items-center px-4 md:px-8 py-4">
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="ECOBOOM"
            className="h-8 md:h-10 w-auto object-contain"
            style={{ filter: LOGO_STROKE_FILTER }}
          />
        </div>
        <div className="flex gap-4 md:gap-8 uppercase text-[0.6rem] md:text-xs font-black tracking-widest">
          <a href="#services" className="text-white hover:text-yellow-400 transition-colors hidden md:block">Services</a>
          <a href="#rentals" className="text-white hover:text-yellow-400 transition-colors">Rentals</a>
          <a href="#contact" className="text-yellow-400 hover:text-white transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-[85vh] md:h-screen w-full flex items-center justify-center text-center px-6 pt-16">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.9)), url("/hero_v2.jpg")' }}
        ></div>
        <div className="relative z-10 max-w-4xl w-full">
          <h1 className="text-5xl md:text-8xl font-black leading-[0.9] mb-6 tracking-tighter uppercase">
            POWER,<br /><span className="text-yellow-400 italic">REDEFINED.</span>
          </h1>
          <p className="text-base md:text-xl text-white/80 mb-10 font-light max-w-xl mx-auto leading-relaxed">
            Sustainable event production for the high-end market. Premium audio and specialized power rentals.
          </p>
          <a href="#rentals" className="inline-block bg-yellow-400 text-black px-8 py-4 font-black uppercase text-sm tracking-widest rounded-sm hover:bg-white transition-all shadow-[0_10px_30px_rgba(250,204,21,0.2)]">
            View Fleet &amp; Gear
          </a>
        </div>
      </section>

      <main className="px-4 md:px-8 max-w-7xl mx-auto py-20">
        {/* Services */}
        <section id="services" className="mb-24">
          <h2 className="text-2xl md:text-3xl font-black uppercase border-b-2 border-yellow-400 pb-4 mb-12 tracking-widest inline-block">
            Core Expertise
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div
              className="relative h-[300px] md:h-[450px] bg-cover bg-center p-8 flex flex-col justify-end border border-white/10 group overflow-hidden"
              style={{ backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.9) 10%, transparent), url("/event-1.jpg")' }}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500"></div>
              <div className="relative z-10 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <h3 className="text-yellow-400 text-xl font-black uppercase mb-3 tracking-wide">Audio Production</h3>
                <p className="text-white/70 leading-relaxed text-sm md:text-base">High-fidelity sound design for events of any scale.</p>
              </div>
            </div>
            <div
              className="relative h-[300px] md:h-[450px] bg-cover bg-center p-8 flex flex-col justify-end border border-white/10 group overflow-hidden"
              style={{ backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.9) 10%, transparent), url("/event-2.jpg")' }}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500"></div>
              <div className="relative z-10 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <h3 className="text-yellow-400 text-xl font-black uppercase mb-3 tracking-wide">Power Rentals</h3>
                <p className="text-white/70 leading-relaxed text-sm md:text-base">Clean, silent energy solutions for remote productions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Rentals */}
        <section id="rentals" className="mb-10">
          <h2 className="text-2xl md:text-3xl font-black uppercase border-b-2 border-yellow-400 pb-4 mb-12 tracking-widest inline-block">
            High-End Rentals &amp; Fleet
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-[#0a0a0a] border border-white/5 overflow-hidden hover:border-yellow-400/50 transition-colors group cursor-pointer">
              <div className="h-48 bg-cover bg-center opacity-80 group-hover:opacity-100 transition-opacity" style={{ backgroundImage: 'url("/rentals/generator.jpg")' }}></div>
              <div className="p-6">
                <h4 className="text-yellow-400 text-lg font-black uppercase mb-3 tracking-wide">Generators &amp; Power</h4>
                <p className="text-white/60 text-sm leading-relaxed mb-4 min-h-[80px]">CleanGen J250 (250 kWh), Whisperwatt 125, Mobile Solar Trailers, and Custom 50A Distribution.</p>
                <span className="text-white text-xs font-black uppercase tracking-widest group-hover:text-yellow-400 transition-colors">View Specs &rarr;</span>
              </div>
            </div>

            <div className="bg-[#0a0a0a] border border-white/5 overflow-hidden hover:border-yellow-400/50 transition-colors group cursor-pointer">
              <div className="h-48 bg-cover bg-center opacity-80 group-hover:opacity-100 transition-opacity" style={{ backgroundImage: 'url("/event-1.jpg")' }}></div>
              <div className="p-6">
                <h4 className="text-white group-hover:text-yellow-400 transition-colors text-lg font-black uppercase mb-3 tracking-wide">Meyer Sound</h4>
                <p className="text-white/60 text-sm leading-relaxed mb-4 min-h-[80px]">Lina &amp; Leopard Arrays, 750-LFC &amp; 900-LFC Subwoofers, and premium Ground Stack configurations.</p>
                <span className="text-yellow-400 text-xs font-black uppercase tracking-widest">View Specs &rarr;</span>
              </div>
            </div>

            <div className="bg-[#0a0a0a] border border-white/5 overflow-hidden hover:border-yellow-400/50 transition-colors group cursor-pointer">
              <div className="h-48 bg-cover bg-center opacity-80 group-hover:opacity-100 transition-opacity" style={{ backgroundImage: 'url("/event-2.jpg")', filter: 'hue-rotate(180deg)' }}></div>
              <div className="p-6">
                <h4 className="text-white group-hover:text-yellow-400 transition-colors text-lg font-black uppercase mb-3 tracking-wide">L-Acoustics</h4>
                <p className="text-white/60 text-sm leading-relaxed mb-4 min-h-[80px]">K2 &amp; Kara II Arrays, KS28 Subwoofers, Syva systems, and high-impact Ground Stack options.</p>
                <span className="text-yellow-400 text-xs font-black uppercase tracking-widest">View Specs &rarr;</span>
              </div>
            </div>

            <div className="bg-[#0a0a0a] border border-white/5 overflow-hidden hover:border-yellow-400/50 transition-colors group cursor-pointer">
              <div className="h-48 bg-cover bg-center opacity-80 group-hover:opacity-100 transition-opacity" style={{ backgroundImage: 'url("/dj_gear.jpg")' }}></div>
              <div className="p-6">
                <h4 className="text-white group-hover:text-yellow-400 transition-colors text-lg font-black uppercase mb-3 tracking-wide">DJ Equipment</h4>
                <p className="text-white/60 text-sm leading-relaxed mb-4 min-h-[80px]">Pioneer CDJ 3000x, DJM-A9 / V10 mixers, Technics 1200 Turntables, and custom monitoring.</p>
                <span className="text-yellow-400 text-xs font-black uppercase tracking-widest">View Specs &rarr;</span>
              </div>
            </div>

          </div>
        </section>

        {/* Stats */}
        <section className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 py-16 border-t border-b border-white/10 text-center">
          <div>
            <div className="text-5xl md:text-6xl font-black italic leading-none text-white">20+</div>
            <div className="text-yellow-400 font-black uppercase text-[0.65rem] md:text-xs mt-4 tracking-[0.2em]">Years Experience</div>
          </div>
          <div>
            <div className="text-5xl md:text-6xl font-black italic leading-none text-white">0</div>
            <div className="text-yellow-400 font-black uppercase text-[0.65rem] md:text-xs mt-4 tracking-[0.2em]">Failed Projects</div>
          </div>
          <div>
            <div className="text-5xl md:text-6xl font-black italic leading-none text-white">86%</div>
            <div className="text-yellow-400 font-black uppercase text-[0.65rem] md:text-xs mt-4 tracking-[0.2em]">Carbon Reduction</div>
          </div>
        </section>
      </main>

      <footer id="contact" className="py-16 px-6 bg-[#050505] text-center border-t border-white/10">
        <p className="text-white/40 text-[0.6rem] md:text-xs tracking-widest uppercase">© 2026 ECOBOOM PRODUCTION COMPANY. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
