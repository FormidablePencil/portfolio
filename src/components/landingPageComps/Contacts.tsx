import React, { useRef } from 'react'
import { Button, TextField } from '@material-ui/core'
import { useSpring, animated } from 'react-spring'
import useOnScreen from '../../hooks/useOnScreen'
import { customAnimConfig } from '../../staticData'
import { viewingOnMobileDimensions } from './Intro'

const { innerWidth } = window

function Contacts() {
  const message = 'Message....'
  const sectionRef = useRef(null)
  const { isIntersecting } = useOnScreen(sectionRef, 'contacts', false, '-200px')
  const animOpacity = useSpring({
    from: { opacity: 0, },
    to: { opacity: isIntersecting || innerWidth < 500 ? 1 : 0 },
    config: customAnimConfig,
  })
console.log(viewingOnMobileDimensions());
  return (
    <animated.div style={viewingOnMobileDimensions()} ref={sectionRef} className='contacts-section'>
      <div className="contactsBox">
        <animated.div style={animOpacity} className="container">
          <div className="contacts">
            <div className="contactLabels">
              <p>Contacts</p>
              <p>Gitbub:</p>
              <p>Email:</p>
              <p>LinkedIn:</p>
            </div>
            <div className="personalContactInfo">
              <p>Dennis Aleksandrov</p>
              <p>https://github.com/FormidablePencil</p>
              <p>formidablepencil@gmail.com</p>
              <p>LinkedIn</p>
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
            <Button variant='contained' style={{backgroundColor: '#6CAE6B', color: 'white'}} className='submitBtn'>submit</Button>
          </div>
        </animated.div>
      </div>
    </animated.div>
  )
}

export default Contacts
