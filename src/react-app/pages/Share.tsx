import { FaPhone, FaEnvelope, FaLinkedin, FaStar, FaCheckCircle, FaGlobe, FaTools, FaTree, FaPaintRoller, FaWrench, FaInstagram, FaFacebook, FaUser, FaBuilding, FaFileAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import '../styles/Share.css';

function Share() {
  // Set document title
  useEffect(() => {
    document.title = "Liam Cahoon - LTC Contracting Owner";
    
    // Add meta tags directly
    const metaDescription = document.createElement('meta');
    metaDescription.name = "description";
    metaDescription.content = "Connect with Liam Cahoon, Owner of LTC Contracting LLC - Professional contractor in Rhode Island.";
    document.head.appendChild(metaDescription);
    
    return () => {
      document.head.removeChild(metaDescription);
    };
  }, []);

  return (
    <div className="linktree-container">
      <Helmet>
        <title>Liam Cahoon - LTC Contracting Owner</title>
        <meta name="description" content="Connect with Liam Cahoon, Owner of LTC Contracting LLC - Professional contractor in Rhode Island." />
        <meta property="og:title" content="Liam Cahoon | LTC Contracting" />
        <meta property="og:description" content="Connect with Liam Cahoon, Owner of LTC Contracting LLC for all your contracting needs in Rhode Island." />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://ltc-contracting.com/share" />
        <meta property="og:image" content="https://ltc-contracting.com/images/logo_full_transparent.png" />
      </Helmet>
      
      <header className="linktree-header">
        <div className="linktree-profile-image">
          <div className="placeholder-image">
            <FaUser className="placeholder-icon" />
          </div>
        </div>
        <div className="linktree-profile">
          <h1>Liam Cahoon</h1>
          <p className="linktree-title">Owner & Principal Contractor</p>
          <p className="linktree-company">LTC Contracting LLC</p>
          <p className="linktree-tagline">Professional Contracting Services in Rhode Island</p>
          <div className="linktree-badges">
            <span><FaCheckCircle /> RI Registration #GC-46778</span>
            <span><FaStar /> BuildZoom Score: 90</span>
          </div>
        </div>
      </header>

      <section className="linktree-links">
        <a href="https://ltc-contracting.com" className="linktree-link website">
          <FaGlobe className="linktree-icon" />
          <span>Company Website</span>
        </a>

        <a href="tel:4017498042" className="linktree-link phone">
          <FaPhone className="linktree-icon" />
          <span>Call Direct: (401) 749-8042</span>
        </a>

        <a href="mailto:LTCContractingLLC@gmail.com" className="linktree-link email">
          <FaEnvelope className="linktree-icon" />
          <span>Email: LTCContractingLLC@gmail.com</span>
        </a>
        
        <a href="https://www.linkedin.com/in/liam-cahoon/" target="_blank" rel="noopener noreferrer" className="linktree-link linkedin">
          <FaLinkedin className="linktree-icon" />
          <span>LinkedIn Profile</span>
        </a>

        <a href="https://www.facebook.com/LTCContracting" target="_blank" rel="noopener noreferrer" className="linktree-link facebook">
          <FaFacebook className="linktree-icon" />
          <span>Facebook</span>
        </a>

        <a href="https://www.instagram.com/ltccontracting" target="_blank" rel="noopener noreferrer" className="linktree-link instagram">
          <FaInstagram className="linktree-icon" />
          <span>Instagram</span>
        </a>

        <a href="https://buildzoom.com/contractor/ltc-contracting-llc" target="_blank" rel="noopener noreferrer" className="linktree-link buildzoom">
          <FaStar className="linktree-icon" />
          <span>BuildZoom Profile</span>
        </a>
      </section>

      <section className="linktree-info">
        <h2>Business Information</h2>
        
        <div className="linktree-info-grid">
          <a href="https://business.ri.gov/resource-hub/business-search" target="_blank" rel="noopener noreferrer" className="linktree-info-item">
            <FaBuilding className="linktree-info-icon" />
            <div>
              <h3>RI Business Registration</h3>
              <p>Verified Business Entity</p>
            </div>
          </a>
          
          <a href="https://crb.ri.gov/contractor-search" target="_blank" rel="noopener noreferrer" className="linktree-info-item">
            <FaFileAlt className="linktree-info-icon" />
            <div>
              <h3>Contractor Registration</h3>
              <p>RI Registration #GC-46778</p>
            </div>
          </a>
          
          <div className="linktree-info-item">
            <FaMapMarkerAlt className="linktree-info-icon" />
            <div>
              <h3>Service Area</h3>
              <p>Serving all of Rhode Island</p>
            </div>
          </div>
        </div>
      </section>

      <section className="linktree-services">
        <h2>Services Offered</h2>
        
        <div className="linktree-service-grid">
          <div className="linktree-service">
            <FaTools className="linktree-service-icon" />
            <h3>General Contracting</h3>
            <p>Renovations & Remodeling</p>
          </div>
          
          <div className="linktree-service">
            <FaTree className="linktree-service-icon" />
            <h3>Landscaping</h3>
            <p>Design & Maintenance</p>
          </div>
          
          <div className="linktree-service">
            <FaPaintRoller className="linktree-service-icon" />
            <h3>Painting</h3>
            <p>Interior & Exterior</p>
          </div>
          
          <div className="linktree-service">
            <FaWrench className="linktree-service-icon" />
            <h3>Handyman Services</h3>
            <p>Repairs & Installations</p>
          </div>
        </div>
      </section>

      <footer className="linktree-footer">
        <p>Liam Cahoon - Owner, LTC Contracting LLC</p>
        <p>Rhode Island Registered Contractor #GC-46778 | Fully Insured</p>
        <p>&copy; 2024 LTC Contracting LLC</p>
      </footer>
    </div>
  );
}

export default Share; 