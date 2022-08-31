export const FLIGHT_DATA_RECIVED = 'FLIGHT_DATA_RECIVED';
import { fetchFlightList } from './flightGateway';

export const flightDataRecived = (flightData) => {
  return {
    type: FLIGHT_DATA_RECIVED,
    payload: flightData,
  };
};

export const fetchDataRecived = () => {
  return function (dispatch) {
    fetchFlightList().then((flightData) =>
      dispatch(flightDataRecived(flightData))
    );
  };
};