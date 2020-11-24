import React from 'react';
import LandingPage from './pages/LandingPage';
import { Provider } from 'react-redux'
import configureStore from './store';
import './styles/main.sass';

function App() {
  const store = configureStore()

  return (
    <div className='backgroundImg'>
      <Provider store={store}>
        <LandingPage />
      </Provider>
    </div>
  );
}

export default App;