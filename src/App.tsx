import React from 'react';
import LandingPage from './pages/LandingPage';
import { ThemeProvider } from '@material-ui/core';
import customTheme from './styles/materialUiStyles';
import { Provider } from 'react-redux'
import configureStore from './store';
import './styles/main.sass';

function App() {
  const store = configureStore()

  return (
    <div className='backgroundImg'>
      <div className="bgTint" />
      <Provider store={store}>
        <ThemeProvider theme={customTheme}>
          <LandingPage />
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;