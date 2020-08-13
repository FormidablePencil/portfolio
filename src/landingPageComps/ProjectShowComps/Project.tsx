import React from 'react'
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io'

const Project = ({ isMobile, image, onClickArrow, disableLeftArrow, disableRightArrow }) => {

  const frameClassName = isMobile ? 'smartphoneFrame noselect' : 'desktopFrame noselect'
  const imageClassName = isMobile ? 'smartphoneImage noselect' : 'desktopImage noselect'
  const frame = isMobile ? require('../../assets/galaxys8Frame.png') : require('../../assets/macbookFrame.png')
  const imageSwitchingArrowMargin = isMobile ? '0em' : '-.5em'

  return (
    <div className='container'>
      <IoMdArrowDropleft
        className='transparentBtn'
        onClick={() => onClickArrow({ isMobile, leftDirection: true })}
        style={{
          zIndex: 5,
          color: disableLeftArrow ? 'rgba(129,129,129,.2)' : '',
          position: "absolute",
          left: imageSwitchingArrowMargin
        }} />
      <div className='frame'>
        <img
          className={frameClassName}
          src={frame} alt='' />
        <img
          className={imageClassName}
          src={image} alt='app' />
      </div>
      <IoMdArrowDropright
        className='transparentBtn'
        onClick={() => onClickArrow({ isMobile, leftDirection: false })}
        style={{
          zIndex: 5,
          color: disableRightArrow ? 'rgba(129,129,129,.2)' : '',
          position: "absolute",
          right: imageSwitchingArrowMargin
        }} />
    </div>
  )
}

export default Project