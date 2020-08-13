import React from 'react'
import profile from '../assets/20190404_080008.jpg';

function BriefBio() {
  return (
    <div className='brief-bio-section'>
      <div>
        <p className='name'>Dennis Aleksandrov</p>
        {/* <div className="paragraphBox"> */}
          <p className='paragraph'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo ut eaque nisi porro velit, similique dicta nobis deserunt atque provident saepe, consequuntur soluta cum. Veritatis assumenda ullam possimus quidem harum?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo ut eaque nisi porro velit, similique dicta nobis deserunt atque provident saepe, consequuntur soluta cum. Veritatis assumenda ullam possimus quidem harum?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo ut eaque nisi porro velit, similique dicta nobis deserunt atque provident saepe, consequuntur soluta cum. Veritatis assumenda ullam possimus quidem harum?
          </p>
        {/* </div> */}
      </div>
      <div className='imgFrame'>
        <img className="img" alt='profile' src={profile} />
      </div>
    </div>
  )
}

export default BriefBio
