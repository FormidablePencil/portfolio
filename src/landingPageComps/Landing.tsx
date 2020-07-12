import React from 'react'
import { Typography } from '@material-ui/core';


function Landing() {
  return (
    <div className='row aligning landingSection'>
      <div>
        <Typography variant='h1' className='textPrimary'>Dennis</Typography>
        <Typography variant='h1' className='textPrimary'> Aleksandrov</Typography>
      </div>
      <div className='imgFrame'>
      </div>
    </div>
  )
}

export default Landing
