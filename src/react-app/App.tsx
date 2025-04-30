// src/App.tsx
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaTools, FaTree, FaPaintRoller, FaWrench, FaShieldAlt, FaCheckCircle, FaCertificate, FaAward, FaMedal, FaBars, FaTimes } from 'react-icons/fa';
import Share from './pages/Share';
import "./App.css";

// Main content component
function MainContent() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event to add sticky class to nav
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile nav when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if the navigation is open and if the click is outside the nav
      if (navOpen && !(event.target as Element).closest('.nav-links') && 
          !(event.target as Element).closest('.mobile-nav-toggle')) {
        setNavOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [navOpen]);

  // Close mobile nav when clicking a link
  const handleNavLinkClick = () => {
    setNavOpen(false);
  };

  // Close mobile nav when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNavOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="app">
      <Helmet>
        <title>LTC Contracting LLC | Professional Contracting Services in Rhode Island</title>
        <meta name="description" content="LTC Contracting LLC offers professional residential and commercial contracting services in Rhode Island with verified credentials and proven expertise." />
        <meta property="og:title" content="LTC Contracting LLC | Professional Contracting in Rhode Island" />
        <meta property="og:description" content="Professional residential and commercial contracting services in Rhode Island with verified credentials and proven expertise." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ltc-contracting.com" />
        <meta property="og:image" content="https://ltc-contracting.com/images/logo_full_transparent.png" />
      </Helmet>
      
      <header className="header">
        <div className="logo">
          <img src="/images/logo_full_transparent.png" alt="LTC CONTRACTING LLC" />
        </div>
        <div className="header-right">
          <div className="company-name">LTC Contracting LLC</div>
          <div className="contact-info">
            <a href="tel:4017498042"><FaPhone aria-hidden="true" /> <span>(401) 749-8042</span></a>
            <a href="mailto:LTCContractingLLC@gmail.com"><FaEnvelope aria-hidden="true" /> <span>Contact Us</span></a>
          </div>
        </div>
      </header>

      <nav className={`nav ${scrolled ? 'scrolled' : ''} ${navOpen ? 'nav-open' : ''}`}>
        <button 
          className="mobile-nav-toggle" 
          onClick={() => setNavOpen(!navOpen)}
          aria-label={navOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={navOpen}
        >
          {navOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div className={`nav-links ${navOpen ? 'show' : ''}`}>
          <a href="#home" onClick={handleNavLinkClick}>Home</a>
          <a href="#services" onClick={handleNavLinkClick}>Services</a>
          <a href="#about" onClick={handleNavLinkClick}>About</a>
          <a href="#credentials" onClick={handleNavLinkClick}>Credentials</a>
          <a href="#contact" onClick={handleNavLinkClick}>Contact</a>
        </div>
      </nav>

      <main className="main">
        <section className="hero" id="home">
          <div className="hero-content">
            <h1>Registered & Insured Contracting Services in Rhode Island</h1>
            <p>Professional residential and commercial contracting solutions with verified credentials and proven expertise</p>
            <div className="hero-badges">
              <div className="badge">
                <FaShieldAlt aria-hidden="true" />
                <span>RI Registration #GC-46778</span>
              </div>
              <div className="badge">
                <FaCheckCircle aria-hidden="true" />
                <span>BuildZoom Score: 90</span>
              </div>
              <div className="badge">
                <FaCertificate aria-hidden="true" />
                <span>Verified Contractor</span>
              </div>
            </div>
          </div>
          <div className="hero-overlay"></div>
          <img src="/images/logo_monochrome_black.png" alt="" className="watermark" aria-hidden="true" />
        </section>

        <section className="credentials" id="credentials">
          <h2>Our Credentials</h2>
          <div className="credentials-content">
            <div className="credential-item">
              <FaAward className="credential-icon" aria-hidden="true" />
              <h3>State Registered Contractor</h3>
              <p>Rhode Island State Registration #GC-46778</p>
              <p>Authorized for Residential & Commercial Projects</p>
              <p>Active Status with RI Contractors' Registration Board</p>
            </div>
            <div className="credential-item">
              <FaShieldAlt className="credential-icon" aria-hidden="true" />
              <h3>Insurance & Bonding</h3>
              <p>Comprehensive General Liability Insurance</p>
              <p>Workers' Compensation Coverage</p>
              <p>Property Damage Protection</p>
            </div>
            <div className="credential-item">
              <FaMedal className="credential-icon" aria-hidden="true" />
              <h3>Professional Standing</h3>
              <p>BuildZoom Verified Contractor (Score: 90)</p>
              <p>5+ Years Industry Experience</p>
              <p>Continuing Education Certified</p>
            </div>
          </div>
        </section>

        <section className="services" id="services">
          <h2>Our Services</h2>
          <div className="service-grid">
            <div className="service-card">
              <div className="service-content">
                <FaTools className="service-icon" aria-hidden="true" />
                <h3>General Contracting</h3>
                <ul className="service-list">
                  <li>Complete Home Renovations</li>
                  <li>Kitchen & Bathroom Remodeling</li>
                  <li>Additions & Extensions</li>
                  <li>Basement Finishing</li>
                </ul>
                <p>State-registered residential and commercial contracting services. From new construction to renovations, we deliver professional results that meet Rhode Island's strict building codes.</p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-content">
                <FaTree className="service-icon" aria-hidden="true" />
                <h3>Landscaping</h3>
                <ul className="service-list">
                  <li>Landscape Design & Installation</li>
                  <li>Hardscape Construction</li>
                  <li>Lawn Care & Maintenance</li>
                  <li>Seasonal Clean-up</li>
                </ul>
                <p>Expert landscape design and maintenance services tailored for New England's unique climate. We specialize in creating sustainable, beautiful outdoor spaces that enhance your property's value.</p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-content">
                <FaPaintRoller className="service-icon" aria-hidden="true" />
                <h3>Painting</h3>
                <ul className="service-list">
                  <li>Interior & Exterior Painting</li>
                  <li>Cabinet Refinishing</li>
                  <li>Deck & Fence Staining</li>
                  <li>Wallpaper Installation</li>
                </ul>
                <p>Professional interior and exterior painting services with premium materials and expert application. We ensure lasting beauty and protection for your property.</p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-content">
                <FaWrench className="service-icon" aria-hidden="true" />
                <h3>Handyman Services</h3>
                <ul className="service-list">
                  <li>General Repairs & Maintenance</li>
                  <li>Storm Preparation & Recovery</li>
                  <li>Deck & Fence Repairs</li>
                  <li>Door & Window Installation</li>
                </ul>
                <p>Comprehensive maintenance and repair services by our skilled team. From storm preparation to seasonal upkeep, we keep your property in perfect condition year-round.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="about" id="about">
          <div className="about-header">
            <img src="/images/logo_full_transparent.png" alt="LTC Contracting" className="about-logo" />
          </div>
          <div className="about-content">
            <h2>About LTC Contracting</h2>
            <p>Founded by Liam Cahoon, LTC Contracting LLC has established itself as a trusted name in Rhode Island's construction industry. Our BuildZoom score of 90 reflects our commitment to maintaining high standards in every project we undertake.</p>
            <p>We bring professional expertise and local knowledge to every project, understanding the unique challenges of building and maintaining properties in New England. From small repairs to major renovations, we approach each job with the same level of dedication and expertise.</p>
          </div>
        </section>

        <section className="contact" id="contact">
          <h2>Contact Us</h2>
          <div className="contact-details">
            <p><FaPhone aria-hidden="true" /> <a href="tel:4017498042">(401) 749-8042</a></p>
            <p><FaEnvelope aria-hidden="true" /> <a href="mailto:LTCContractingLLC@gmail.com">LTCContractingLLC@gmail.com</a></p>
            <p><FaMapMarkerAlt aria-hidden="true" /> Serving all of Rhode Island</p>
          </div>
          <div className="service-areas">
            <h3>Service Areas</h3>
            <p>Providence • Warwick • Cranston • Pawtucket • East Providence • Woonsocket • Newport • And surrounding areas</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <img src="/images/logo_full_transparent.png" alt="LTC Contracting" className="footer-logo" />
          <div className="footer-info">
            <p>© 2024 LTC Contracting LLC. All rights reserved.</p>
            <p>Rhode Island Registered Contractor #GC-46778 | Fully Insured</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// App component with routing
interface AppProps {
  initialPage?: string;
}

function App({ initialPage }: AppProps = {}) {
  return (
    <Router>
      <AppContent initialPath={initialPage} />
    </Router>
  );
}

// App content with routes
function AppContent({ initialPath }: { initialPath?: string }) {
  const location = useLocation();
  
  // Use initialPath if provided, otherwise use current location
  const currentPath = initialPath || location.pathname;
  
  // If we're on the share page, don't render the main layout
  if (currentPath === '/share') {
    return (
      <Routes>
        <Route path="/share" element={<Share />} />
      </Routes>
    );
  }
  
  // Otherwise render main content with all routes
  return (
    <Routes>
      <Route path="/" element={<MainContent />} />
      <Route path="/share" element={<Share />} />
    </Routes>
  );
}

export default App;
