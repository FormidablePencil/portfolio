import React from 'react'
import { Grid, Paper } from '@material-ui/core'
import '../styles/demoPgStyles.sass'
import { Route, Switch } from 'react-router-dom';
import ProjectsGallery from './demoTabs/ProjectsGallery';
import Technologies from './demoTabs/Technologies';
import useFetchAllPortfolioData from '../hooks/useFetchAllPortfolioData';
import SubjectImageShowcase from './demoTabs/projectGallery/SubjectImageShowcase';
import ExperPg from './ExperPg';
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
      <Route path="/experimental">
        <ExperPg />
      </Route>

    </Switch>
  )
}

export function DemoLayout({ imageUrl, sectionOne, searchFeatureSection, sectionTwo }) {
  // const imageInWords = 'React-Native'
  const viewingContentDetails = true

  return (
    <Grid container className='demoPage'>
      <Grid item container>
        <Paper className='sectionOne' elevation={10}>
          <div className="subjectImgContainer">
            <SubjectImageShowcase imageUrl={imageUrl} />
          </div>
          <div className="subjectInfoContainer">
            <div className="content">
              {sectionOne}
            </div>
          </div>

          <div
            className={`${viewingContentDetails ? 'searchFeatureOuterContainerViewMode'
              : 'searchFeatureOuterContainerBriefMode'} column`}>
            <div className="searchBarContainer row">
              <input type="text" name="name" />
            </div>
            <div className="searchResultSection">
              {searchFeatureSection}
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