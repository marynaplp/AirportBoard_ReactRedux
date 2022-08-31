import { configureStore } from '@reduxjs/toolkit';
import flightReducer from './flightList/flight.reducer';
import thunk from 'redux-thunk';

const store = configureStore({
  reducer: {
    flight: flightReducer,
  },
  middleware: [thunk],
});

export default store;