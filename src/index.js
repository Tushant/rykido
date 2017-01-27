import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import LandingPage from './components/App/index';
import './assets/css/main.css';

const App = () => {
  const store = createStore(reducers, {}, applyMiddleware());

  return (
    <Provider store={store}>
      <LandingPage />
    </Provider>
  );
};

ReactDOM.render(<App />, document.querySelector('.root'));
