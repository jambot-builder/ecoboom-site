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
        backgroundColor: 'rgba(0,0,0,0.9)', 
        backdropFilter: 'blur(10px)', 
        borderBottom: '1px solid #222',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 20px',
        boxSizing: 'border-box'
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/logo.jpg" alt="ECOBOOM" style={{ height: '32px', width: 'auto', display: 'block', objectFit: 'contain' }} />
        </div>
        <div style={{ display: 'flex', gap: '20px', textTransform: 'uppercase', fontSize: '0.65rem', fontWeight: '800', letterSpacing: '0.1em' }}>
          <a href="#services" style={{ color: '#fff', textDecoration: 'none' }}>Services</a>
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
        padding: '0 20px',
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.9)), url("/hero_bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        boxSizing: 'border-box'
      }}>
        <div style={{ maxWidth: '800px', marginTop: '60px' }}>
          <h1 style={{ fontSize: 'clamp(3rem, 10vw, 6rem)', fontWeight: '900', lineHeight: '0.9', marginBottom: '20px', letterSpacing: '-0.04em', textTransform: 'uppercase' }}>
            POWER,<br/><span style={{ fontStyle: 'italic' }}>REDEFINED.</span>
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 4vw, 1.5rem)', color: '#aaa', marginBottom: '40px', fontWeight: '300', maxWidth: '600px', margin: '0 auto 40px auto', lineHeight: '1.4' }}>
            Sustainable event production for the high-end market. Premium audio and specialized power rentals.
          </p>
          <button style={{ backgroundColor: '#facc15', color: '#000', padding: '16px 40px', fontWeight: '900', border: 'none', cursor: 'pointer', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '0.1em', borderRadius: '4px' }}>
            Get a Quote
          </button>
        </div>
      </section>

      <main style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Services */}
        <section id="services">
          <h2 style={{ fontSize: '2rem', fontWeight: '900', fontStyle: 'italic', textTransform: 'uppercase', borderBottom: '1px solid #222', paddingBottom: '20px', marginBottom: '40px', letterSpacing: '0.05em' }}>
            Core Expertise
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            <div style={{ position: 'relative', height: '450px', backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent), url("/event-1.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', border: '1px solid #111', boxSizing: 'border-box' }}>
              <h3 style={{ color: '#facc15', fontSize: '1.5rem', fontWeight: '900', textTransform: 'uppercase', marginBottom: '10px' }}>Audio Production</h3>
              <p style={{ color: '#ccc', lineHeight: '1.5', fontSize: '0.95rem' }}>High-fidelity sound design for events of any scale.</p>
            </div>
            <div style={{ position: 'relative', height: '450px', backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent), url("/event-2.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', border: '1px solid #111', boxSizing: 'border-box' }}>
              <h3 style={{ color: '#facc15', fontSize: '1.5rem', fontWeight: '900', textTransform: 'uppercase', marginBottom: '10px' }}>Power Rentals</h3>
              <p style={{ color: '#ccc', lineHeight: '1.5', fontSize: '0.95rem' }}>Clean, silent energy solutions for remote productions.</p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section style={{ marginTop: '100px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', padding: '80px 0', borderTop: '1px solid #222', borderBottom: '1px solid #222', textAlign: 'center' }}>
          <div>
            <div style={{ fontSize: '4rem', fontWeight: '900', fontStyle: 'italic', lineHeight: '1', color: '#fff' }}>20+</div>
            <div style={{ color: '#facc15', fontWeight: '800', textTransform: 'uppercase', fontSize: '0.75rem', marginTop: '10px', letterSpacing: '0.1em' }}>Years Experience</div>
          </div>
          <div>
            <div style={{ fontSize: '4rem', fontWeight: '900', fontStyle: 'italic', lineHeight: '1', color: '#fff' }}>0</div>
            <div style={{ color: '#facc15', fontWeight: '800', textTransform: 'uppercase', fontSize: '0.75rem', marginTop: '10px', letterSpacing: '0.1em' }}>Failed Projects</div>
          </div>
          <div>
            <div style={{ fontSize: '4rem', fontWeight: '900', fontStyle: 'italic', lineHeight: '1', color: '#fff' }}>86%</div>
            <div style={{ color: '#facc15', fontWeight: '800', textTransform: 'uppercase', fontSize: '0.75rem', marginTop: '10px', letterSpacing: '0.1em' }}>Carbon Reduction</div>
          </div>
        </section>
      </main>

      <footer id="contact" style={{ padding: '80px 20px', backgroundColor: '#050505', textAlign: 'center', borderTop: '1px solid #222' }}>
        <img src="/logo.jpg" alt="ECOBOOM" style={{ height: '30px', opacity: '0.6', marginBottom: '30px', filter: 'grayscale(100%)' }} />
        <p style={{ color: '#444', fontSize: '0.7rem', letterSpacing: '0.05em' }}>© 2026 ECOBOOM PRODUCTION COMPANY. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
};

export default LandingPage;