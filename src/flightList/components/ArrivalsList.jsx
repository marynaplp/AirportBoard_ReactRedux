import React from 'react';
import BoardFlightList from './BoardFlightList';
import { connect } from 'react-redux';
import { arrivalsSelector } from '../flight.selectors';

const ArrivalsList = ({ arrivalsData }) => {
  return <BoardFlightList flightsData={arrivalsData} />;
};

const mapState = (state) => {
  return {
    arrivalsData: arrivalsSelector(state),
  };
};

export default connect(mapState)(ArrivalsList);