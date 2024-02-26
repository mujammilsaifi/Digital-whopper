import React from 'react'
import "./style/secondSection.css";
import ContactForm from './ContactForm';
const SecondSection = () => {
  return (
    <>
    <div className="Parent ">
        <div className="child1">
            <div className="container">
                <h1 className='heading2'>Fueling your brand's digital evolution</h1>
                <p>A successful online presence is essential for companies to compete in today's dynamic digital world. Here's where our top-notch digital marketing services can make a world of difference. When considering the many digital marketing agencies in Jaipur, Digital Whooper stands out as one of the best because of the variety and depth of the services it provides. Digital Whooper is your ticket to the digital world, owing to our extensive experience and skilled staff.</p>
                
            </div>
        </div>
        <div className="child2">
        <div className="contact_us">
        <ContactForm/>
      </div>
      </div>
  </div>
  </>
  )
}

export default SecondSection