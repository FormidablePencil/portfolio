import React, { useRef } from 'react'
import { Button, TextField } from '@material-ui/core'
import { useSpring, config, animated } from 'react-spring'
import useOnScreen from '../hooks/useOnScreen'

function Contacts() {
  const message = 'Message....'
  const sectionRef = useRef(null)
  const sectionAppearedInView: boolean = useOnScreen(sectionRef)
  const animOpacity = useSpring({
    from: { opacity: 0, },
    to: { opacity: sectionAppearedInView ? 1 : 0 },
    config: config.default,
    delay: 800
  })

  return (
    <animated.div ref={sectionRef} style={animOpacity} className='contacts-section'>
      <div className="contactsBox">
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
          <Button variant='contained' color='secondary' className='submitBtn'>submit</Button>
        </div>
      </div>
    </animated.div>
  )
}

export default Contacts
