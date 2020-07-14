import React from 'react'
import { Grid, Paper } from '@material-ui/core'
import '../styles/demoPgStyles.sass'
import { Route, Switch } from 'react-router-dom';
import ProjectsGallery from './demoTabs/ProjectsGallery';
import Technologies from './demoTabs/Technologies';
import useFetchAllPortfolioData from '../hooks/useFetchAllPortfolioData';
import SubjectImageShowcase from './demoTabs/projectGallery/SubjectImageShowcase';
import ExperPg from './ExperPg';
import { projectDataT } from '../reducers/projectDataReducer';
import { techDataT } from '../reducers/techDataReducer';
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

export function DemoLayout({ sectionOne, searchFeatureSection, sectionTwo }) {
  // const imageInWords = 'React-Native'
  const viewingContentDetails = true

  return (
    <Grid container className='demoPage'>
      <Grid item container>
        <Paper className='sectionOne' elevation={10}>
          <div className="subjectImgContainer">
            <SubjectImageShowcase />
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

interface CardLayoutT {
  projectData: techDataT & projectDataT
}

export const CardLayout = ({ visualSection, infoSection, onCardClick }) => {
  return (
    <Paper className="card row" id='hoverEffect' /*//* hover effect: zoom in and brightness higher */
      onClick={() => onCardClick()}
    >
      <div className="pictureFrame">{visualSection}</div>
      <div className="infoSection">{infoSection}</div>
      <div className="absoluteLayer" id='hoverEffect' />
    </Paper>
  )
}