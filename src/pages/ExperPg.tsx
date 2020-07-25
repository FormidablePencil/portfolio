import React from 'react'
import '../styles/experStyles.sass';

const ExperPg = () => {
  return (
    <div className="parallax-container">
      <div className="background">
        <img src={require('../assets/croppedVerticallyFlowerPattern.jpg')} alt="" className="backrgoundImage" />
      </div>
      <div className="foreground">
        <div className="foregroundContent">
          parallaxing!!
        </div>
      </div>
    </div>
  )
}

export default ExperPg