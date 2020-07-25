import React from 'react'
import smartPhoneFrame from '../assets/galaxys8Frame.png';
import { Typography, Chip, Button, Paper, LinearProgress } from '@material-ui/core';
import image from '../assets/app images/Screenshot_20200629-225357_Simple Pokedex.jpg';

const Project = () => {
  return (
    <div className='container'>
      <div className='frame'>
        <img className='smartphone' src={smartPhoneFrame} alt='frame' />
        <img className='image' src={image} alt='app' />
      </div>

      <Paper className='detailsBox' elevation={1}>
        <div className="column">
          <Typography variant='body1' className='messageMarginRight'> similique ratione totam beatae. Aliquid eligendi sapiente illum voluptates culpa nulla maiores ab ipsam aspernatur dolor expedita id, mollitia excepturi sint.</Typography>
          <div className='moreSection'>
            <div className="techContainer">
              <Typography variant='h5' gutterBottom>Technologies:</Typography>
              <Chip label="Basic" color='primary' className='chipMargin' />
              <Chip label="Basic" color='primary' className='chipMargin' />
              <Chip label="Basic" color='primary' className='chipMargin' />
              <Chip label="Basic" color='primary' className='chipMargin' />
              <Chip label="Basic" color='primary' className='chipMargin' />
              <Chip label="Basic" color='primary' className='chipMargin' />
              <Chip label="Basic" color='primary' className='chipMargin' />
              <Chip label="Basic" color='primary' className='chipMargin' />
            </div>
            <div className="progressContainer">
              <Typography variant='h5' gutterBottom>Progress:</Typography>
              <LinearProgress variant="determinate" value={50} />
              <Button variant='contained' color="secondary" className='btnGoToDetailedPg'>detailed</Button>
            </div>
          </div>
        </div>
      </Paper>
    </div>
  )
}

export default Project