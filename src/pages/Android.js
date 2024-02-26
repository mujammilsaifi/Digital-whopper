import React from 'react'
import { Helmet } from 'react-helmet-async'

import { Link } from 'react-router-dom'

const Android = () => {
  return (
    <>
      <Helmet>
        <title>Android</title>
        <meta name="description" content="Android content" />
        <meta name="keywords" content="HTML, CSS, JavaScript"></meta>
      </Helmet>
    <div className='social-media'>
        <h2>Digital Whopper</h2>
        <h1>BUILD YOUR DREAM MOBILE APPLICATION</h1>
        <p>iOS, Android & Hybrid</p> 
        <Link to="/contact"  className='btn'>REQUEST A PROPOSAL</Link>
    </div>
    <div className="software-sec-2">
      <div className="software-div">
      <img src={require('../component/images/android-1.jpg')} alt="android-1.jpg" />
      </div>
      <div className="software-div">
        <h3>Digital Whopper</h3>
        <h2>BUILD NEXT-GENERATION iOS, Android & Hybrid APPLICATIONS</h2>
        <p><strong>We are thrilled to extend our proficiency in designing bespoke mobile applications that are both resilient and user-friendly. Our software developers are dedicated to constructing mobile apps that are future-proof and secure, aligning with your evolving business needs.</strong></p>
        <p>We specialize in crafting robust and scalable mobile applications, both native and cross-platform, delivering immersive user experiences. Our aim is to set new benchmarks in this mobile-first era, earning the trust of your target audience while creating fresh revenue streams for your business.</p>
        <Link to="/contact" className='btn'>CONSULT OUR TEAM</Link>
      </div>
    </div>
    <div className="software-service my-3">
      <h6>Services we Provide</h6>
      <h5>OUR MOBILE APPLICATION SERVICES</h5>
      <div className="android-services">
        <div class="grid-item">
         
          <h2>Custom Apps</h2>
          <p>We create web portals as well as enterprise portals. Our web portals offer the best of performance, cost-efficiency and growth potential. Our enterprise-level deployments use productive intranets, extranets and engagement workplaces.</p>
        </div>
        <div class="grid-item">
         
          <h2>Native & Hybrid Apps</h2>
          <p>We partner up with you in maintaining web applications either developed by us or by third-party vendors. Whether it’s fixing bugs or adding new functionality, We also document and provide support for all your future needs.</p>
        </div>
        <div class="grid-item">
        
          <h2>UI/UX Design</h2>
          <p>We create websites with easy navigation, robust information architecture, visual cues for users, and action-oriented design.Our services include domain name registration, Content development and management system, navigation design, programming, User interface designing and much more.</p>
        </div>
        <div class="grid-item">
          <h2>App Maintenance & Support</h2>
          <p>Our services include domain name registration, Content development and management system, navigation design, programming, User interface designing and much more. Our websites work wonderfully, regardless of the screen size or resolution.</p>
        </div> 

      </div>
    </div>
    <div className="software-sec-5">
      <div className="software-why-choose">
        <h2>Reliable Partner To Build Your Mobile Apps</h2>
        <ul>
          <li>We use the latest technology or version of software to develop a unique website.</li>
          <li>Our web development team works hard to give 100% satisfaction to our clients.</li>
          <li>We have a certified and experienced team of web app developers.</li>
          <li>We offer complete transparency and support to our clients.</li>
          <li> We develop your website at a reasonable cost.</li>
          <li>We also give further support to our clients.</li>
        </ul>
      </div>
      <div className="software-why-choose">
      <img src={require('../component/images/android-why.jpeg')} alt="software-develop.png" />
      </div>
    </div>
    <div className="software-sec-6">
          <h2>Launch your app like a rocket</h2>
          <p>We will partner with you to take your vision of mobile app to reality.</p>
          <Link to="/contact" className='btn'>CONNECT WITH US TODAY</Link>
    </div>
        
    </>
  )
}

export default Android