import React from 'react';
import BoardFlightList from './BoardFlightList';
import { connect } from 'react-redux';
import { departuresSelector } from '../flight.selectors';

const DeparturesList = ({ departuresData }) => {
  return <BoardFlightList flightsData={departuresData} />;
};

const mapState = (state) => {
  return {
    departuresData: departuresSelector(state),
  };
};

export default connect(mapState)(DeparturesList);