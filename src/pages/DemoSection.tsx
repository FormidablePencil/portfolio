import React from 'react'
import { Grid, Paper } from '@material-ui/core'
import '../styles/demoPgStyles.sass'
import { Route, Switch } from 'react-router-dom';
import ProjectsGallery from './demoTabs/ProjectsGallery';
import Technologies from './demoTabs/Technologies';
import useFetchAllPortfolioData from '../hooks/useFetchAllPortfolioData';
// import reactNative from '../assets/techLogo/reactNativeLogo.png';

export function DemoRoutes() {
  useFetchAllPortfolioData()

  return (
    <Switch>
      <Route path="/demo/gallery">
        <ProjectsGallery />
      </Route>
      <Route path="/demo/tech">
        <Technologies />
      </Route>
    </Switch>
  )
}

// interface DemoLayoutT {
//   sectionOne1: any
//   sectionOne2: any
//   sectionTwo: any
// }

export function DemoLayout({ sectionOne1, sectionOne2, sectionTwo }) {
  // const imageInWords = 'React-Native'
  const viewingContentDetails = true

  return (
    <Grid container className='demoPage'>
      <Grid item container>
        <Paper className='sectionOne' elevation={10}>
          <div className="subjectImgContainer">
            {/* <img src={reactNative} alt={imageInWords} /> */}
            {sectionOne1}
          </div>
          <div className="subjectInfoContainer">
            <div className="content">
              {sectionOne2}
            </div>
          </div>

          <div
            className={`${viewingContentDetails ? 'searchFeatureOuterContainerViewMode'
              : 'searchFeatureOuterContainerBriefMode'} column`}>
            <div className="searchBarContainer row">
              <input type="text" name="name" />
            </div>
            <div className="searchResultSection">

            </div>
          </div>

        </Paper>
      </Grid>
      <Grid item justify='space-evenly' alignItems='center' container className='sectionTwoRelevance'>
        {sectionTwo}
      </Grid>
    </Grid >
  )
}

export const CardLayout = () => { // if 2 cards or less then column of 2 else greater then a column of 3
  return (
    <Paper className="card row">
      <div className="pictureFrame">asda</div>
      <div className="infoSection">adds</div>
    </Paper>
  )
}