import React from 'react'
import Project from './Project'
// import { rootReducerT } from '../store';
// import { useSelector } from 'react-redux';

function ProjectsShowcase() {
  // const projectDataCollection = useSelector((state: rootReducerT) => state.projectDataCollection)
  // console.log('hey from projectsShowcase', projectDataCollection);
  
  return (
    <div className='row aligning projectSection'>
      <Project />
      <Project />
    </div>
  )
}

export default ProjectsShowcase
