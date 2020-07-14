import React, { useEffect, useState } from 'react'
import { DemoLayout, CardLayout } from '../DemoSection'
import { useSelector, useDispatch } from 'react-redux'
import { rootReducerT } from '../../store'
import { AccordionSummary, Typography, AccordionDetails, Chip, Button } from '@material-ui/core'

import { AiFillCaretLeft } from 'react-icons/ai'
import { sortedProjectDataT, SELECTED_SUBJECT } from '../../actions/types'
import { BorderLinearProgress, AccordionCustom } from '../../styles/materialUiStyles'

function ProjectsGallery() {
  const { currentSubjectViewing, projectDataCollection } = useSelector((state: rootReducerT) => state)
  const [sortedProjectData, setSortedProjectData] = useState<sortedProjectDataT>()
  const dispatch = useDispatch()

  useEffect(() => {
    if (typeof currentSubjectViewing === 'number' && projectDataCollection[currentSubjectViewing]) {
      setSortedProjectData({
        status: projectDataCollection[currentSubjectViewing].status,
        general: {
          title: projectDataCollection[currentSubjectViewing].title,
          description: projectDataCollection[currentSubjectViewing].description,
          type: projectDataCollection[currentSubjectViewing].type,
        },
        links: {
          frontend: projectDataCollection[currentSubjectViewing].gitRepo.frontend,
          server: projectDataCollection[currentSubjectViewing].gitRepo.server,
          relevant: projectDataCollection[currentSubjectViewing].relevant.webApp,
        },
        technologies: projectDataCollection[currentSubjectViewing].technologies,
      })
    }
  }, [currentSubjectViewing, projectDataCollection])

  const onCardClick = (techIndexInCollection) => dispatch({ type: SELECTED_SUBJECT, payload: techIndexInCollection })

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
                <TextFormated title='Title' content={sortedProjectData?.general.title} />
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
        <div className='column'>
          {projectDataCollection.map((project, index) =>
            <>
              <Button className="searchResultBtn" onClick={() => console.log(project._id)}>{project.title}</Button>
              <div className={`line ${index % 2 === 1 && 'oddLine'}`} />
            </>
          )}
        </div>
      }

      sectionTwo={
        <>
          {projectDataCollection.map((project, index) => /*//* this is rendering all projects not filtered through any category */
            <CardLayout
              onCardClick={(techIndexInCollection) => onCardClick(index)}
              visualSection={
                <>
                  {project.images && project.images.map(uri =>
                    <img src={uri} alt='' />
                  )}s
                </>
              } infoSection={
                <>
                  <Typography variant='body1'>{project.title}</Typography>
                  <Typography variant='body1'>{project.status}</Typography>
                  {project.technologies.map(tech =>
                    <Typography variant='body1'>{tech}</Typography>
                  )}
                </>
              } />
          )}
        </>
      }
    />
  )
}

export default ProjectsGallery
