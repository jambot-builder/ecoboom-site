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
          {/* Logo container - Claude Code to fix stroke */}
          <div style={{ 
            filter: `
              drop-shadow(1px 0 0 #fff) 
              drop-shadow(-1px 0 0 #fff) 
              drop-shadow(0 1px 0 #fff) 
              drop-shadow(0 -1px 0 #fff)
              drop-shadow(1px 1px 0 #fff)
              drop-shadow(-1px -1px 0 #fff)
              drop-shadow(1px -1px 0 #fff)
              drop-shadow(-1px 1px 0 #fff)
            `
          }}>
            <img 
              src="/logo.jpg" 
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
          <button style={{ backgroundColor: '#facc15', color: '#000', padding: '18px 48px', fontWeight: '900', border: 'none', cursor: 'pointer', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.15em', borderRadius: '2px' }}>
            Get a Quote
          </button>
        </div>
      </section>

      <main style={{ padding: '80px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Services */}
        <section id="services">
          <h2 style={{ fontSize: '1.8rem', fontWeight: '900', textTransform: 'uppercase', borderBottom: '2px solid #facc15', paddingBottom: '16px', marginBottom: '48px', letterSpacing: '0.1em', display: 'inline-block' }}>
            Core Expertise
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            <div style={{ position: 'relative', height: '450px', backgroundImage: 'linear-gradient(to top, rgba(0,0,0,1) 10%, transparent), url("/event-1.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', border: '1px solid rgba(255,255,255,0.1)', boxSizing: 'border-box' }}>
              <h3 style={{ color: '#facc15', fontSize: '1.4rem', fontWeight: '900', textTransform: 'uppercase', marginBottom: '12px', letterSpacing: '0.05em' }}>Audio Production</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.6', fontSize: '0.95rem' }}>High-fidelity sound design for events of any scale.</p>
            </div>
            <div style={{ position: 'relative', height: '450px', backgroundImage: 'linear-gradient(to top, rgba(0,0,0,1) 10%, transparent), url("/event-2.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', border: '1px solid rgba(255,255,255,0.1)', boxSizing: 'border-box' }}>
              <h3 style={{ color: '#facc15', fontSize: '1.4rem', fontWeight: '900', textTransform: 'uppercase', marginBottom: '12px', letterSpacing: '0.05em' }}>Power Rentals</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.6', fontSize: '0.95rem' }}>Clean, silent energy solutions for remote productions.</p>
            </div>
          </div>
        </section>

        {/* Rentals Navigation / Fleet */}
        <section id="rentals" style={{ marginTop: '100px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '900', textTransform: 'uppercase', borderBottom: '2px solid #facc15', paddingBottom: '16px', marginBottom: '48px', letterSpacing: '0.1em', display: 'inline-block' }}>
            Equipment & Fleet
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
            <div style={{ backgroundColor: '#0a0a0a', padding: '32px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <h4 style={{ color: '#fff', fontSize: '1.2rem', fontWeight: '900', textTransform: 'uppercase', marginBottom: '16px', letterSpacing: '0.05em' }}>Meyer Sound</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: '2' }}>
                <li>Lina Line Arrays</li>
                <li>Leopard Compact Arrays</li>
                <li>750-LFC Subwoofers</li>
                <li>900-LFC Subwoofers</li>
              </ul>
            </div>
            
            <div style={{ backgroundColor: '#0a0a0a', padding: '32px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <h4 style={{ color: '#fff', fontSize: '1.2rem', fontWeight: '900', textTransform: 'uppercase', marginBottom: '16px', letterSpacing: '0.05em' }}>L-Acoustics</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: '2' }}>
                <li>K2 Line Source</li>
                <li>Kara II Arrays</li>
                <li>KS28 Subwoofers</li>
                <li>Syva Colinear Source</li>
              </ul>
            </div>

            <div style={{ backgroundColor: '#0a0a0a', padding: '32px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <h4 style={{ color: '#fff', fontSize: '1.2rem', fontWeight: '900', textTransform: 'uppercase', marginBottom: '16px', letterSpacing: '0.05em' }}>DJ Equipment</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: '2' }}>
                <li>Pioneer CDJ-3000</li>
                <li>Pioneer DJM-A9 / V10</li>
                <li>Technics 1200 Turntables</li>
                <li>Custom Booths & Monitoring</li>
              </ul>
            </div>

            <div style={{ backgroundColor: '#0a0a0a', padding: '32px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <h4 style={{ color: '#facc15', fontSize: '1.2rem', fontWeight: '900', textTransform: 'uppercase', marginBottom: '16px', letterSpacing: '0.05em' }}>Generators & Power</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: '2' }}>
                <li>CleanGen J250 (250 kWh)</li>
                <li>Whisperwatt 125</li>
                <li>Mobile Solar Trailers</li>
                <li>Custom Distribution (50A)</li>
              </ul>
            </div>
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