import React from 'react'
import '../component/style/ppcMarketing.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsersGear,faArrowUpRightDots,faGauge,faHandshake} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
const PPCmarketing = () => {
  return (
    <>
    <Helmet>
        <title>#1 PPC Company in Jaipur | Best PPC Services - DigitalWhopper</title>
        <meta name="description" content="DigitalWhopper is the Best PPC company in Jaipur, India provides Jaipur's top PPC Services for your business generates Leads, and drives traffic." />
        <meta name="keywords" content="Best PPC Company in Jaipur,PPC Agency Jaipur,Best PPC Services in Jaipur "></meta>
      </Helmet>
    <div className='social-media'>
        <h2>Digital Whopper</h2>
        <h1>We Engineer Paid Platforms for Customer Acquisition, Not Just Leads...</h1>
        <p>Digital Whopper is the leading PPC company in Jaipur, offering premium PPC services for your business to generate leads and drive traffic effectively.</p> 
        <Link to="/contact"  className='btn'>GET STARTED</Link>
    </div>
    <div className="ppc-sec-2 container">
        <h6>Best PPC Company in Jaipur | PPC Services</h6>
        <p>Are you aiming to boost your online presence and attract precise traffic to your enterprise? Your search ends here, as we are experts in providing exceptional PPC services in Jaipur.</p>
        <div className="ppc-service">
            <div className="ppc-service-div">
                <div className='ppc-service-icon'>
                    <FontAwesomeIcon icon={faUsersGear} />
                </div>
                <div className="ppc-text">
                    <h6>Over 35 million leads have already been generated through our PPC efforts.</h6>
                </div>
            </div>
            <div className="ppc-service-div">
                <div className='ppc-service-icon'>
                <FontAwesomeIcon icon={faArrowUpRightDots} />
                </div>
                <div className="ppc-text">
                    <h6>Enhanced Cost-Per-Lead (CPL) Efficiency by 40%</h6>
                </div>
            </div>
            <div className="ppc-service-div">
                <div className='ppc-service-icon'>
                <FontAwesomeIcon icon={faGauge} />
                </div>
                <div className="ppc-text">
                    <h6>Consistently Achieving an Average Conversion Growth of 120%</h6>
                </div>
            </div>
            <div className="ppc-service-div">
                <div className='ppc-service-icon'>
                <FontAwesomeIcon icon={faHandshake} />
                </div>
                <div className="ppc-text">
                    <h6>24x7 Client Support</h6>
                </div>
            </div>
        </div>
    </div>
    <div className="what-we-do">
        <h6>WHAT WE DO</h6>
        <h5>Unlocking PPC Excellence</h5>
        <div className="what-we-do-grid">
            <div class="grid-item">
            <img src={require('../component/images/display-ad.png')} alt="Display-Ads" />
               <h3>Display Ads</h3> 
               <p>Positioned at the pinnacle of search engine results pages are our targeted search ads, This approach results in elevated click-through rates and increased conversions.</p>
            </div>
            <div class="grid-item">
            <img src={require('../component/images/Remarketing-Campaigns.webp')} alt="Display-Ads" />
               <h3>Remarketing Campaigns</h3> 
               <p>We reestablish connections with individuals who have previously interacted with your website, rekindling relationships with past visitors. their awareness of your offerings, ultimately elevating conversion rates.</p>
            </div>
            <div class="grid-item">
            <img src={require('../component/images/Social Media Campaigns.jpg')} alt="Display-Ads" />
               <h3>Social Media Campaigns</h3> 
               <p> Our meticulously designed campaigns guarantee that your message is delivered to the appropriate individuals, elevating conversion rates by 95%, and amplifying your revenue.</p>
            </div>
            <div class="grid-item">
            <img src={require('../component/images/discoveryads1.jpg')} alt="Display-Ads" />
               <h3>Discovery Ads</h3> 
               <p>Google Discovery ads are visually captivating promotions displayed within the YouTube app, Google app, and Gmail app. Their purpose is to enhance the visibility of your offerings to potential audiences.</p>
            </div>
            <div class="grid-item">
            <img src={require('../component/images/Search Ads.jpg')} alt="Display-Ads" />
               <h3>Search Ads</h3> 
               <p>Our meticulously designed campaigns guarantee that your message reaches the right individuals,  leading to a 95% increase in conversion rates and a boost in your revenue.</p>
            </div>
            <div class="grid-item">
            <img src={require('../component/images/Local Based Ads.png')} alt="Display-Ads" />
               <h3>Local Based Ads</h3> 
               <p>Local advertising offers the advantage of targeting specific demographics precisely. By implementing localized campaigns, we guarantee that your business gains visibility among the local audience in your vicinity.</p>
            </div>
        </div>
    </div>
    <div className="benefits">
        <div className="benefits-div">
            <h2>Why Choose a PPC Agency for Your Business?</h2>
            <ul>
                <li>PPC Aids in Generating Traffic More Rapidly Than Organic Website Traffic.</li>
                <li>Approximately 95% of Paid Search Ad Clicks Are Estimated to Originate from Mobile Devices.</li>
                <li>Employing PPC Marketing is a Sound Strategy for Brand Promotion.</li>
                <li>Approximately 52% of Individuals Who Click on PPC Ads Proceed to Contact the Advertiser
                </li>
                <li>Research Indicates that a 0.1% Rise in Click-Through Rate (CTR) Leads to a 20% Reduction in Cost-Per-Click (CPC) on the Google Display Network.</li>
                <li>Algorithm Alterations Do Not Impact Pay-Per-Click (PPC) Advertising.</li>
                <li>You can initiate advertising for your products and services with just 100 INR</li>
            </ul>
        </div>
        <div className="benefits-div">
        <img src={require('../component/images/9019836.jpg')} alt="ppc-benefits" />
        </div>
    </div>

    </>
  )
}

export default PPCmarketing