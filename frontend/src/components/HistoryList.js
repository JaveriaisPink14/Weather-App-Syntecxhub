import React from 'react';

const HistoryList = ({ history, onSelectCity }) => {
  return (
    <div className="history-card">
      <h3>Search History</h3>
      <ul className="history-list">
        {history.map((item) => (
          <li key={item.id} onClick={() => onSelectCity(item.city)}>
            {item.city}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistoryList;
