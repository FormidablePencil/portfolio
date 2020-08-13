import React from 'react'
import { AppBar, Link, Typography } from '@material-ui/core'
import { useLocation } from 'react-router-dom';
//Motivations behind this project. Appeal to other deveopers.

function Navbar() {
  const pathName = useLocation().pathname
  const pathNamePartial = pathName.slice(0, 5)
  return (
    <AppBar position='static' >
      <div className='navbar'>
        <div className="row justifyBetween hFull">
          {pathNamePartial === '/demo' &&
            <div className="tabs">
              <Link
                className={`tab1 ${pathName === '/demo/gallery' && 'activeTab'}`}
                href='/demo/gallery'
              >
                <Typography className='text' variant='h5'>Project Gallery</Typography>
              </Link>
              {/* <Link
                className={`tab2 ${pathName === '/demo/project' && 'activeTab'}`}
                href='/demo/project'
                onClick={() => onClickHandler(1)}
              >
                <Typography className='text' variant='h5'>Project Details</Typography>
              </Link> */}
              <Link
                className={`tab3 ${pathName === '/demo/tech' && 'activeTab'}`}
                href='/demo/tech'
              >
                <Typography className='text' variant='h5'>Technologies</Typography>
              </Link>
            </div>
          }
          <div className="navLinks">
            <Link className='link' variant="h6" href='/'>Home</Link>
            <Link className='link' variant="h6" href='/demo/gallery'>Demo</Link>
            <Link className='link' variant="h6" href='/experimental'>experimental</Link>
          </div>
        </div>
      </div>
    </AppBar>
  )
}

export default Navbar
