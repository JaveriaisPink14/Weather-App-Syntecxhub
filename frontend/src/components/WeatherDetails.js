import React from 'react';

const WeatherDetails = ({ weather }) => {
  const { main, sys, visibility } = weather;

  return (
    <div className="weather-details-card">
      <h3>Weather Details</h3>
      <div className="details-grid">
        <div className="detail-item">
          <span>Feels like</span>
          <span>{Math.round(main.feels_like)}°C</span>
        </div>
        <div className="detail-item">
          <span>Min Temp</span>
          <span>{Math.round(main.temp_min)}°C</span>
        </div>
        <div className="detail-item">
          <span>Max Temp</span>
          <span>{Math.round(main.temp_max)}°C</span>
        </div>
        <div className="detail-item">
          <span>Pressure</span>
          <span>{main.pressure} hPa</span>
        </div>
        <div className="detail-item">
          <span>Visibility</span>
          <span>{visibility / 1000} km</span>
        </div>
        <div className="detail-item">
          <span>Sunrise</span>
          <span>{new Date(sys.sunrise * 1000).toLocaleTimeString()}</span>
        </div>
        <div className="detail-item">
          <span>Sunset</span>
          <span>{new Date(sys.sunset * 1000).toLocaleTimeString()}</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
