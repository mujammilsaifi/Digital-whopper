import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
const GetStarted = () => {
  return (
    <>
    <div className='get-started'> 
        <h2 className='get-t1'>Elevate Your Business with the Premier Digital Marketing Agency</h2>
        <p className='get-t2'>Supercharge Your Business with a Dynamic Digital Marketing Strategy in Jaipur</p>
        <div className=" center">
            <Link className='btn' to="/contact">GET STARTED</Link>
         </div> 
    </div>
    <div className="flex-container my-4">
    <div className="flex-left">
        <div className="success-growth">
        <img src={require('./images/success-first.jpg')} alt="growth.webp" />
        </div>
    </div>
    <div className="flex-right">
       <div className="objective">
       <h2>What Makes Us a Trustworthy Digital Marketing Company in Jaipur?</h2>
       <ul>
        <li> <span className='list-text'> We reshape your digital footprint with captivating business content.</span></li>
        <li> <span className='list-text'> Amplify your social media presence for lasting impressions.</span></li>
        <li><span className='list-text'> Your growth partner, driving profits and success together.</span></li>
        <li><span className='list-text'> Partnering to Accelerate Business Growth and Maximize Profitability</span></li>
        <li> <span className='list-text'> Tailoring exceptional solutions to exceed your expectations.</span></li>
       </ul>
       </div>
    </div>
    </div>
    </>
  )
}

export default GetStarted