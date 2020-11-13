import React from 'react'

function SwitchProjectBtns({ onClickNavProjects }) {
  return (
    <div className="navBtnsContainer">
      <button
        className={'swipeable-view-btns-active'}
        onClick={() => onClickNavProjects({ leftDirection: true })}
      >
        prev
    </button>
      <button
        className={'swipeable-view-btns-active'}
        onClick={() => onClickNavProjects({ leftDirection: false })}
      >
        next
    </button>
    </div>
  )
}

export default SwitchProjectBtns
