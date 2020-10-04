import React from 'react'
import { BsPhone } from 'react-icons/bs'
import { AiOutlineDesktop } from 'react-icons/ai';
import { viewingOnMobileDimensions } from '../Intro';

const SwitchDeviceTypeBtns = ({ isMobile, onClickHandler }) => {
  return (
    <div className='switchDeviceTypeBtns'
      onClick={onClickHandler}
      style={viewingOnMobileDimensions().height ? {
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column'
      } : {
          opacity: 0,
          display: 'flex',
          flexDirection: 'column'
        }
      }>
      <BsPhone
        color={isMobile ? 'white' : 'grey'} size={40} style={{ margin: '0 0 1em 1em', zIndex: 20 }} />
      <AiOutlineDesktop
        color={!isMobile ? 'white' : 'grey'} size={40} style={{ margin: '0 0 0 1em', zIndex: 200 }} />
    </div>
  )
}

export default SwitchDeviceTypeBtns