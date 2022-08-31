import { FLIGHT_DATA_RECIVED } from './flight.actions';

const initialState = {
  flightData: null,
};

const flightReducer = (state = initialState, action) => {
  switch (action.type) {
    case FLIGHT_DATA_RECIVED: {
      return {
        ...state,
        flightData: action.payload,
      };
    }
    default:
      return state;
  }
};
export default flightReducer;