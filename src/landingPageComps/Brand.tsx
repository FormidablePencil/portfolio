import React from 'react'
import { Typography } from '@material-ui/core'
import brandLogo from '../assets/pencil.png';

function Brand() {
  return (
    <div className='row aligning BrandSection'>
      <div>
        <Typography variant='h1' className='textPrimary'>Formidable</Typography>
        <Typography variant='h1' className='textPrimary'> Pencil</Typography>
      </div>
      <div>
        <img src={brandLogo} alt='brand logo' />
      </div>
      <div className='paragraph'>
        <Typography className='textPrimary'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, a commodi reprehenderit pariatur veniam provident facere dicta laudantium sunt exercitationem maxime, voluptate hic earum voluptatum nam, nihil sint deleniti corrupti! Quidem doloremque in assumenda nobis repellendus! Soluta distinctio deleniti nostrum dicta delectus, aliquid officia, voluptas fugit cumque necessitatibus unde nulla incidunt inventore veritatis est quo, quaerat iste nam? Exercitationem, magnam.</Typography>
      </div>
    </div>
  )
}

export default Brand
