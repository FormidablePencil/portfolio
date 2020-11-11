import React from 'react'

function SwitchProjectBtns({ swipableViewsIndex, onClickNavProjects, lengthOfProjectsRendered }) {
  return (
    <div className="navBtnsContainer">
      <button
        disabled={swipableViewsIndex === 0}
        className={swipableViewsIndex === 0 ? ' swipeable-view-btns' : 'swipeable-view-btns-active'}
        onClick={() => onClickNavProjects({ leftDirection: true })}
      >
        prev
    </button>
      <button
        disabled={swipableViewsIndex === lengthOfProjectsRendered - 1}
        className={swipableViewsIndex === lengthOfProjectsRendered - 1 ? 'swipeable-view-btns' : 'swipeable-view-btns-active'}
        onClick={() => onClickNavProjects({ leftDirection: false })}
      >
        next
    </button>
    </div>
  )
}

export default SwitchProjectBtns
