import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import psychic from '../assets/A-Detailed-Guide-to-Start-with-iPhone-or-iPad-App-Development.jpg'
import normal from '../assets/isometric-mobile-development-illustration-vector-id1010016042.jpg.800x600_q96.png'
import ice from '../assets/mobile-app-development-technologies.png'

function CarouselComp() {
   return (
      <div className='h-screen bg-gray-700 w-screen carouselGradient relative'>
         <Carousel className='h-64 h-screen'
            showStatus={false}
            transitionTime={2000}
            interval={500010000}
            stopOnHover={true}
            infiniteLoop={true} showThumbs={false} showArrows={false} autoPlay={true}>
            <CarouselItem whatSlide={0}>
               <span className='w-64 mx-4'> <img src={normal} alt='' /> </span>
            </CarouselItem>
            <CarouselItem whatSlide={1}>
               <span className='w-64 mx-4'> <img src={psychic} alt='' /> </span>
            </CarouselItem>
            <CarouselItem whatSlide={2}>
               <span className='w-64 mx-4'> <img src={ice} alt='' /> </span>
            </CarouselItem>
         </Carousel>
      </div>
   )
}
const CarouselItem = (props) => {
   const linearGradient = [
      'carouselGradient1',
      'carouselGradient2',
      'carouselGradient3',
   ]
   const changeGradientColorDynamically = `h-screen flex flex-row bg-transparent ${linearGradient[props.whatSlide]}`
   return (
      <div className={changeGradientColorDynamically}>
         <div className='flex-1 bg-transparent flex items-center justify-end'>
            <p className="mx-4">{props.description}</p>
            <p className="mx-4">{props.title}</p>
         </div>
         <div className='flex-1 bg-transparent flex items-center justify-start'>
            {props.children}
         </div>
      </div>
   )
}

export default CarouselComp
