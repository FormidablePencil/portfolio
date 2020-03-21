import React from 'react'
import NavbarComp from '../components/NavbarComps/NavbarComp'

const ShowcaseProjectPage = () => {
   return (
      <div className='bg-indigo-100 h-screen flex'>
         <NavbarComp />
         <div className="bg-green-400 flex-1 flex items-center">projectShowcase textually</div>
         <div className="bg-green-200 flex-1 flex items-center">projectShowcase visually</div>
      </div>
   )
}

export default ShowcaseProjectPage
