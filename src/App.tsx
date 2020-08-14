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
    <Provider store={store}>
      <ThemeProvider theme={customTheme}>
        <LandingPage />
      </ThemeProvider>
    </Provider>
  );
}

export default App;