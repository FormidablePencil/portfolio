import React from 'react'
import roseVar1 from '../assets/roses/Transparent_Beautiful_Red_Rose_PNG_Picture.png'
import roseVar2 from '../assets/roses/rose2variation.png'
import roseVar3 from '../assets/roses/rose3variation.png'
import roseVar4 from '../assets/roses/rose4variation.png'

function RosesDecor() {
  return (
    <div className='roses-container'>
      <img className='roseImg rose1' src={roseVar1} alt='' />
      {/* <img className='roseImg rose2' src={roseVar4} alt='' /> */}
      <img className='roseImg rose3' src={roseVar2} alt='' />
      <img className='roseImg rose4' src={roseVar3} alt='' />
    </div>
  )
}

export default RosesDecor
