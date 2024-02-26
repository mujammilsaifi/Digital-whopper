import React, {useState, useEffect} from "react";
import "./style/navbar.css";
import { Link } from 'react-router-dom'
function Navar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle the dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close the dropdown when scrolling
  const handleScroll = () => {
    if (isDropdownOpen) {
      setIsDropdownOpen(false);
    }
  };

  // Add a scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isDropdownOpen]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" >
      <div className="container-fluid">
        <Link className="navbar-brand logo" to="/">
        <img src={require('./images/Digital Whopper logo.png')} alt="site Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
         
          aria-label="Toggle navigation"
          onClick={toggleDropdown}
        >
          <span className="navbar-toggler-icon"></span>
                </button>
                <div className={isDropdownOpen?"collapse navbar-collapse show":"collapse navbar-collapse"} id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                <div className="dropdown">
                    <button className="dropbtn">DIGITAL MARKETING <span>+</span></button>
                    <div className="dropdown-content">
                        <Link to="/">DIGITAL MARKETING</Link>
                        <Link to="/seo">SEO</Link>
                        <Link to="/ppc-marketing">PPC MARKETING</Link>
                        <Link to="/social-media-marketing">SOCIAL MEDIA MARKETING</Link>
                        <Link to="/e-commerce-marketing">E-COMMERCE MARKETING</Link>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">TECHNOLOGY SERVICES <span>+</span></button>
                    <div className="dropdown-content">
                        <Link to="/web-development">WEB DEVELOPMENT</Link>
                        <Link to="/software-development">SOFTWARE DEVELOPMENT</Link>
                        <Link to="/mobile-app-development">MOBILE APP DEVELOPMENT</Link>
                        <Link to="/product-development">PRODUCT DEVELOPMENT</Link>
                    </div>
                </div>
            <li className="nav-item s-link">
              <Link className="dropbtn " aria-current="page" to="/portfolio">
                PORTFOLIO
              </Link>
            </li>
            <div className="dropdown">
                    <button className="dropbtn">ABOUT US <span>+</span></button>
                    <div className="dropdown-content">
                        <Link to="/about">ABOUT US</Link>
                        <Link to="/our-founder">OUR FOUNDER</Link>
                    </div>
            </div>

            <li className="nav-item s-link">
              <Link className="dropbtn " aria-current="page" to="/contact">
                CONTACT US
              </Link>
            </li>
          </ul>
          <div className="contact">
            <div className="number">
            <p>Talk to Our Expart</p>
            <Link to="tel:6200379161" >+91 6200379161</Link>
            </div>
            <Link to="tel:6200379161" className="call"><img src={require('./images/phone-call.png')}  alt="" /></Link>
         </div>
        </div>
        
      </div>
    </nav>
  );
}

export default Navar;
