import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import "./style/footer.css";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className="div-1">
        <Link to="/">
                <img src={require('./images/Digital- logo-footer.png')} alt="site Logo" /></Link>
                <div className="social-icon">
                <span className='icon-social'>
                <a href="https://www.facebook.com/webloper?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} />
                </a>
                </span>
                <span className='icon-social'>
                    <a href="https://instagram.com/digital_whopper?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
                </a>
                </span>
                <span className='icon-social'>
                <a href="https://www.linkedin.com/company/digitalwhopper/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
                </a>
                </span>
                </div>
                <div className="address">
                    <p>Address: D5, Bharu Marg, Ashok Vihar, Nandpuri Colony, Malviya Nagar, Jaipur, Rajasthan 302017 <br />
                    Email:  admin@digitalwhopper.com <br />
                    CALL: +91 6200379161</p>
                </div>
        </div>
        <div className="div-2">
            <h2> <strong>DIGITAL MARKETING</strong></h2>
            <ul>
                <li><Link to="/">Digital Marketing</Link></li>
                <li><Link to="/social-media-marketing">Social Media Marketing</Link></li>
                <li><Link to="/seo">SEO</Link></li>
                <li><Link to="/ppc-marketing">PPC Marketing</Link></li>
                <li><Link to="/e-commerce-marketing">E-Commerce Marketing</Link></li>
            </ul>
        </div>
        <div className="div-2">
            <h2> <strong>TECHNOLOGY SERVICES</strong></h2>
            <ul>
                <li><Link to="/web-development">Web Development</Link></li>
                <li><Link to="/software-development">Software Development</Link></li>
                <li><Link to="/mobile-app-development">Mobile App Development</Link></li>
                <li><Link to="/product-development">Product Development</Link></li>
            </ul>
        </div>
        <div className="div-2">
            <h2> <strong>QUICK LINKS </strong></h2>
            <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/career">Careers</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/privacy-policy">PRIVACY POLICY</Link></li>
                <li><Link to="/company-policy">COMPANY POLICY</Link></li>
            </ul>
        </div>
        <div className="div-3">
            <h2> <strong>REACH US</strong></h2>
            <div className="map">
            <iframe title="digital whopper" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.904791692362!2d75.81476607497078!3d26.842980363084685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db70d6ddc5739%3A0x26f55464d633e961!2sDigital%20Whopper!5e0!3m2!1sen!2sin!4v1693403125754!5m2!1sen!2sin"  className='map'  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            
        </div>
    </div>
    <div className="copyright">
        <p>Copyright &copy; 2023 <span style={{color: 'orange'}}> Digital Whopper. </span> All Rights Reserved.</p>
    </div>
    <FloatingWhatsApp
        phoneNumber="+91 6200379161" 
        accountName="Digital Whopper" 
        avatar={require('./images/Digital- logo-footer.png')}
      />
    </>
  )
}

export default Footer