import React, {useEffect} from 'react';
import LandingPage from './pages/LandingPage';
import { Provider } from 'react-redux'
import configureStore from './store';
import './styles/main.sass';
import ReactGA from 'react-ga';

function App() {
  const store = configureStore()

  useEffect(() => {
    ReactGA.initialize('UA-187541969-1');
    ReactGA.pageview(window.location.pathname + window.location.search + ' portfolio');
  }, [])

  return (
    <div className='backgroundImg'>
      <Provider store={store}>
        <LandingPage />
      </Provider>
    </div>
  );
}

export default App;
