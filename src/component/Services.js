import React from 'react'
import "./style/services.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const Services = () => {
  return (
    
    <div className='container' >
        <h3 className='t-1'>Unlock Success: Secure Jaipur's Premier Digital Marketing Team</h3>
        <h1 className='t-2'>Top Digital Marketing Agency in Jaipur</h1>
        <section className="faeture-col-par">
        <div className="container-service">
        <Link to="/social-media-marketing">            
            <div className="feature-col">      
              
            <img src={require('./images/socialmedia.gif')} alt="socialmedia.gif" />
                    <h3 className='service'>Social Media Marketing</h3>
                    <p> Over 80% of users are active on social media, making SMM powerful. Digital Whooper comprehends this and offers social media marketing services designed to effectively increase your business's online presence. </p>
                    <div className="go">     
                     <Link to="/social-media-marketing"><FontAwesomeIcon icon={faArrowAltCircleRight} /></Link>
                    </div>
                  
            </div>
            </Link>                      
            <Link to="/e-commerce-marketing">
            <div className="feature-col">    
                 
                    <img src={require('./images/ecommerce.gif')} alt="ecommerce" />        
                    <h3 className='service'>E-Commerce Excellence</h3>
                    <p>E-commerce is the future of digital marketing, and Digital Whooper provides top-notch solutions. Beyond the fundamentals, we offer competent third-party website optimization, dynamic social media product advertising.</p>
                    <div className="go">     
                     <Link to="/e-commerce-marketing"><FontAwesomeIcon icon={faArrowAltCircleRight} /></Link>
                    </div>
                                    
            </div>
            </Link>    
            <Link to="/seo"> 
            <div className="feature-col"> 
                            
                    <img src={require('./images/seo.gif')} alt="seo.gif" />
                    <h3 className='service'>Master SEO</h3>
                    <p>SEO, or search engine optimization, is the cornerstone of a successful digital footprint. Digital Whooper, Jaipur's top SEO company, optimizes websites using tested strategies. The increased visibility for niche-specific search.</p>
                    <div className="go">     
                     <Link to="/seo"><FontAwesomeIcon icon={faArrowAltCircleRight} /></Link>
                    </div>
                                      
            </div>
            </Link>   
            <Link to="/web-development">
            <div className="feature-col"> 
                             
                <img src={require('./images/web.gif')} alt="web.gif" />
                    <h3 className='service'>Web Development</h3>
                    <p>Potential clients generally first encounter your business on your website. Digital Whooper creates unforgettable digital experiences. Our team of web developers is known for creating responsive websites that are both aesthetically pleasing and functional.</p>
                    <div className="go">     
                     <Link to="/web-development"><FontAwesomeIcon icon={faArrowAltCircleRight} /></Link>
                    </div>      
                                                 
            </div>
            </Link>   
            <Link to="/mobile-app-development">        
            <div className="feature-col"> 
                         
                <img src={require('./images/android.gif')} alt="android.gif" />
                    <h3 className='service'>Android Development</h3>
                    <p> Our Android Development Expertise. Our Android Development services are crafted to transform your innovative app ideas into reality. We specialize in creating dynamic and user-friendly Android applications that cater to your unique needs. </p>
                    <div className="go">     
                     <Link to="/mobile-app-development"><FontAwesomeIcon icon={faArrowAltCircleRight} /></Link>
                    </div>   
                                        
            </div>
            </Link>           
            <Link to="/software-developemnt">   
            <div className="feature-col">  
                         
                <img src={require('./images/software-development.gif')} alt="software-development.gif" />
                    <h3 className='service'>Software Development</h3>
                    <p> At Digital Whooper, we take pride in our ability to transform complex concepts into cutting-edge software solutions. Our seasoned team of developers specializes in creating tailored software applications that not only meet but exceed your business requirements.</p>
                    <div className="go">     
                     <Link to="/software-developemnt"><FontAwesomeIcon icon={faArrowAltCircleRight} /></Link>
                    </div>       
                                             
            </div>
            </Link> 
            <Link to="ppc-marketing"> 
            <div className="feature-col">  
                           
                <img src={require('./images/google ad.gif')} alt="google ad.gif" />
                    <h3 className='service'>Google Ads</h3>
                    <p>Google Ads powers targeted, results-driven advertising. Digital Whooper builds and manages effective Google Ads campaigns that reach the appropriate audience at the right time. To maximize efficacy, our qualified specialists optimize your ads and research keywords. 
                    </p>
                    <div className="go">     
                     <Link to="ppc-marketing"><FontAwesomeIcon icon={faArrowAltCircleRight} /></Link>
                    </div> 
                                                    
            </div>
            </Link>   
            <Link to="ppc-marketing"> 
            <div className="feature-col">  
                             
                <img src={require('./images/etsy.gif')} alt="etsy.gif" />
                    <h3 className='service'>Etsy</h3>
                    <p>Successfully selling on Etsy is difficult for handmade enterprises. The Etsy services provided by Digital Whooper can help you grow your business to new heights. We optimize your Etsy shop's product listings, SEO, and promotions. Increase your shop's visibility, organic traffic, and conversion rates.</p>
                    <div className="go">     
                     <Link to="/ppc-marketing"><FontAwesomeIcon icon={faArrowAltCircleRight} /></Link>
                    </div> 
                                                    
            </div>
            </Link>   
            <Link to="ppc-marketing"> 
            <div className="feature-col"> 
                              
                <img src={require('./images/meta ads.gif')} alt="meta ads.gif" />
                    <h3 className='service'>Meta Ads</h3>
                    <p>Navigating the Dynamic Landscape For clients to maximize meta (previously Facebook) advertising, Digital Whooper's Meta Ads services are meticulously built. To increase revenue, internet traffic, or customer base, Digital Whooper's Meta Ads services are customized to your needs.</p>
                    <div className="go">     
                     <Link to="/ppc-marketing"><FontAwesomeIcon icon={faArrowAltCircleRight} /></Link>
                    </div> 
                                                  
            </div>
            </Link>   
        </div>        
        </section>
        <div className=" center">
            <Link className='btn' to="/contact">CONSULT OUR TEAM</Link>
         </div>  
  </div>
  )
}

export default Services