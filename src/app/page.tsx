import React from 'react';

const LandingPage = () => {
  return (
    <div style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', fontFamily: 'sans-serif', padding: '0', margin: '0' }}>
      {/* Navigation */}
      <nav style={{ 
        position: 'fixed', 
        width: '100%', 
        top: 0, 
        zIndex: 1000, 
        backgroundColor: 'rgba(0,0,0,0.95)', 
        backdropFilter: 'blur(10px)', 
        borderBottom: '1px solid #222',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px 20px',
        boxSizing: 'border-box'
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/logo.jpg" alt="ECOBOOM" style={{ height: '35px', display: 'block' }} />
        </div>
        <div style={{ display: 'flex', gap: '20px', textTransform: 'uppercase', fontSize: '0.65rem', fontWeight: '900', letterSpacing: '0.1em' }}>
          <a href="#services" style={{ color: 'white', textDecoration: 'none' }}>Services</a>
          <a href="#contact" style={{ color: '#facc15', textDecoration: 'none' }}>Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ 
        height: '90vh', 
        display: 'flex', 
        alignItems: 'center', 
        padding: '0 20px',
        backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url("/hero_bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ maxWidth: '600px', marginTop: '40px' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: '900', lineHeight: '1.1', marginBottom: '20px', letterSpacing: '-0.02em' }}>
            POWER,<br/>REDEFINED.
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#ccc', marginBottom: '30px', fontWeight: '300', lineHeight: '1.5' }}>
            Sustainable event production for the high-end market. Premium audio and specialized power rentals.
          </p>
          <button style={{ backgroundColor: '#facc15', color: 'black', padding: '15px 30px', fontWeight: '900', border: 'none', cursor: 'pointer', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em' }}>
            Get a Quote
          </button>
        </div>
      </section>

      <main style={{ padding: '40px 20px' }}>
        {/* Services */}
        <section id="services">
          <h2 style={{ fontSize: '1.8rem', fontWeight: '900', fontStyle: 'italic', textTransform: 'uppercase', borderBottom: '1px solid #222', paddingBottom: '15px', marginBottom: '30px' }}>
            Expertise
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
            <div style={{ position: 'relative', height: '250px', backgroundImage: 'linear-gradient(to top, black, transparent), url("/event-1.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', border: '1px solid #222' }}>
              <h3 style={{ color: '#facc15', fontSize: '1.2rem', fontWeight: '900', textTransform: 'uppercase', marginBottom: '5px' }}>Audio Production</h3>
              <p style={{ color: '#bbb', fontSize: '0.8rem' }}>High-fidelity sound design for any scale.</p>
            </div>
            <div style={{ position: 'relative', height: '250px', backgroundImage: 'linear-gradient(to top, black, transparent), url("/event-2.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', border: '1px solid #222' }}>
              <h3 style={{ color: '#facc15', fontSize: '1.2rem', fontWeight: '900', textTransform: 'uppercase', marginBottom: '5px' }}>Power Rentals</h3>
              <p style={{ color: '#bbb', fontSize: '0.8rem' }}>Clean, silent energy for remote locations.</p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section style={{ marginTop: '60px', display: 'grid', gridTemplateColumns: '1fr', gap: '30px', padding: '40px 0', borderTop: '1px solid #222' }}>
          <div>
            <div style={{ fontSize: '3rem', fontWeight: '900', fontStyle: 'italic', lineHeight: '1' }}>20+</div>
            <div style={{ color: '#facc15', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.7rem' }}>Years Experience</div>
          </div>
          <div>
            <div style={{ fontSize: '3rem', fontWeight: '900', fontStyle: 'italic', lineHeight: '1' }}>0</div>
            <div style={{ color: '#facc15', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.7rem' }}>Failed Clients</div>
          </div>
        </section>
      </main>

      <footer id="contact" style={{ padding: '60px 20px', backgroundColor: '#050505', textAlign: 'center', borderTop: '1px solid #222' }}>
        <img src="/logo.jpg" alt="ECOBOOM" style={{ height: '25px', opacity: '0.5', marginBottom: '20px' }} />
        <p style={{ color: '#444', fontSize: '0.6rem' }}>© 2026 ECOBOOM PRODUCTION COMPANY. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
};

export default LandingPage;