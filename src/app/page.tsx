import React from 'react';

const LandingPage = () => {
  return (
    <div className="page">
      {/* Navigation */}
      <nav className="nav">
        <a href="#top" aria-label="ECOBOOM home">
          <img src="/logo_stroked.png" alt="ECOBOOM" className="nav-logo" />
        </a>
        <div className="nav-links">
          <a href="#services" className="nav-link hide-mobile">Services</a>
          <a href="#rentals" className="nav-link">Rentals</a>
          <a href="#contact" className="nav-link active">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero" id="top">
        <div className="hero-bg" aria-hidden="true" />
        <div className="hero-inner">
          <h1 className="hero-title">
            Power,
            <br />
            <span className="hero-accent">Redefined.</span>
          </h1>
          <p className="hero-sub">
            Sustainable event production for the high-end market. Premium audio and specialized power rentals.
          </p>
          <a href="#rentals" className="cta">View Fleet &amp; Gear</a>
        </div>
      </section>

      <main className="main">
        {/* Services */}
        <section id="services" className="section">
          <h2 className="section-title">Core Expertise</h2>
          <div className="services-grid">
            <div
              className="service-card"
              style={{
                backgroundImage:
                  'linear-gradient(to top, rgba(0,0,0,0.9) 10%, rgba(0,0,0,0) 80%), url("/event-1.jpg")',
              }}
            >
              <div className="service-card-overlay" />
              <div className="service-card-content">
                <h3>Audio Production</h3>
                <p>High-fidelity sound design for events of any scale.</p>
              </div>
            </div>
            <div
              className="service-card"
              style={{
                backgroundImage:
                  'linear-gradient(to top, rgba(0,0,0,0.9) 10%, rgba(0,0,0,0) 80%), url("/event-1.jpg")',
              }}
            >
              <div className="service-card-overlay" />
              <div className="service-card-content">
                <h3>Power Rentals</h3>
                <p>Clean, silent energy solutions for remote productions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Rentals */}
        <section id="rentals" className="section">
          <h2 className="section-title">High-End Rentals &amp; Fleet</h2>
          <div className="rentals-grid">
            <article className="rental-card">
              <div
                className="rental-card-image"
                style={{ backgroundImage: 'url("/rentals/generator.jpg")' }}
              />
              <div className="rental-card-body">
                <h4 className="yellow">Generators &amp; Power</h4>
                <p>CleanGen J250 (250 kWh), Whisperwatt 125, Mobile Solar Trailers, and Custom 50A Distribution.</p>
                <span className="rental-card-cta">View Specs &rarr;</span>
              </div>
            </article>

            <article className="rental-card">
              <div
                className="rental-card-image"
                style={{ backgroundImage: 'url("/event-1.jpg")' }}
              />
              <div className="rental-card-body">
                <h4>Meyer Sound</h4>
                <p>Lina &amp; Leopard Arrays, 750-LFC &amp; 900-LFC Subwoofers, and premium Ground Stack configurations.</p>
                <span className="rental-card-cta">View Specs &rarr;</span>
              </div>
            </article>

            <article className="rental-card">
              <div
                className="rental-card-image"
                style={{ backgroundImage: 'url("/event-1.jpg")', filter: 'hue-rotate(180deg)' }}
              />
              <div className="rental-card-body">
                <h4>L-Acoustics</h4>
                <p>K2 &amp; Kara II Arrays, KS28 Subwoofers, Syva systems, and high-impact Ground Stack options.</p>
                <span className="rental-card-cta">View Specs &rarr;</span>
              </div>
            </article>

            <article className="rental-card">
              <div
                className="rental-card-image"
                style={{ backgroundImage: 'url("/dj_gear.jpg")' }}
              />
              <div className="rental-card-body">
                <h4>DJ Equipment</h4>
                <p>Pioneer CDJ 3000x, DJM-A9 / V10 mixers, Technics 1200 Turntables, and custom monitoring.</p>
                <span className="rental-card-cta">View Specs &rarr;</span>
              </div>
            </article>
          </div>
        </section>

        {/* Stats */}
        <section className="stats">
          <div>
            <div className="stat-num">20+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div>
            <div className="stat-num">0</div>
            <div className="stat-label">Failed Projects</div>
          </div>
          <div>
            <div className="stat-num">86%</div>
            <div className="stat-label">Carbon Reduction</div>
          </div>
        </section>
      </main>

      <footer id="contact" className="footer">
        <p>© 2026 ECOBOOM PRODUCTION COMPANY. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
