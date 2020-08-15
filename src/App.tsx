import React from 'react';
import './App.css';
import LandingPage from './pages/LandingPage';
import { ThemeProvider } from '@material-ui/core';
import customTheme from './styles/materialUiStyles';
import { Provider } from 'react-redux'
import configureStore from './store';
import './styles/main.sass';

const { innerWidth } = window

function App() {
  const store = configureStore()

  return (
    <div className={innerWidth < 500 ? "backgroundImg" : ''}>
      <div className="bgTint" />
      <Provider store={store}>
        <ThemeProvider theme={customTheme}>
          {innerWidth > 500 &&
            <img className='backgroundImg2' src={require('./assets/flowersbgbgBluredDark.png')} alt='' />
          }
          <div className='' />
          {/* <Parallax pages={4.15} ref={parallaxRef}> */}
          {/* <div className="backgroundImg"> */}
          {/* <ParallaxLayer offset={0} speed={.1}> */}
          <LandingPage />
          {/* </ParallaxLayer> */}
          {/* </div> */}
          {/* </Parallax> */}
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;