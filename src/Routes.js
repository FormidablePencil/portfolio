import React from 'react'
import {
   BrowserRouter as Router,
   Switch,
   Route,
} from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Bio from './pages/Bio';
import ShowcaseProjectsComp from './components/ShowcaseProjectsComp';
import AbilitiesPage from './pages/AbilitiesPage';

function Routes() {
   return (
      <Router>
         <Switch>
            <Route exact path="/"><LandingPage /></Route>
            <Route path="/bio"><Bio /></Route>
            <Route path='/project'><ShowcaseProjectsComp /></Route>
            <Route path='/webdevtechnoœlogies'><AbilitiesPage /></Route>
         </Switch>
      </Router>
   )
}

export default Routes