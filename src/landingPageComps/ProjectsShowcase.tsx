import React, { useState } from 'react'
import { Button } from '@material-ui/core';
import { staticProjects } from '../staticData';
import SwipeableViews from 'react-swipeable-views';
// import { bindKeyboard } from 'react-swipeable-views-utils';
import SwipableComp from './ProjectShowComps/SwipableComp';
// import { rootReducerT } from '../store';
// import { useSelector } from 'react-redux';
// const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews);



function ProjectsShowcase() {
  // const projectDataCollection = useSelector((state: rootReducerT) => state.projectDataCollection)

  const [swipableViewsIndex, setSwipableViewsIndex] = useState(0)

  const onClickNavProjects = ({ leftDirection }) => {
    if (leftDirection) setSwipableViewsIndex(prev => prev - 1)
    else setSwipableViewsIndex(prev => prev + 1)
  }


  //* image should be restrict to a certain size, it must be perfect to suffice.
  return (
    <div className='project-section'>
      {/* <div className="swipableViewContainer"> */}
      <div className="navBtnsContainer">
        <Button
          disabled={swipableViewsIndex === 0}
          style={swipableViewsIndex === 0 ?
            { color: 'rgba(129,129,129,.3)', borderColor: 'rgba(129,129,129,.3)' } : {}}
          onClick={() => onClickNavProjects({ leftDirection: true })}
          variant='outlined' color="primary" className='navigateBtnLeft'>{'prev'}</Button>
        <Button
          disabled={swipableViewsIndex === staticProjects.length - 1}
          style={swipableViewsIndex === staticProjects.length - 1 ?
            { color: 'rgba(129,129,129,.3)', borderColor: 'rgba(129,129,129,.3)' } : {}}
          onClick={() => onClickNavProjects({ leftDirection: false })}
          variant='outlined' color="primary" className='navigateBtnRight'>{'next'}</Button>
      </div>
      <SwipeableViews index={swipableViewsIndex} style={{ width: '100%' }}>
        {staticProjects.map(proj =>
          <SwipableComp desktopImages={proj.desktopImages} mobileImgs={proj.mobileImgs} />
        )}
      </SwipeableViews>
      <Button variant='contained' color="primary" className='btnGoToDetailedPg'>{'details -->'}</Button>
    </div >
  )
}

export default ProjectsShowcase
