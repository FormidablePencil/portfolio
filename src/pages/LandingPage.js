import React from 'react'
import NavbarComp from '../components/NavbarComp'
import CarouselComp from '../components/CarouselComp'
import ShowcaseProjectsComp from '../components/ShowcaseProjectsComp'
import BioSectionComp from '../components/BioSectionComp'
import styled from 'styled-components'

function LandingPage() {
   return (
      <div className="flex flex-col relative">
         <NavbarComp />
         <CarouselComp />
         <div className="bg-gray-200 h-12 "></div>
         <RelativeTag className=''>Projects</RelativeTag>
         <p className="text-red-700">onhover make them pop</p>
         <ShowcaseProjectsComp />
         <div className="bg-gray-200 h-12 mt-24"></div>
         <BioSectionComp />
         {/* <InfoComp /> */}
      </div>
   )
}

export default LandingPage

export const RelativeTag = styled.p`
   padding: 35px
`; 