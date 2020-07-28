import React from 'react';
import './App.css';
import './styles/globalStyles.sass'
import LandingPage from './pages/LandingPage';
import { ThemeProvider } from '@material-ui/core';
import customTheme from './styles/materialUiStyles';
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
      <ThemeProvider theme={customTheme}>
        <Router>
          {/* <Navbar /> */}
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <DemoRoutes />
            <Route path="/experimental">
              <ExperPg />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;


//* supposed to be preformant way of using scroll
// export function debounce(func, wait = 5, immediate = true) {
//   let timeout;
//   return function () {
//     const context: any = this;
//     const args = arguments;
//     const later = function () {
//       timeout = null;
//       if (!immediate) func.apply(context, args);
//     };
//     const callNow = immediate && !timeout;
//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//     if (callNow) func.apply(context, args);
//   };
// } // IDK WTF this is. Whatever
//* =====