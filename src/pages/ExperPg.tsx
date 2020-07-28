import React, { useState } from 'react'
import '../styles/experStyles.sass';
import { animated, useTransition, useSprings } from 'react-spring';
import { Button } from '@material-ui/core';
import { Transition } from 'react-spring/renderprops';

const ExperPg = () => {
  const [toggle, setToggle] = useState(false)
  const [items, set]: any = useState([
    {
      key: 1, text: 'hey', transform: {
        from: 'translate3d(100px,00px,0)',
        enter: 'translate3d(400px,00px,0)',
        leave: 'translate3d(900px,00px,0)',
      },
      delay: 1500
    },
    {
      key: 4, text: 'hey2', transform: {
        from: 'translate3d(0,30px,0)',
        enter: 'translate3d(0,0px,0)',
        leave: 'translate3d(0,30px,0)',
      },
      delay: 1000
    },
    {
      key: 2, text: 'heya2', transform: {
        from: 'translate3d(0,100px,0)',
        enter: 'translate3d(0,0px,0)',
        leave: 'translate3d(0,100px,0)',
      },
      delay: 2000
    }
  ])
  const springs = useSprings(3, items.map(item => (
    toggle ? { transform: item.transform.from, delay: item.delay } : { transform: item.transform.enter, delay: item.delay }
  )))

  return (
    <div style={{ height: '100vh', width: '100vw', backgroundColor: 'orange', color: 'black' }}>
      <Button onClick={() => setToggle(prev => !prev)}>Press</Button>
      {springs.map((props, index) =>
        <animated.div style={props}>{items[index].text}</animated.div>
      )}
      {/* // <div className="parallax-container">
      //   <div className="background">
      //     <img src={require('../assets/croppedVerticallyFlowerPattern.jpg')} alt="" className="backrgoundImage" />
      //   </div>
      //   <div className="foreground">
      //     <div className="foregroundContent">
      //       parallaxing!!
      //   </div>
      //   </div>
      // </div> */}
    </div>
  )
}

export default ExperPg