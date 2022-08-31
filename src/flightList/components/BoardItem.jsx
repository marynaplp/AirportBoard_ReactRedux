import React from 'react';
import { parseTime } from '../flightGateway';

const BoardItem = ({ item }) => {
  return (
    <li className="board-list__item">
      <span className="elmt">
        {item.term === 'A' ? (
          <i className="fa-solid fa-a"></i>
        ) : (
          <i className="fa-solid fa-d"></i>
        )}
      </span>
      <span className="elmt">{parseTime(item.actual)}</span>
      <span className="elmt">
        {item['airportToID' + '.' + 'city_en'] ||
          item['airportFromID' + '.' + 'city_en']}
      </span>
      <span className="elmt">landed {parseTime(item.timeTakeofFact)}</span>
      <span className="elmt">
        <div className="company">
          <img
            className="company__image"
            src={`${item.codeShareData[0].airline.en.logoSmallName}`}
            alt=""
          />
          <span className="company__name">
            {' '}
            {item.codeShareData[0].airline.en.name}{' '}
          </span>
        </div>
      </span>
      <span className="elmt">{item.codeShareData[0].codeShare}</span>
    </li>
  );
};

export default BoardItem;