import React from 'react'
import "./style/ourStrategy.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientLogoSlider from './ClientLogoSlider';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const OurStrategy = () => {
  return (
    <>
    <div className='our-strategy'>
        <h1 className='strategy-t1'>CRAFTING OUR DIGITAL MARKETING AGENCY'S STRATEGY</h1>
        <h3 className='strategy-t2' >Empowering Your Business: Our Growth Strategies in Action</h3> 
        <div className="strategy-img">
         <img src={require('./images/strategy1.png')} alt="strategy1.png" />
         <img src={require('./images/strategy2.png')} alt="strategy1.png" />
         <img src={require('./images/strategy3.png')} alt="strategy1.png" />
         <img src={require('./images/strategy4.png')} alt="strategy1.png" />
        </div>
    </div>
    <div className="our-client">
        <h3 className='client-t1'>OUR CLIENTS</h3>
        <h2 className='client-t2'>Preferred by Top Companies for Diverse Market Requirements</h2>
        <ClientLogoSlider/>
    </div>
    <div className="why-choose">
      <h2 className='t-2'>Why Choose Digital Whopper For Digital Marketing?</h2>
      <p > <strong>At Digital Whopper, our team includes certified digital marketing experts who possess a deep understanding of your business requirements. </strong></p>
      <div className="why-Parent">
        <div className="why-child1">
        <h3>Productivity</h3>
            <p>Our commitment to maintaining a high level of productivity has enabled us to offer cost-effective, quality services to our clients while consistently delivering projects ahead of schedule. We are deeply dedicated to delivering efficient solutions to our clients. As a digital marketing company in Jaipur, we specialize in producing efficient work that translates into tangible results.</p>
            <h3>Automation</h3>
            <p>We offer streamlined processes to enable clients to attain excellence in their critical operations. This also acquaints clients with our user-friendly interface. We formulate and design distinctive strategies to deliver top-tier digital marketing services to our Jaipur-based clients.</p>
            <h3>Framework</h3>
            <p>Our noteworthy projects are all based on a well-established, tried-and-true model, which we continuously refine and execute with precision. This model serves as the focal point for our critical posts. Our team operates in seamless coordination with one another. As a trusted digital marketing agency in Jaipur, we implement the Smart strategy when formulating our objectives.</p>
  
        </div>
        <div className="why-child2">
        <div className="grid-container">
            <div className="grid-item">
            <img src={require('./images/business-growth.png')} alt="success-growth" />
            <h3>High ROI</h3>
            </div>
            <div className="grid-item">
            <img src={require('./images/brand-image.png')} alt="success-growth" />
            <h3>Branding</h3>
            </div>
            <div className="grid-item">
            <img src={require('./images/best-customer-experience.png')} alt="success-growth" />
            <h3>Expertise</h3>
            </div>  
            <div className="grid-item">
            <img src={require('./images/handshake.png')} alt="success-growth" />
            <h3>All sizes business</h3>
            </div>
            <div className="grid-item">
            <img src={require('./images/result.png')} alt="success-growth" />
            <h3>Top Results</h3>
            </div>
            <div className="grid-item">
            <img src={require('./images/description.png')} alt="success-growth" />
            <h3>Market Analysis</h3>
            </div>  
          </div>
        </div>
    </div>
    </div>
    <div className="our-work-stats">
      <h2>Our Performance Metrics in Figures</h2>
      <div className="number-stats">
        <div className="num">
        <p>98% <span>Client Retention</span></p>
        </div>
        <div className="num">
        <p>4+ <span>Yrs of Experience</span></p>
        </div>
        <div className="num">
        <p>99% <span> ROI</span></p>
        </div>
        <div className="num">
        <p>98% <span>Satisfied Clients</span></p>
        </div>      
      </div>
    </div>

    

    <div className='container testimonial'>
       <h2>Testimonials</h2>
       <h3 >What Our Clients Say About Our Digital Whopper?</h3>
       <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={3000}  infinite={true}>
    <div className="testimonial-content">
        <img src={require('./images/Maria Ross.jpg')} alt="testimonial" />
        <div className="content-div">
           <p>Digital Whopper has transformed our marketing efforts organically and efficiently. Their expertise spans eCommerce, PPC, and social media marketing, driving remarkable growth in each area. With their keen insights and commitment to staying ahead of industry trends, Digital Whopper has become an invaluable partner in our success.</p></div>
            <h4><span className='dot'></span> MD Sallauddin
</h4> <h6>Maria Ross</h6> 
      </div>  
      <div className="testimonial-content"> 
          <img src={require('./images/SAHU.png')} alt="testimonial" />
          <div className="content-div">
          <p>Working with Digital Whopper has been an amazing experience for us. Their exceptional efforts, dedication and strategic approach have not only enhanced our online visibility but also have organically expanded our follower base, giving our brand a significant boost, and I'm truly impressed.</p>  </div><h4><span className='dot'></span> Sanjay Sahu</h4> <h6>Sahu Chai Wala</h6> 
        </div>
        <div className="testimonial-content"> 
          <img src={require('./images/manijaipur.jpg')} alt="testimonial" />
          <div className="content-div">
          <p>Digital Whopper's technical SEO expertise and data-driven PPC strategies have been game-changers for Mani Jaipur. Their optimization efforts elevated our search rankings, while their PPC campaigns delivered impressive ROI. I highly recommend Digital Whopper for their technical excellence and results-oriented approach.
</p> </div> <h4><span className='dot'></span> Mahak Sharma</h4> <h6>Mani Jaipur</h6> 
    </div>
    <div className="testimonial-content"> 
          <img src={require('./images/meda Leather.jpeg.jpg')} alt="testimonial" />
          <div className="content-div"><p>Our journey with Digital Whopper's social media ad campaigns has been truly remarkable. Thanks to their expertise in audience targeting, creative finesse, and data-driven insights, our brand's organic reach and engagement on social platforms have seen remarkable growth. 
</p>
           </div><h4><span className='dot'></span> Rishabh Goyal</h4> <h6>Meda Leather</h6> 
    </div>
    </Carousel>
    </div>
    </>
  )
}

export default OurStrategy