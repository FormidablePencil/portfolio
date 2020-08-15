import React, { useState } from 'react'
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io'
import SwipeableViews from 'react-swipeable-views';

const Project = ({ isMobile, images }) => {
  const [imageIndex, setImageIndex] = useState(0)
  const frameClassName = isMobile ? 'smartphoneFrame noselect' : 'desktopFrame noselect'
  const imageClassName = isMobile ? 'smartphoneImage noselect' : 'desktopImage noselect'
  const frame = isMobile ? require('../../assets/galaxys8Frame.png') : require('../../assets/macbookFrame.png')
  const imageSwitchingArrowMargin = isMobile ? '0em' : '-.5em'

  const onClickArrow = ({ leftDirection, isMobile }) => { /* //! I fucked up again! I need images to render all in in a swiper component */
    if (canImageBeSwitchedCertainDirection({ leftDirection })) {
      if (leftDirection) setImageIndex(prev => prev - 1)
      else setImageIndex(prev => prev + 1)
    }
  }
  const canImageBeSwitchedCertainDirection = ({ leftDirection }) => {
    if (leftDirection && imageIndex === 0) return false
    if (!leftDirection && imageIndex === images.length - 1) return false
    return true
  }

  return (
    <div className='container'>
      <IoMdArrowDropleft
        className={imageIndex === 0 ? 'inactiveBtn' : 'transparentBtn'}
        onClick={() => onClickArrow({ isMobile, leftDirection: true })}
        style={{
          zIndex: 5,
          color: imageIndex === 0 ? 'inactiveBtn' : '',
          position: "absolute",
          left: imageSwitchingArrowMargin
        }} />

      <div className='frame'>
        <img className={frameClassName} src={frame} alt='' />
        <SwipeableViews index={imageIndex} className='switchableArea-smartphone' style={{
          position: 'absolute',
          top: '17.5px',
          height: '323px',
          // width: '145px',
        }}>
          {images.map(image =>
            <img className={imageClassName} /* //* static data for testing doesn't work so I must use pulled data */
              src={require('../../assets/app images/Screenshot_20200629-225350_Simple_Pokedex.jpg')}
              // src={image}
              alt='app'
            />
          )}
        </SwipeableViews>
      </div>
      <IoMdArrowDropright
        className='transparentBtn'
        onClick={() => onClickArrow({ isMobile, leftDirection: false })}
        style={{
          zIndex: 5,
          color: imageIndex === images.length - 1 ? 'rgba(129,129,129,.2)' : '',
          position: "absolute",
          right: imageSwitchingArrowMargin
        }} />
    </div>
  )
}

export default Project