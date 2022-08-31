import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = ({ activeTabDep, activeTabArr, searchParam }) => {
  return (
    <div className="navigation-bar ">
      <div className="navigation">
        <Link to={searchParam ? `/departures?${searchParam}` : '/departures'}>
          <div
            className={`navigation__item ${
              activeTabDep && 'navigation__item-selected'
            }`}
          >
            <i className="fa-solid fa-plane-departure "></i>
            Departures
          </div>
        </Link>
        <Link to={searchParam ? `/arrivals?${searchParam}` : '/arrivals'}>
          <div
            className={`navigation__item ${
              activeTabArr && 'navigation__item-selected'
            }`}
          >
            <i className="fa-solid fa-plane-arrival "></i>
            Arrivals
          </div>
        </Link>
      </div>

      <div className="list-title">
        <ul className="list-title__board">
          <li className="list-title__item">Terminal</li>
          <li className="list-title__item">Local time</li>
          <li className="list-title__item">Destination</li>
          <li className="list-title__item">Status</li>
          <li className="list-title__item">Airline</li>
          <li className="list-title__item">Flight</li>
        </ul>
      </div>
    </div>
  );
};
export default NavigationBar;