import React from 'react'
import { Typography } from '@material-ui/core';
import profile from '../assets/20190404_080008.jpg';

function Landing() {
  return (
    <div className='row aligning landingSection'>
      <div>
        <p className='large-name'>Dennis Aleksandrov</p>
        <div className="paragraphBox">
          <Typography variant='body1' className=''>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo ut eaque nisi porro velit, similique dicta nobis deserunt atque provident saepe, consequuntur soluta cum. Veritatis assumenda ullam possimus quidem harum?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo ut eaque nisi porro velit, similique dicta nobis deserunt atque provident saepe, consequuntur soluta cum. Veritatis assumenda ullam possimus quidem harum?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo ut eaque nisi porro velit, similique dicta nobis deserunt atque provident saepe, consequuntur soluta cum. Veritatis assumenda ullam possimus quidem harum?
          </Typography>
        </div>
      </div>
      <div className='imgFrame'>
        <img className="img" alt='profile' src={profile} />
      </div>
    </div>
  )
}

export default Landing
