import React from 'react'
import '../component/style/softwareDev.css'
import { Link } from 'react-router-dom'
const Software = () => {
  return (
    <>
    <div className='social-media'>
        <h2>Digital Whopper</h2>
        <h1>SECURE, ROBUST, SCALABLE APPLICATIONS FOR YOUR BUSINESS</h1>
        <p>End To End Web Application Development For Your Business Secure</p> 
        <Link to="/contact"  className='btn'>REQUEST A PROPOSAL</Link>
    </div>
    <div className="software-sec-2">
      <div className="software-div">
      <img src={require('../component/images/person-front-computer-working-html.jpg')} alt="software-develop" />
      </div>
      <div className="software-div">
        <h3>Digital Whopper</h3>
        <h2>BUILD NEXT-GENERATION WEB APPLICATIONS</h2>
        <p><strong>We Offer Comprehensive Web Application Development Solutions, Customized Specifically to Address Your Distinct Business Needs.</strong></p>
        <p>We harness cutting-edge technologies, including PHP, Web 2.0, HTML, Joomla, WordPress, Drupal, Magento, and OSCommerce, to develop responsive and custom web applications for your enterprise. Our proficient team harnesses the versatility of PHP, incorporating it with database languages like MySQL, HTML, CSS, JavaScript, and PHP Code. We employ frameworks such as ZEND, Codeigniter, Laravel, Yii, and CakePHP to engineer solutions that seamlessly function across various platforms and devices.</p>
       
        <Link to="/contact" className='btn'>CONSULT OUR TEAM</Link>
      </div>
    </div>
    <div className="software-service my-3">
      <h6>Services</h6>
      <h5>WEB APPLICATION DEVELOPMENT SERVICES WE OFFER</h5>
      <div className="software-services">
        <div class="grid-item">
          <img src={require('../component/images/portal-dev.jpg')} alt="software-develop.png" />
          <h2>Portal Development & Design</h2>
          <p>We develop both web-based portals and enterprise-level portals, ensuring they excel in terms of performance, cost-effectiveness, and growth opportunities. Our enterprise-grade implementations encompass efficient intranets, extranets, and interactive workplaces.</p>
        </div>
        <div class="grid-item">
          <img src={require('../component/images/web-support.jpg')} alt="web-support" />
          <h2>Web Application Support & Maintenance</h2>
          <p>We collaborate closely with you to support web applications, whether they were developed by our team or third-party providers. Additionally, we ensure comprehensive documentation and extend ongoing support to cater to your future requirements.</p>
        </div>
        <div class="grid-item">
          <img src={require('../component/images/web-maintaine.jpg')} alt="web-maintaine" />
          <h2>Website Development & Maintenance</h2>
          <p>We design websites that prioritize user-friendly navigation, robust information architecture, clear visual cues, and action-oriented layouts.content development and management systems, navigation design, programming, user interface design.</p>
        </div> 
      </div>
    </div>
    <div className="software-sec-4">
      <h6>Process</h6>
      <h5>WEB APPLICATION DEVELOPMENT CYCLE</h5>
        <div className="process-software">
          <div class="step">
            <img src={require('../component/images/puzzle-piece.png')} alt="product-design.png" />
            <h2>Strategy</h2>
            <p>We Delve Deep into Your Business Model, Address Market Challenges, and Refine Product Positioning to Assist You in Crafting a Product That Offers Distinctive Value.</p>
          </div>
          <div class="step">
            <img src={require('../component/images/product-design.png')} alt="product-design" />
            <h2>Product Design</h2>
            <p>We assemble a versatile team comprising strategists, designers, and developers to enable our clients to explore the potential of emerging technologies.</p>
          </div>
          <div class="step">
            <img src={require('../component/images/coding.png')} alt="product-code" />
            <h2>Development</h2>
            <p>We Possess Exceptionally Talented Teams That Remain Efficient and Swiftly Implement Tailored Solutions for Each Client. We Appoint Seasoned Managers to Oversee Each Project, Ensuring Code Quality.</p>
          </div>
          <div class="step">
            <img src={require('../component/images/assurance.png')} alt="assurance" />
            <h2>Quality Assurance</h2>
            <p>We Conduct Testing Throughout Every Iterative Phase of Product Development to Craft Solutions That Are Free from Bugs, Trustworthy, Safe, and Secure.</p>
          </div>
        </div>
    </div>
    <div className="software-sec-5">
      <div className="software-why-choose">
        <h2>Why Choose Us For Web Application Development?</h2>
        <ul>
          <li>We leverage cutting-edge software technologies to create distinctive websites.</li>
          <li>Our dedicated web development squad strives for 100% client satisfaction.</li>
          <li>Our team of web application developers is certified and highly seasoned.</li>
          <li>We provide comprehensive transparency and assistance to our clientele.</li>
          <li> Our website development services are budget-friendly.</li>
          <li>Furthermore, we extend ongoing support to our customers.</li>
        </ul>
      </div>
      <div className="software-why-choose">
      <img src={require('../component/images/software-why.jpg')} alt="why-choose-software" />
      </div>
    </div>
    <div className="software-sec-6">
          <h2>Kickstart Your Dream Project With Us</h2>
          <p>We have collaborated with some of the most innovative concepts and renowned brands globally, spanning various sectors and industries.</p>
          <Link to="/contact" className='btn'>LET'S CONNECT</Link>
    </div>
        
    </>
  )
}

export default Software