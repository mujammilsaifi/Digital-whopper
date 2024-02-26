import React, {useState} from 'react'
import '../component/style/about.css'
import { Helmet } from 'react-helmet-async';
const About = () => {

  const [toggle, setToggle] = useState(1);
 
  const tabtoogle=(id)=>{
        setToggle(id);
  }
  return (
    <>
     <Helmet>
        <title>About Us</title>
        <meta name="description" content="About content" />
        <meta name="keywords" content="HTML, CSS, JavaScript"></meta>
      </Helmet>
    <div className='about'>
      <div className="about-t1">
        <h1>About us</h1>
      </div>
      <div className="about-section-2">
        <div className="about-div1">
        <img src={require('../component/images/about-img.jpg')} alt="first" />
            <div className="award">
              <h2>Our Award-Winning Company</h2>
              <p>Flexible Delivery Aligned to Your Workflow, Inside or Out</p>
            </div>
        </div>
        <div className="about-div2">
          <h3>Digital Whooper</h3>
          <h2>Comprehensive IT Solutions from Every Angle</h2>
          <div className="tabs">
              <ul className="nav nav-tabs mb-3" id="ex1" role="tablist">
                <li className="nav-item" role="presentation" onClick={()=>tabtoogle(1)}> OUR VISION
                </li>
                <li className="nav-item" role="presentation" onClick={()=>tabtoogle(2)}>OUR MISSION
                </li>
              </ul>
            <div className="content-tab">
                <p className={toggle===1?'tab-show':'tab'}> Cultivating Our Values and Principles in Every Endeavor, our goal at 'Digital Whopper' is to emerge as the foremost ethical digital marketing service provider and a dominant force in the online marketplace. We are dedicated to pioneering transformative trends in the dynamic landscape of digital marketing and IT, ushering in a new era of innovation and excellence.</p>
                <p className={toggle===2?'tab-show':'tab'}> At Digital Whopper, our mission is to harness the power of technology to deliver dynamic, result-driven digital marketing and IT solutions. From cutting-edge web development and app creation to seamless website management and captivating video production, we cater to businesses of all sizes, including startups.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="time-line">
          <h3>Our Timeline</h3>
          <h2>Journey to Becoming a Premier 360-Degree IT Solutions Provider in India</h2>
          <div className="main-container">        
              <div className="text-wrapper left">
                  <div className="content border-right">
                      <h3>Elevating Our IT Solutions and Digital Marketing Mastery</h3>
                      <p>At our core, we are dedicated to elevating our expertise to new heights. Our commitment to excellence is encapsulated in our mantra, 'Elevating Our Expertise: Unleashing 360-Degree IT Solutions and Digital Marketing Mastery.</p>
                  </div>
              </div>          
              <div className="text-wrapper right">                
                  <div className="content border-left">
                      <h3>Complete Digital Marketing</h3>
                      <p>In the fast-paced and ever-evolving digital landscape, 'Complete Digital Marketing' isn't just a service; it's a holistic strategy that ensures your brand's online presence is nothing short of exceptional.</p>
                  </div>
              </div>              
              <div className="text-wrapper left">                  
                  <div className="content border-right">
                      <h3>PPC Marketing</h3>
                      <p>PPC Marketing, or Pay-Per-Click Marketing, is a dynamic and results-driven digital advertising strategy. It allows businesses to strategically place ads on various online platforms and only pay when a user clicks on the ad.</p>
                  </div>
              </div>              
              <div className="text-wrapper right">                
                  <div className="content border-left">
                      <h3>Website & Application Development</h3>
                      <p>Then Moving forward with our journey, we included Started an additional trade-in Website & Application development with advanced UX UI designs and provided all dynamic features.</p>
                  </div>
              </div>
          </div>
      </div>
    </div>
    </>
  )
}

export default About