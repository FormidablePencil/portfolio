import React from 'react'
import Card from './Card'
import someImage from '../assets/A-Detailed-Guide-to-Start-with-iPhone-or-iPad-App-Development.jpg'

function ShowcaseProjectsComp() {
   return (
      <div className='container mx-auto flex flex-row flex-wrap'>
         <Card title={'Pao '} briefDescription={'memorization training'} whatImg={someImage} />
         <Card title={'Pao System'} briefDescription={'memorization training'} whatImg={someImage} />
         <Card title={'Pao System'} briefDescription={'memorization training'} whatImg={someImage} />
         <Card title={'Pao System'} briefDescription={'memorization training'} whatImg={someImage} />
         <Card title={'Pao System'} briefDescription={'memorization training'} whatImg={someImage} />
         <Card title={'Pao System'} briefDescription={'memorization training'} whatImg={someImage} />
      </div>
   )
}

export default ShowcaseProjectsComp
