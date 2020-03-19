import React from 'react'
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link
} from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Bio from './pages/Bio';

function Routes() {
   return (
      <Router>
         <Switch>
            <Route exact path="/">
               <LandingPage />
            </Route>
            <Route path="/bio">
               <Bio />
            </Route>
         </Switch>
      </Router>
   )
}

export default Routes