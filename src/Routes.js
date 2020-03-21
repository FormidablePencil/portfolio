import React from 'react'
import {
   BrowserRouter as Router,
   Switch,
   Route,
} from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Bio from './pages/BioPage';
import AbilitiesPage from './pages/AbilitiesPage';
import ShowcaseProjectPage from './pages/ShowcaseProjectPage';
import ResumePage from './pages/ResumePage';

function Routes() {
   return (
      <Router>
         <Switch>
            <Route exact path="/"><LandingPage /></Route>
            <Route path="/bio"><Bio /></Route>
            <Route path="/resume"><ResumePage /></Route>
            <Route path='/project'><ShowcaseProjectPage /></Route>
            <Route path='/technologies'><AbilitiesPage /></Route>
         </Switch>
      </Router>
   )
}

export default Routes