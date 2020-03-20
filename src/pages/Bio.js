import React from 'react'
import {
   Link
} from "react-router-dom";

function Bio() {
   return (
      <div className='flex h-screen w-screen justify-center align-middle items-center bg-orange-400'>
         <Link to='/'>landingPage</Link>
         <Link to='#'>resume</Link>
      </div>
   )
}

export default Bio
