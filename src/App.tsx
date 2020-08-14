import React from 'react';
import './App.css';
import LandingPage from './pages/LandingPage';
import { ThemeProvider } from '@material-ui/core';
import customTheme from './styles/materialUiStyles';
import { Provider } from 'react-redux'
import configureStore from './store';
import './styles/main.sass';

function App() {
  const store = configureStore()

  return (
    <div className="">
      <Provider store={store}>
        <ThemeProvider theme={customTheme}>
          <img className='backgroundImg2' src={require('./assets/flowersbgbgBlured.png')} alt='' />
          <div className="bgTint" />
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