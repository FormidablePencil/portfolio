import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ title, briefDescription, whatImg }) => {
   return (
      <Link to='project' className='w-1/3'>
         <div className="zoom my-3 mx-3 bg-white rounded-lg shadow-lg flex">
            <div className='flex-col'>
               <p>{title}</p>
               <p>{briefDescription}</p>
            </div>
            <div className=''>
               <img alt='' src={whatImg} />
            </div>
         </div>
      </Link>
   )
}

export default Card
