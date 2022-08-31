export const today = '10-02-2020';
const baseUrl = `https://api.iev.aero/api/flights/${today}`; //-- original API

// const baseUrl = 'https://6287ac5a7864d2883e8a322f.mockapi.io/api/v1/Flights'; //-castom API
export const fetchFlightList = () => {
  return fetch(baseUrl).then((response) => response.json());
};

export const parseTime = (data) => {
  const hours = new Date(data).getHours();
  const minute = new Date(data).getMinutes();
  const minutes = minute < 10 ? `0${minute}` : minute;
  return `${hours}:${minutes}`;
};

export const parseData = (data) => {
  const day = new Date(data).getDate();
  return day;
};