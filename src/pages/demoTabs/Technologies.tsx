import React from 'react'
import { DemoLayout, CardLayout } from '../DemoSection'
import { rootReducerT } from '../../store'
import { useSelector } from 'react-redux'

function Technologies() {
  const techDataCollection = useSelector((state: rootReducerT) => state.techDataCollection)


  return (
    <DemoLayout
      sectionOne={''}
      searchFeatureSection={<></>}
      sectionTwo={
        <>
          {techDataCollection.map(project =>
            <CardLayout
              onCardClick={() => console.log('clicked on card from tech tab')}
              visualSection={''} infoSection={<></>} />
          )}
        </>
      }
    />
  )
}

export default Technologies