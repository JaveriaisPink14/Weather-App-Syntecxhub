import React from 'react';

const Forecast = ({ forecast }) => {
  const dailyForecast = forecast.list.filter((item, index) => index % 8 === 0).slice(0, 5);

  return (
    <div className="forecast-card">
      <h3>5-Day Forecast</h3>
      <div className="forecast-grid">
        {dailyForecast.map((day, index) => (
          <div key={index} className="forecast-item">
            <p>{new Date(day.dt * 1000).toLocaleDateString()}</p>
            <img
              src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
              alt={day.weather[0].description}
            />
            <p>{Math.round(day.main.temp)}°C</p>
            <p>{day.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
