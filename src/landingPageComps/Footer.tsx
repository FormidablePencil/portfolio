import React from 'react'
import { Typography, Grid, Button } from '@material-ui/core'

function Footer() {
  const message = 'Message....'
  return (
    <div className='footer'>
      <div className="border"></div>
      <Grid
        className='container'
        alignContent='center'
        container
      >
        <Grid
          item
          container
          xs={6}
        >
          <div className="messageContainer">
            <div className="message">
              <Typography variant='body1'>{message}</Typography>
            </div>
            <Button variant='contained' color='secondary' className='submitBtn'>submit</Button>
          </div>
        </Grid>
        <Grid
          item
          container
          justify='center'
          xs={6}
        >
          <div className="contacts">
            <Typography variant='h3'>Contacts</Typography>
            <ul>
              <li><Typography variant='body1'>Gitbub:</Typography></li>
              <li><Typography variant='body1'>Email:</Typography></li>
              <li><Typography variant='body1'>LinkedIn:</Typography></li>
            </ul>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Footer
