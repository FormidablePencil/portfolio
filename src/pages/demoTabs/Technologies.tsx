import React from 'react'
import { DemoLayout, CardLayout } from '../DemoSection'
// import { useSelector } from 'react-redux'
// import { rootReducerT } from '../../store'

function Technologies() {
  // const techData = useSelector((state: rootReducerT) => state.techData)


  return (
    <DemoLayout
      imageUrl={''}
      sectionOne={''}
      searchFeatureSection={<></>}
      sectionTwo={
        <>
          <CardLayout />
          <CardLayout />
        </>
      }
    />
  )
}

export default Technologies