import React from 'react'
import Story from '../components/Story'
import Abilities from './Abilities'

function BioSectionComp() {
   return (
      <div className='colorGradient'>
         <div className='container mx-auto justify-center flex flex-col items-center py-24'>
            <Story />
            <Abilities />
         </div>
      </div>
   )
}

export default BioSectionComp
