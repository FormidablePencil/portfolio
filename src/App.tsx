import React from 'react';
import './App.css';
import './styles/globalStyles.sass'
import LandingPage from './pages/LandingPage';
import { ThemeProvider } from '@material-ui/core';
import customTheme from './styles/customTheme';
import { ParallaxProvider } from 'react-scroll-parallax';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import ExperPg from './pages/ExperPg';
import { DemoRoute } from './pages/DemoSection';

function App() {
  return (
    <div>
      <ParallaxProvider>
        <ThemeProvider theme={customTheme}>
          <Router>
            <Navbar />
            <Switch>
              <Route path="/home">
                <LandingPage />
              </Route>
              {/* <Route path="/demo"> */}
              <DemoRoute />
              {/* </Route> */}
              <Route path="/experimental">
                <ExperPg />
              </Route>
            </Switch>
          </Router>
        </ThemeProvider>
      </ParallaxProvider>
    </div>
  );
}

export default App;
