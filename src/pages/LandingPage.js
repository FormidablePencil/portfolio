import React from 'react'
import NavbarComp from '../components/NavbarComps/NavbarComp'
import CarouselComp from '../components/CarouselComp'
import ShowcaseProjectsComp from '../components/ShowcaseProjectsComp'
import BioSectionComp from '../components/BioSectionComp'
import styled from 'styled-components'

function LandingPage() {
   return (
      <div className="">
         <NavbarComp />
         <CarouselComp />
         <div className="bg-gray-200 h-12 "></div>
         <h1 className='text-3xl p-10'>Projects</h1>
         <ShowcaseProjectsComp />
         <div className="bg-gray-200 h-12 mt-24"></div>
         <BioSectionComp />
         {/* <InfoComp /> */}
      </div>
   )
}

export default LandingPage
