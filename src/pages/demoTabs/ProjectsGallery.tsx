import React, { useEffect, useState } from 'react'
import { DemoLayout, CardLayout } from '../DemoSection'
import { useSelector } from 'react-redux'
import { rootReducerT } from '../../store'
import { AccordionSummary, Typography, AccordionDetails, Chip } from '@material-ui/core'

import { AiFillCaretLeft } from 'react-icons/ai'
import { sortedProjectDataT } from '../../actions/types'
import { BorderLinearProgress, AccordionCustom } from '../../styles/materialUiStyles'

function ProjectsGallery() {
  const { currentSubjectViewing, projectData } = useSelector((state: rootReducerT) => state)

  const [sortedProjectData, setSortedProjectData] = useState<sortedProjectDataT>()

  useEffect(() => {
    if (typeof currentSubjectViewing === 'number' && projectData[currentSubjectViewing]) {
      setSortedProjectData({
        status: projectData[currentSubjectViewing].status,
        general: {
          title: projectData[currentSubjectViewing].title,
          description: projectData[currentSubjectViewing].description,
          type: projectData[currentSubjectViewing].type,
        },
        links: {
          frontend: projectData[currentSubjectViewing].gitRepo.frontend,
          server: projectData[currentSubjectViewing].gitRepo.server,
          relevant: projectData[currentSubjectViewing].relevant.webApp,
        },
        technologies: projectData[currentSubjectViewing].technologies,
      })
    }
  }, [currentSubjectViewing, projectData])

  const TextFormated = ({ title, content }) =>
    <>
      <Typography variant='body1' display='block'>
        <Typography variant='h6' display='inline' className='spaceRightOfText'>
          {title}:
        </Typography> {/* //* create and run through a function that capitalizes the first letter */}
        {content}
      </Typography>
    </>

  const AccordionComponent = ({ initiallyExpanded = false, summarySection, detailsSection }) => {
    const [expanded, setExpanded] = useState(initiallyExpanded)
    return (
      <AccordionCustom expanded={expanded} className='accordionGeneralSection'>
        <AccordionSummary
          onClick={() => setExpanded(prev => !prev)}
          expandIcon={<AiFillCaretLeft className='rotate90' />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          {summarySection}
        </AccordionSummary>
        <AccordionDetails className='accordionDetails'>
          {detailsSection}
        </AccordionDetails>
      </AccordionCustom>
    )
  }

  return (
    <DemoLayout
      // {/* <Typography className='projectTabHeader' variant='h4'>Projects</Typography> */}
      imageUrl={typeof currentSubjectViewing === 'number' &&
        projectData[currentSubjectViewing] ?
        projectData[currentSubjectViewing].images[0] : null}
      sectionOne={
        <>
          <AccordionComponent
            initiallyExpanded={true}
            summarySection={
              <div className='row spaceBt'>
                <Typography variant='h5'>General</Typography> {/* //* make bold */}
                <div className="statusContainer">
                  <Typography variant='h6'>Complete</Typography>
                  <BorderLinearProgress className='progressBar' color='primary' variant="determinate" value={50} />
                </div>
              </div>}
            detailsSection={
              <div className="column">
                <TextFormated title='Description' content={sortedProjectData?.general.description} />
                <TextFormated title='Platform' content={sortedProjectData?.general.type} />
              </div>} />

          <AccordionComponent
            initiallyExpanded={false}
            summarySection={
              <Typography>Github repo links & more</Typography>}
            detailsSection={
              <div className="column">
                <TextFormated title='Frontend source code' content={sortedProjectData?.links.frontend} />
                <TextFormated title='Server source code' content={sortedProjectData?.links.server} />
              </div>} />

          <AccordionComponent
            initiallyExpanded={false}
            summarySection={
              <Typography>Technologies</Typography>}
            detailsSection={
              <>
                {sortedProjectData?.technologies.map(tech =>
                  //* icon if the technology on the left side
                  <Chip label={tech} variant="default" className='chip' key={tech} />
                )}
              </>} />

        </>
      }
      searchFeatureSection={ /* //* we're going to control the search input field from here */
        <>
        {/* {projectData.map(project => {
          
        })} */}
        </>
      }

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
