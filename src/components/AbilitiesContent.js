import React from 'react'
import someImage from '../assets/mobile-app-development-technologies.png'

const AbilitiesContent = () => {
   return (
      <div className='flex h-screen items-center bg-purple-100'>
         <div className="flex-1 bg-indigo-300 p-12">

            <h1 className='font-bold text-3xl'>excerpts</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sit, qui delectus expedita perferendis omnis sapiente, ad est culpa ex deserunt excepturi adipisci molestiae magnam corrupti voluptas rem. Dolore, blanditiis.</p>
         </div>
         <div className="flex-1 bg-indigo-600 p-12">
            <img alt='' src={someImage} />
            deminstrate and/or recommend where to find this being deminstrated.
            will be a video here.
         </div>
      </div>
   )
}

export default AbilitiesContent
