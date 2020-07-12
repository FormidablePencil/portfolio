import React from 'react'
import { DemoLayout, CardLayout } from '../DemoSection'

function ProjectsGallery() {
  return (
    <DemoLayout
      // {/* <Typography className='projectTabHeader' variant='h4'>Projects</Typography> */}
      sectionOne1={''}
      sectionOne2={''}
      sectionTwo={
        <>
          <CardLayout />
          <CardLayout />
          <CardLayout />
        </>
      }
    />
  )
}

export default ProjectsGallery
