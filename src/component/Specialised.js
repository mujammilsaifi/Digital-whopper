import React from 'react'
import "./style/specialised.css"; 
const Specialised = () => {
  return (
    <div className="container">
        <p className='specilised-p'>Exploring Our Diverse Portfolio of Digital Marketing Success Stories</p>
        <h2 className='t-2'>Specializations at Our Digital Marketing Company</h2>
        <div className="box">
            <div className='child-box'>
            <img src={require('./images/hand-in-hand.png')} alt="health" />
                <h2>Wedding</h2>
            </div>
            <div className='child-box'>
            <img src={require('./images/shoppings .png')} alt="health" />
                <h2>E-commerce</h2>
            </div>
            <div className='child-box'>
            <img src={require('./images/hotel.png')} alt="health" />
                <h2>Hospitality</h2>
            </div>
            <div className='child-box'>
            <img src={require('./images/school.png')} alt="health" />
                <h2>Education</h2>
            </div>
            <div className='child-box'>
            <img src={require('./images/heart-attack (1).png')} alt="health" />
                <h2>Health Care</h2>
            </div>
            <div className='child-box'>
            <img src={require('./images/jewelry.png')} alt="health" />
                <h2>Jewellery</h2>
            </div>
            <div className='child-box'>
            <img src={require('./images/fashion (2).png')} alt="health" />
                <h2>Clothing</h2>
            </div>
            <div className='child-box'>
            <img src={require('./images/urban.png')} alt="health" />
                <h2>Real-Estate</h2>
            </div>
            <div className='child-box'>
            <img src={require('./images/treadmill (1).png')} alt="health" />
                <h2>GYM</h2>
            </div>
            <div className='child-box'>
                <img src={require('./images/cafe.png')} alt="health" />
                <h2>Cafe</h2>
            </div>
            <div className='child-box'>
                <img src={require('./images/console (1).png')} alt="health" />
                <h2>Gamming</h2>
            </div>
            <div className='child-box'>
                <img src={require('./images/skincare.png')} alt="health" />
                <h2>Cosmetics</h2>
            </div>
            
        </div>
    </div>
  )
}

export default Specialised