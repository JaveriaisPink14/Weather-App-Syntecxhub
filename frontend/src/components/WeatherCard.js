import React from 'react';

const WeatherCard = ({ weather }) => {
  const { name, main, weather: weatherInfo, wind } = weather;
  const iconUrl = `http://openweathermap.org/img/wn/${weatherInfo[0].icon}@2x.png`;

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <img src={iconUrl} alt={weatherInfo[0].description} />
      <p className="temperature">{Math.round(main.temp)}°C</p>
      <p className="description">{weatherInfo[0].description}</p>
      <div className="weather-details">
        <p>Humidity: {main.humidity}%</p>
        <p>Wind: {wind.speed} m/s</p>
      </div>
    </div>
  );
};

export default WeatherCard;
