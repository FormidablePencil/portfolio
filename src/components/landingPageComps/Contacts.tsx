import React, { useRef, useState } from 'react'
import { useSpring, animated } from 'react-spring'
import useOnScreen from '../../hooks/useOnScreen'
import { customAnimConfig } from '../../staticData'
import { rootReducerT } from '../../store'
import { useSelector } from 'react-redux'
import CopyToClipboard from 'react-copy-to-clipboard';
import { viewingOnMobileDimensions } from '../../hooks/useIntroBanner'


const { innerWidth } = window

function Contacts() {
  const contacts = useSelector((state: rootReducerT) => state.protfolioTextContent.contacts)
  const [copiedText, setCopiedText] = useState(false)

  const sectionRef = useRef(null)
  const { isIntersecting } = useOnScreen(sectionRef, 'contacts', false, '-200px')
  const animOpacity = useSpring({
    from: { opacity: 0, },
    to: { opacity: isIntersecting || innerWidth < 500 ? 1 : 0 },
    config: customAnimConfig,
  })
  const onClickText = () => {
    setCopiedText(true)
    setTimeout(() => {
      setCopiedText(false)
    }, 1000);
  }

  const trimParagraph = (paragraph) => paragraph.slice(0, 34)

  return (
    <animated.div style={viewingOnMobileDimensions()} ref={sectionRef} className='contacts-section'>
      <div className="contactsBox">
        <animated.div style={animOpacity} className="container">
          <div className="contacts">
            <p className={`
            ${!copiedText ? 'copied-animation-hide' : 'copied-animation-show'}
            dark-text
            `}>
              copied to clipboard
            </p>
            <div className="contactLabels">
              <p>Contacts</p>
              <p>Github:</p>
              <p>Email:</p>
              <p>LinkedIn:</p>
            </div>
            <div className="personalContactInfo">
              <p>Dennis Aleksandrov</p>
              {contacts &&
                <>
                  <p><a href={contacts.github}>{contacts.github}</a></p>
                  <CopyToClipboard
                    text={contacts.email}
                    onCopy={onClickText}
                  >
                    <p className='pointer'>{contacts.email}</p>
                  </CopyToClipboard>
                  <p>
                    <a href={contacts.linkedIn} className='linkedIn'>
                      {trimParagraph(contacts.linkedIn)}...
                    </a>
                  </p>
                </>
              }
              {/* <p>https://github.com/FormidablePencil</p>
              <p>formidablepencil@gmail.com</p>
              <p>LinkedIn</p> */}
            </div>
          </div>
        </animated.div>
      </div>
    </animated.div>
  )
}

export default Contacts
