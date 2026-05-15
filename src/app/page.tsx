import React from 'react';

const LandingPage = () => {
  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif', padding: '0', margin: '0', overflowX: 'hidden' }}>
      {/* Navigation */}
      <nav style={{ 
        position: 'fixed', 
        width: '100%', 
        top: 0, 
        zIndex: 1000, 
        backgroundColor: 'rgba(0,0,0,0.95)', 
        backdropFilter: 'blur(15px)', 
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px 24px',
        boxSizing: 'border-box'
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* Logo container - using the new stroked PNG once the subagent finishes */}
          <div>
            <img 
              src="/logo_stroked.png" 
              alt="ECOBOOM" 
              style={{ 
                height: '35px', 
                width: 'auto', 
                display: 'block', 
                objectFit: 'contain'
              }} 
            />
          </div>
        </div>
        <div style={{ display: 'flex', gap: '24px', textTransform: 'uppercase', fontSize: '0.7rem', fontWeight: '900', letterSpacing: '0.15em' }}>
          <a href="#services" style={{ color: '#fff', textDecoration: 'none' }}>Services</a>
          <a href="#rentals" style={{ color: '#fff', textDecoration: 'none' }}>Rentals</a>
          <a href="#contact" style={{ color: '#facc15', textDecoration: 'none' }}>Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ 
        height: '100vh', 
        width: '100%',
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        textAlign: 'center',
        padding: '0 24px',
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url("/hero_v2.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        boxSizing: 'border-box',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '800px', marginTop: '40px', width: '100%' }}>
          <h1 style={{ fontSize: 'clamp(3rem, 10vw, 6rem)', fontWeight: '900', lineHeight: '1.0', marginBottom: '24px', letterSpacing: '-0.04em', textTransform: 'uppercase' }}>
            POWER,<br/><span style={{ color: '#facc15' }}>REDEFINED.</span>
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 4vw, 1.4rem)', color: 'rgba(255,255,255,0.8)', marginBottom: '40px', fontWeight: '400', maxWidth: '540px', margin: '0 auto 40px auto', lineHeight: '1.5' }}>
            Sustainable event production for the high-end market. Premium audio and specialized power rentals.
          </p>
          <a href="#rentals" style={{ backgroundColor: '#facc15', color: '#000', padding: '18px 48px', fontWeight: '900', border: 'none', cursor: 'pointer', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.15em', borderRadius: '2px', textDecoration: 'none', display: 'inline-block' }}>
            View Fleet & Gear
          </a>
        </div>
      </section>

      <main style={{ padding: '80px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Rentals Navigation / Fleet - UPDATED WITH CARDS */}
        <section id="rentals" style={{ marginBottom: '100px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '900', textTransform: 'uppercase', borderBottom: '2px solid #facc15', paddingBottom: '16px', marginBottom: '48px', letterSpacing: '0.1em', display: 'inline-block' }}>
            High-End Rentals & Fleet
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            
            {/* Generator Card */}
            <a href="#generator-details" style={{ textDecoration: 'none', color: 'inherit', display: 'block', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden', backgroundColor: '#0a0a0a', transition: 'transform 0.3s ease' }}>
              <div style={{ height: '220px', backgroundImage: 'url("/rentals/generator.png"), linear-gradient(#111, #111)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              <div style={{ padding: '24px' }}>
                <h4 style={{ color: '#facc15', fontSize: '1.3rem', fontWeight: '900', textTransform: 'uppercase', marginBottom: '12px', letterSpacing: '0.05em' }}>Generators & Power</h4>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '16px' }}>CleanGen J250 (250 kWh), Whisperwatt 125, Mobile Solar Trailers, and Custom 50A Distribution.</p>
                <span style={{ color: '#fff', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em' }}>View Specs &rarr;</span>
              </div>
            </a>

            {/* Meyer Sound Card */}
            <a href="#audio-details" style={{ textDecoration: 'none', color: 'inherit', display: 'block', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden', backgroundColor: '#0a0a0a', transition: 'transform 0.3s ease' }}>
              <div style={{ height: '220px', backgroundImage: 'url("/event-1.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              <div style={{ padding: '24px' }}>
                <h4 style={{ color: '#fff', fontSize: '1.3rem', fontWeight: '900', textTransform: 'uppercase', marginBottom: '12px', letterSpacing: '0.05em' }}>Meyer Sound</h4>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '16px' }}>Lina & Leopard Arrays, 750-LFC & 900-LFC Subwoofers, and premium Ground Stack configurations for pristine acoustics.</p>
                <span style={{ color: '#facc15', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em' }}>View Specs &rarr;</span>
              </div>
            </a>

            {/* L-Acoustics Card */}
            <a href="#audio-details" style={{ textDecoration: 'none', color: 'inherit', display: 'block', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden', backgroundColor: '#0a0a0a', transition: 'transform 0.3s ease' }}>
              <div style={{ height: '220px', backgroundImage: 'url("/event-2.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'hue-rotate(180deg)' }}></div>
              <div style={{ padding: '24px' }}>
                <h4 style={{ color: '#fff', fontSize: '1.3rem', fontWeight: '900', textTransform: 'uppercase', marginBottom: '12px', letterSpacing: '0.05em' }}>L-Acoustics</h4>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '16px' }}>K2 & Kara II Arrays, KS28 Subwoofers, Syva systems, and high-impact Ground Stack options.</p>
                <span style={{ color: '#facc15', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em' }}>View Specs &rarr;</span>
              </div>
            </a>

            {/* DJ Equipment Card */}
            <a href="#dj-details" style={{ textDecoration: 'none', color: 'inherit', display: 'block', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden', backgroundColor: '#0a0a0a', transition: 'transform 0.3s ease' }}>
              <div style={{ height: '220px', backgroundColor: '#1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                 <div style={{ color: '#444', fontSize: '3rem', fontWeight: '900', fontStyle: 'italic' }}>PRO DJ</div>
              </div>
              <div style={{ padding: '24px' }}>
                <h4 style={{ color: '#fff', fontSize: '1.3rem', fontWeight: '900', textTransform: 'uppercase', marginBottom: '12px', letterSpacing: '0.05em' }}>DJ Equipment</h4>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '16px' }}>Pioneer CDJ 3000x, DJM-A9 / V10 mixers, Technics 1200 Turntables, and custom monitoring.</p>
                <span style={{ color: '#facc15', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em' }}>View Specs &rarr;</span>
              </div>
            </a>

          </div>
        </section>

        {/* Stats */}
        <section style={{ marginTop: '100px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '64px', padding: '80px 0', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
          <div>
            <div style={{ fontSize: '4rem', fontWeight: '900', fontStyle: 'italic', lineHeight: '1', color: '#fff' }}>20+</div>
            <div style={{ color: '#facc15', fontWeight: '900', textTransform: 'uppercase', fontSize: '0.75rem', marginTop: '16px', letterSpacing: '0.2em' }}>Years Experience</div>
          </div>
          <div>
            <div style={{ fontSize: '4rem', fontWeight: '900', fontStyle: 'italic', lineHeight: '1', color: '#fff' }}>0</div>
            <div style={{ color: '#facc15', fontWeight: '900', textTransform: 'uppercase', fontSize: '0.75rem', marginTop: '16px', letterSpacing: '0.2em' }}>Failed Projects</div>
          </div>
          <div>
            <div style={{ fontSize: '4rem', fontWeight: '900', fontStyle: 'italic', lineHeight: '1', color: '#fff' }}>86%</div>
            <div style={{ color: '#facc15', fontWeight: '900', textTransform: 'uppercase', fontSize: '0.75rem', marginTop: '16px', letterSpacing: '0.2em' }}>Carbon Reduction</div>
          </div>
        </section>
      </main>

      <footer id="contact" style={{ padding: '80px 24px', backgroundColor: '#000', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.65rem', letterSpacing: '0.1em' }}>© 2026 ECOBOOM PRODUCTION COMPANY. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
};

export default LandingPage;