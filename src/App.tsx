import React from 'react';
import './App.css';
import './styles/globalStyles.sass'
import LandingPage from './pages/LandingPage';
import { ThemeProvider } from '@material-ui/core';
import customTheme from './styles/materialUiStyles';
import { ParallaxProvider } from 'react-scroll-parallax';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import ExperPg from './pages/ExperPg';
import { DemoRoutes } from './pages/DemoSection';
import { Provider } from 'react-redux'
import configureStore from './store';

function App() {
  const store = configureStore()

  return (
    <Provider store={store}>
      <ParallaxProvider>
        <ThemeProvider theme={customTheme}>
          <Router>
            <Navbar />
            <Switch>
              <Route path="/home">
                <LandingPage />
              </Route>
              {/* <Route path="/demo"> */}
              <DemoRoutes />
              {/* </Route> */}
              <Route path="/experimental">
                <ExperPg />
              </Route>
            </Switch>
          </Router>
        </ThemeProvider>
      </ParallaxProvider>
    </Provider>
  );
}

export default App;
