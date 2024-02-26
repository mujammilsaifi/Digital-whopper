import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const ClientLogoSlider = () => {
  return (
    <Carousel autoPlay={true}  infiniteLoop={true} showArrows={true} showThumbs={false} interval={3000} stopOnHover={false}>
                <div>
                <img src={require('./images/client logo-1.png')} alt="client-logo-growth" />
                   
                </div>
                <div>
                <img src={require('./images/client logo-2.png')} alt="client-logo-growth" />  
                </div>
               
    </Carousel>
  )
}

export default ClientLogoSlider