import React from 'react'
import someImage from '../assets/normal.jpg'
import { Link } from 'react-router-dom'
const CardAbilities = ({ h1, info }) => {
   return (
      <Link to='/webdevtechnoœlogies'>
         <div
            onClick={() => console.log('redirect to abilities page')}
            className='zoom bg-white rounded-lg flex-1 h-64 m-4 p-6 flex flex-col items-center justify-evenly text-center'>
            <h1>{h1}</h1>
            <p className='text-red-800'>{info}</p>
            <img alt='' src={someImage} />
         </div>
      </Link>
   )
}

export default CardAbilities
