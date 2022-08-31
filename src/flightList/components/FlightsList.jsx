import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import DeparturesList from './DeparturesList';
import ArrivalsList from './ArrivalsList';
import CreateFlightInput from './CreateFlightInput';
import NavigationBar from './NavigationBar';
import { connect } from 'react-redux';
import * as allActions from '../flight.actions';
import { useSearchParams } from 'react-router-dom';

const FlightsList = ({ fetchDataRecived }) => {
  const [searchParam, setSearchParam] = useSearchParams();

  useEffect(() => {
    fetchDataRecived();
  });

  return (
    <div className="page">
      <h1 className="page_title">SEARCH FLIGHT</h1>
      <main className="page_search">
        <CreateFlightInput setSearchParam={setSearchParam} />
        <Routes>
          <Route
            path="/departures"
            element={
              <>
                <NavigationBar activeTabDep={true} searchParam={searchParam} />
                <DeparturesList />
              </>
            }
          />
          <Route
            path="/arrivals"
            element={
              <>
                <NavigationBar activeTabArr={true} searchParam={searchParam} />
                <ArrivalsList />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <NavigationBar activeTabDep={true} searchParam={searchParam} />
                <DeparturesList />
              </>
            }
          />
        </Routes>
      </main>
    </div>
  );
};

const mapDispatch = {
  fetchDataRecived: allActions.fetchDataRecived,
};

export default connect(null, mapDispatch)(FlightsList);