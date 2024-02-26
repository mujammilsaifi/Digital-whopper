import React from 'react'
import '../component/style/contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePhone} from '@fortawesome/free-solid-svg-icons'
import { faLocationDot} from '@fortawesome/free-solid-svg-icons'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import ContactForm from '../component/ContactForm'

const Contact = () => {
  return (
    <div className='contact-us'>
      <div className="contact-t1">
        <h1>Contact Us</h1>
        <h2>Unlock Your Digital Potential with Our Cutting-Edge IT Solutions</h2>
      </div>
      <div className="d-address">
        <div className="div">
          <span><FontAwesomeIcon icon={faSquarePhone} /></span>
          <h3>Call Us</h3>
          <p>+91-6200379161</p>
        </div>
        <div className="div">
          <span><FontAwesomeIcon icon={faLocationDot} /></span>
          <h3>Address</h3>
          <p>D5, Bharu Marg, Ashok Vihar, Nandpuri Colony, Malviya Nagar, Jaipur, Rajasthan 302017</p>
        </div>
        <div className="div">
          <span><FontAwesomeIcon icon={faEnvelope} /></span>
          <h3>Email</h3>
          <p>
            admin@digitalwhopper.com
          </p>
        </div>
      </div>
      
      <div className="contact-form">
      <div className="contact_us my-4">
          <ContactForm/>
                   
      </div>
      </div>
      
    </div>
  )
}

export default Contact