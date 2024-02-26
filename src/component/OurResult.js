import React from 'react'
import "./style/ourResult.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'
const OurResult = () => {
  return (
    <div className=" marketing-result"> 
        <h2 className='result-t1'>Our Achievements in Digital Marketing</h2>
    <div className="container">
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">           
        <div className="carousel-inner">
            <div className="carousel-item active">                
            <div className="result">
                <div className="text">
                    <h2>01</h2>
                    <p>
                    <strong>Becoming a Digital Partner through Consulting for Critical Care </strong>
                    The Digital Marketing Evolution with Manglam Radiance, a Luxury Real Estate Marvel in Jaipur. Discover how we've redefined luxury living through strategic digital marketing innovation
                    </p>
                    
                </div>
                <div className="img-result">
                <img src={require('./images/achive-1 .png')} className="d-block w-100" alt="..."/>
                </div>
            </div>
            </div>
            <div className="carousel-item">
            <div className="result">
                <div className="text">
                    <h2>02</h2>
                    <p>
                    <strong>Expert Marketing and Consulting with Digital Whooper </strong>
                    Revolutionizing Customer Experiences and Cost Efficiency: A Multidisciplinary Approach through Internet Marketing and Digital Transformation.
                    </p>
                    
                </div>
                <div className="img-result">
                <img src={require('./images/achive-2.png')} className="d-block w-100" alt="..."/>
                </div>
            </div>
            </div>
            <div className="carousel-item">
            <div className="result">
                <div className="text">
                    <h2>03</h2>
                    <p>
                    <strong>Elevating Luxury Real Estate Projects with Expert Marketing and Business Development Consulting </strong>
                    Redefining Luxury Real Estate in India: Elevating Customer Experience through Digital Marketing and Evolution.
                    </p>
                   
                </div>
                <div className="img-result">
                <img src={require('./images/achive-3 .png')} className="d-block w-100" alt="..."/>
                </div>
            </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"><FontAwesomeIcon className='prev-icon' icon={faCircleArrowLeft} /></span><span className="visually-hidden">Previous</span>
            
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"><FontAwesomeIcon className='next-icon' icon={faCircleArrowRight} /></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
        </div>
    </div>
  )
}

export default OurResult