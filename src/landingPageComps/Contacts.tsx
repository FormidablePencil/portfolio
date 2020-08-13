import React from 'react'
import { Button, TextField } from '@material-ui/core'

function Contacts() {
  const message = 'Message....'
  return (
    <div className='contacts-section'>
      <div className="contactsBox">
        <div className="contacts">
          <div className="contactLabels">
            <p>Contacts:</p>
            <p>Gitbub:</p>
            <p>Email:</p>
            <p>LinkedIn:</p>
          </div>
          <div className="personalContactInfo">
            <p>gsjkfma'lksfgm;lfmg</p>
            <p>slgfknsfl;ndsf</p>
            <p>gkjsnf;ojgf;sdf</p>
            <p>LinkedIn:</p>
          </div>
        </div>
        <div className="leaveMesg">
          <TextField
            className='textArea'
            placeholder={message}
            value=''
            multiline={true}
            rows={4} />
          <TextField className='textArea' placeholder='Email:' value='' type='textarea' />
          <Button variant='contained' color='secondary' className='submitBtn'>submit</Button>
        </div>
      </div>
    </div>
  )
}

export default Contacts
