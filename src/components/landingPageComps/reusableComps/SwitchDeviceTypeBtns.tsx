import React from 'react'
import { BsPhone } from 'react-icons/bs'
import { AiOutlineDesktop } from 'react-icons/ai';

const SwitchDeviceTypeBtns = ({ isMobile, onClickHandler }) => {
  return (
    <div className='switchDeviceTypeBtns'
      onClick={onClickHandler}>
      <BsPhone
        color={isMobile ? 'white' : 'grey'} size={40} style={{ margin: '0 0 1em 1em', zIndex: 20 }} />
      <AiOutlineDesktop
        color={!isMobile ? 'white' : 'grey'} size={40} style={{ margin: '0 0 0 1em', zIndex: 200 }} />
    </div>
  )
}

export default SwitchDeviceTypeBtns