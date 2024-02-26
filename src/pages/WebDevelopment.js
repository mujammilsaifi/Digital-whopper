import React from 'react'
import '../component/style/webdevelopment.css'
import { Link } from 'react-router-dom'
const WebDevelopment = () => {
  return (
    <>
        <div className="web-sec-1">
            <h3>Digital Whopper</h3>
            <h2>Best Web & Website Development Company</h2>
            <p>Transformation is possible with us…</p>
            <Link to="/contact" className='btn'>CALL US</Link>
        </div>
        <div className="web-sec-2">
            <div className="div-sec-1">
                <h2>Transform With Technology</h2>
                <p><strong>Digital Whopper stands as a leading and top-tier web development company, consistently delivering exceptional results and high-quality websites to clients through the utilization of cutting-edge technology. Our extensive service portfolio in software development includes web application design, web-based enterprise solutions, e-commerce website development, and e-portal creation.</strong></p>
                <Link to="/contact" className='btn'>GET DIGITALLY TRANSFORM!</Link>
            </div>
            <div className="div-sec-2">
            <img src={require('../component/images/web-img.jpg')} alt="website" />
            </div>
        </div>
        <div className="technology">
            <h3>Digital Whopper</h3>
            <h2>Our Web Application Development Services</h2>
            <p>In the global web development era, The Digital Whopper is one of the leading Website Application Development Company</p>
            
            <div className="tech-1">
                <div className="tech-div">
                <img src={require('../component/images/wordpress-img.jpg')} alt="wordpress" />
                </div>
                <div className="tech-div">
                    <h2>WordPress Website</h2>
                    <p>WordPress, a free and open-source platform, is the foundation of our website creation services. Our skilled web developers possess extensive expertise in WordPress, crafting distinct websites that prioritize control, security, and exceptional performance. We provide scalable, aesthetically pleasing WordPress solutions that enhance your business's reputation at an affordable cost. Our WordPress website development services are characterized by quality and swift delivery.</p>
                    <div className="work">
                        <h4>Our Work</h4>
                        <a href="https://medastudio.com/" rel="noreferrer" target="_blank">www.medastudio.com</a> <br />
                        <a href="https://mariaross.in/" rel="noreferrer" target="_blank">www.mariaross.in</a><br />
                        <a href="https://www.ingridblachaphotography.com/" rel="noreferrer" target="_blank">www.ingridblachaphotography.com</a>
                    </div>
                </div>
            </div>
           
            <div className="tech-1">
                <div className="tech-div">
                    <h2>MERN Stack Application</h2>
                    <p>MERN stack is a software stack that includes four open-source technologies: (MongoDB, Express.js, React, and Nodejs). These components provide an end-to-end framework for building dynamic web sites and web applications.     Among these technologies MongoDB is a database system, Node.js is a server-side runtime environment, Express.js is a web framework for Node.js and React is a client-side JavaScript library used for building user interfaces.</p>
                    <div className="work">
                        <h4>Our Work</h4>
                        <a href="https://www.buddyloan.com/" rel="noreferrer" target="_blank">www.buddyloan.com</a> <br />
                        <a href="https://jccaindia.com/" rel="noreferrer" target="_blank">www.jccaindia.com</a> <br />
                        <a href="https://nesglobal.in/" rel="noreferrer" target="_blank">www.nesglobal.in</a>
                    </div>
                </div>
                <div className="tech-div">
                <img src={require('../component/images/mern-stack.jpg')} alt="mern-stack" />
                </div>
            </div>
            <div className="tech-1">
                <div className="tech-div">
                <img src={require('../component/images/php-img.jpg')} alt="php" />
                </div>
                <div className="tech-div">
                    <h2>PHP Developemnt</h2>
                    <p>PHP (Hypertext Preprocessor) is a popular server-side scripting language primarily used for web development. It excels in creating dynamic and interactive web applications by embedding code within HTML files. PHP is known for its wide support across various web servers and operating systems, making it highly versatile. It's also well-suited for database integration, particularly with MySQL, thanks to its native support.</p>
                    <div className="work">
                        <h4>Our Work</h4>
                        <a href="https://yaharaho.com/" rel="noreferrer" target="_blank">www.yaharaho.com</a> <br />
                        <a href="http://Apolloplywood.com" rel="noreferrer" target="_blank">www.Apolloplywood.com</a> <br />
                        <a href="http://Fundamental.in" rel="noreferrer" target="_blank">www.Fundamental.in</a> <br />
                    </div>
                </div>
            </div>
            <div className="tech-1">
                <div className="tech-div">
                    <h2>Django Development</h2>
                    <p>Django is a high-level Python web framework known for its simplicity and robustness in web development. It follows the Model-View-Controller (MVC) architectural pattern, which encourages clean and maintainable code.Django promotes rapid development with its "batteries-included" philosophy, allowing developers to focus on building unique web applications rather than reinventing the wheel.</p>
                    <div className="work">
                        <h4>Our Work</h4>
                        <a href="https://jccaindia.com/" rel="noreferrer" target="_blank">www.jccaindia.com</a> <br />
                        
                    </div>
                    
                </div>
                <div className="tech-div">
                <img src={require('../component/images/django-img.jpg')} alt="django" />
                </div>
            </div>
           
            <div className="tech-1">
                <div className="tech-div">
                <img src={require('../component/images/shopify.jpg')} alt="tech" />
                </div>
                <div className="tech-div">
                    <h2>Shopify</h2>
                    <p>Shopify is a popular e-commerce platform that allows businesses to set up and manage online stores. It provides a range of tools and services to help entrepreneurs and businesses sell products and services online. Here are some key features and aspects of Shopify.</p>
                    <div className="work">
                        <h4>Our Work</h4>
                        <a href="https://" rel="noreferrer" target="_blank">www.minalmodi.com</a> <br />
                    </div>
                </div>
            </div>
            <div className="tech-1">
                <div className="tech-div">
                    <h2>.Net Technologies</h2>
                    <p>.NET is an open-source platform for building desktop, web, and mobile applications that can run natively on any operating system. The . NET system includes tools, libraries, and languages that support modern, scalable, and high-performance software development.</p>
                    <div className="work">
                        <h4>Our Work</h4>
                       
                    </div>
                    
                </div>
                <div className="tech-div">
                <img src={require('../component/images/netDev.jpg')} alt=".net" />
                </div>
            </div>
            
            <Link to="/contact" className='btn'>LET'S CONNECT</Link>
        </div>
    </>
  )
}

export default WebDevelopment