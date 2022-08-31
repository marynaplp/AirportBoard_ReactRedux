import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import FlightsList from './flightList/components/FlightsList';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <FlightsList />
      </Provider>
    </BrowserRouter>
  );
};

export default App;