import React from 'react'
import { Link } from 'react-router-dom'; 
import "./style/blog.css";
const Blog = () => {
  return (
    <div className='container my-4'>
        <h3 className='faq-t1'>OUR BLOG</h3>
        <h2 className='faq-t2'>INFORMATION HUB</h2>
        <div className="row blog-row"> 
            <div className="card card-width" >
                <Link to="/The-Future-of-Digital-Marketing-Emerging-Trends-to-Watch">
                <img src={require('./images/blog1.jpg')} alt="success-growth" style={{height:'197px'}}/>
                <div className="card-body">
                    <Link to="/The-Future-of-Digital-Marketing-Emerging-Trends-to-Watch" className="category-btn">Author:DIGITAL WHOPPER</Link>
                    <h5 className="card-title">The Future of Digital Marketing: Emerging Trends to Watch</h5>
                    <p className="card-text">In the ever-evolving world of digital marketing, staying ahead of the curve ...</p>                    
                </div>
                </Link>
            </div>
            <div className="card card-width" >
            <Link to="/strategies-for-social-media-marketing-on-a-limited-budget">
                <img src={require('./images/blog2.webp')} alt="success-growth" style={{height:'197px'}}/>
                <div className="card-body">
                    <Link to="/digital-marketing" className="category-btn">Author:DIGITAL WHOPPER</Link>
                    <h5 className="card-title">Strategies for Social Media Marketing on a Limited Budget</h5>
                    <p className="card-text"> Social media marketing is an essential component…</p>                    
                </div>
                </Link>
            </div>
            <div className="card card-width" >
                <Link to="/how-to-create-lms-learning-management-system-from-scratch-a-complete-2024-guide">
                <img src={require('./images/blog-3.jpg')} alt="success-growth" style={{height:'197px'}} />
                <div className="card-body">
                    <Link to="/strategies-for-social-media-marketing-on-a-limited-budget" className="category-btn">Author:DIGITAL WHOPPER</Link>
                    <h5 className="card-title">How To Create LMS (Learning Management System) From Scratch: A Complete 2024 Guide</h5>
                    <p className="card-text">LMS Creation from Scratch: Training without a Learning Management System…</p>                    
                </div>
                </Link>
            </div>
            <div className="card card-width" >
                <Link to="/crafting-high-impact-ppc-campaigns-digital-marketing-success">
                <img src={require('./images/blog-4.jpg')} alt="success-growth" style={{height:'197px'}} />
                <div className="card-body">
                    <Link to="/scrafting-high-impact-ppc-campaigns-digital-marketing-successi" className="category-btn">Author:DIGITAL WHOPPER</Link>
                    <h5 className="card-title">Crafting High-Impact PPC Campaigns for Digital Marketing Success</h5>
                    <p className="card-text">digital marketing, a well-executed PPC (Pay-Per-Click) campaign can be…</p>                    
                </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Blog