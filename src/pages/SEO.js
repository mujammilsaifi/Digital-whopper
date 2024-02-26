import React from 'react'
import '../component/style/seo.css'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'


const SEO = () => {
  return (
    <>
    <Helmet>
        <title>Best SEO Company In Jaipur | SEO Services Provider - Digitalwhopper</title>
        <meta name="description" content="Meta Description	DigitalWhopper is a leading SEO company in Jaipur, India. We have a professional team of SEO experts who provide the best SEO services. Contact us today to hire a top SEO Agency." />
        <meta name="keywords" content="SEO Company in Jaipur,Best SEO Service Provider in Jaipur,SEO services in Jaipur,SEO service in Jaipur "></meta>
      </Helmet>
    <div className="sec">
        
    </div>
        <div className="seo-sec-1"> 
        <h2>At the end of the day, every journey begins with a quest.</h2>
        <img src={require('../component/images/seo-img.png')} alt="success" />
        <h3>Boost Your Organic Search Rankings with the Leading SEO Firm"</h3>
        <ul>
            <li>98% Positive Reviews</li>
            <li>Tailored SEO Approaches</li>
            <li>SEO Company Focused on ROI</li>
            <li>Clear and Transparent Reporting</li>
            <li>Specialized in Local SEO</li>
            <li>Thorough Competitor Analysis</li>
        </ul>        
        <Link to="/contact" className='btn'>GET A FREE SEO CONSULTATION</Link>
    </div>
    <div className="seo-sec-2">
        <h2>Why Engage a Jaipur-based SEO Firm to Enhance Your Organic Website Traffic?</h2>
        <div className='div-seo'>
            <img src={require('../component/images/seo.png')} alt="success" />
            <p>Approximately 53% of Google Search Traffic is directed to websites that have achieved organic rankings.</p>
        </div>
        <div className='div-seo'>
            <img src={require('../component/images/growth.png')} alt="success" />
            <p>Search engines generate three times as much website traffic as social media platforms.</p>
        </div>
        <div className='div-seo'>
            <img src={require('../component/images/search.png')} alt="success" />
            <p>Compared to other sources of traffic, organic users exhibit a greater level of intent and conversion rate.</p>
        </div>
        <div className='div-seo'>
            <img src={require('../component/images/analysis.png')} alt="success" />
            <p>Finally, it's worth noting that organic traffic comes at no cost.</p>
        </div>
        <h2>Types of SEO We Provide as the Best SEO Company </h2>
    </div>
    <div className="seo-sec-3">
        <div className="type-seo-1">
            <div className="type-seo-h">
                <h3>Technical SEO</h3>
            </div>
            
        </div>
        <div className="type-seo-1">
            <div className="type-seo-h">
                <h3>Local SEO</h3>
            </div>
            
        </div>
        <div className="type-seo-1">
            <div className="type-seo-h">
                <h3>International SEO</h3>
            </div>
            
        </div>
        <div className="type-seo-1">
            <div className="type-seo-h">
                <h3>E-Commerce SEO</h3>
            </div>
            
        </div>
        <div className="type-seo-1">
            <div className="type-seo-h">
                <h3>On Page SEO</h3>
            </div>
            
        </div>
        <div className="type-seo-1">
            <div className="type-seo-h">
                <h3>OFF Page SEO</h3>
            </div>
            
        </div>
    </div>
    <div className="seo-sec-4">
        <h2>Digital Whopper Best SEO Company </h2>
        <p>At The Digital Whopper, we take great pride in our reputation as the leading SEO firm, offering exceptional SEO services at competitive rates. With a dedicated team of seasoned SEO specialists.</p>
        <h3>Why Choose Digital Whopper for Your SEO Needs?</h3>
        <h6>1.Cost-Effective Organic SEO Solutions:</h6>
        <p>We provide budget-friendly SEO solutions customized for Indian businesses, delivering outstanding outcomes without straining your budget.</p>
        <h6>2.Moral SEO Techniques:</h6>
        <p>Our SEO services, which are entirely based on ethical principles, contribute positively to your business, ensuring sustained success and bolstering your credibility.</p>
        <h6>3.Proficient SEO Team:</h6>
        <p>Our adept and innovative SEO team excels in content marketing, skillfully optimizing your website's content to be search engine-friendly.</p>
    </div>

    </>
  )
}

export default SEO