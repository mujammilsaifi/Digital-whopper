import React from 'react'
import "./style/hero.css";
const HeroSection = () => {
  return (
    <div className='hero'>
      <video id="video" autoPlay loop muted>
        <source src="/herosec.mp4" type="video/mp4" />
      </video>
      <div className="content-heading">
        <h2>Best Digital Marketing Company</h2>
      </div>
    </div> 
  )
}

export default HeroSection