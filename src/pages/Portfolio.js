import React from 'react'
import '../component/style/portfolio.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
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
const Portfolio = () => {
  return (
    <div className='portfolio'>
      <div className="contact-t1">
        <h1>DIGITAL WHOOPER</h1>
        <h2>OUR WORKING PORTFOLIO</h2>
      </div>
      
      <section className='section'>
        <div className="ourwork">
          <h2>Have a look at our Web Development Work... </h2>
          
        </div>
            {/* for desktop section*/}

            <Carousel responsive={responsive} infinite={true} autoPlaySpeed={3000} autoPlay={true}>
              <div className='image-item'><Link to="https://jaipurmoorti.in/" target="_blank"><img style={{height:'400px', width:'100%'}} src={require('../component/images/work-jaipurmurti.png')} alt="software-develop.png" /></Link></div>

              <div className='image-item'><Link to="https://houseofkurtis.in/" target="_blank"><img style={{height:'400px', width:'100%'}} src={require('../component/images/work-2.png')} alt="software-develop.png" /></Link></div>

              <div className='image-item'><Link to="https://mariaross.in/" target="_blank"><img style={{height:'400px', width:'100%'}}   src={require('../component/images/work-3.png')} alt="software-develop.png" /></Link></div>

              <div className='image-item'><Link to="https://kgftourandtravels.com/" target="_blank"><img style={{height:'400px', width:'100%'}}  src={require('../component/images/work-4.png')} alt="software-develop.png" /></Link></div>

              <div className='image-item'><Link to="https://sahuchaiwala.com/" target="_blank"><img style={{height:'400px', width:'100%'}}  src={require('../component/images/work-5.png')} alt="software-develop.png" /></Link></div>
            </Carousel>
        </section>
        <section className='section'>
        <div className="ourwork">
        <h2>Have a look at our Social Marketing Work... </h2>
        </div>
          
        <Carousel responsive={responsive} infinite={true} autoPlaySpeed={3000} autoPlay={true}>
              <div className='image-item'>
                <Link to="/portfolio"><img  src={require('../component/images/socal-work-1.png')} alt="software-develop.png" /></Link> </div>
              <div className='image-item'><Link to="/portfolio"><img  src={require('../component/images/socal-work-2.png')} alt="software-develop.png" /></Link></div>
              <div className='image-item'><Link to="/portfolio"><img   src={require('../component/images/socal-work-3.png')} alt="software-develop.png" /></Link></div>
              <div className='image-item'><Link to="/portfolio"><img  src={require('../component/images/socal-work-4.png')} alt="software-develop.png" /></Link></div>
              <div className='image-item'><Link to="/portfolio"><img  src={require('../component/images/socal-work-5.png')} alt="software-develop.png" /></Link></div>
              <div className='image-item'><Link to="/portfolio"><img  src={require('../component/images/socal-work-6.png')} alt="software-develop.png" /></Link></div>
              <div className='image-item'><Link to="/portfolio"><img  src={require('../component/images/socal-work-7.png')} alt="software-develop.png" /></Link></div>
            </Carousel>
        </section>
        
        
        
    </div>
  )
}

export default Portfolio