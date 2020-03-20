import React from 'react'
import CardAbilities from './CardAbilities'

const Abilities = () => {
   return (
      <div className='my-24'>
         {/* when clicked on these cards it'll bring up a page the defines the technology, I describe how I learned and used it and suggest what projects to see for deminstration. */}
         <div className='flex flex-row w-full justify-center'>
            <CardAbilities
               h1='html css and javascript' />
            <CardAbilities
               h1='Tailwind ~Css frameWork' />
            <CardAbilities
               h1="React ~web development framework" />
            <CardAbilities
               h1='React Native'
               info='Mobile Development' />
         </div>
         <div className='flex flex-row w-full justify-center'>
            <CardAbilities
               h1='Gatsby React'
               info='Static Web...' />
            <CardAbilities
               h1='Node.js' />
            <CardAbilities
               h1='Express'
               info='backend framework' />
            <CardAbilities
               h1='MongoDb'
               info='database' />
         </div>
      </div>
   )
}

export default Abilities
