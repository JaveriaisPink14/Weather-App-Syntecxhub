import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import WeatherDetails from './components/WeatherDetails';
import Forecast from './components/Forecast';
import HistoryList from './components/HistoryList';
import ErrorMessage from './components/ErrorMessage';
import Loader from './components/Loader';

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchWeather = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/weather?city=${city}`);
      if (!response.ok) throw new Error('City not found');
      const data = await response.json();
      setWeather(data);
      await saveToHistory(city);
      fetchForecast(city);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchForecast = async (city) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/forecast?city=${city}`);
      if (!response.ok) throw new Error('Forecast not available');
      const data = await response.json();
      setForecast(data);
    } catch (err) {
      console.error('Forecast error:', err);
    }
  };

  const fetchHistory = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/history`);
      const data = await response.json();
      setHistory(data);
    } catch (err) {
      console.error('History error:', err);
    }
  };

  const saveToHistory = async (city) => {
    try {
      await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/history`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ city }),
      });
      fetchHistory();
    } catch (err) {
      console.error('Save history error:', err);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className="container">
        <SearchBar onSearch={fetchWeather} />
        {loading && <Loader />}
        {error && <ErrorMessage message={error} />}
        {weather && (
          <>
            <WeatherCard weather={weather} />
            <WeatherDetails weather={weather} />
          </>
        )}
        {forecast && <Forecast forecast={forecast} />}
        <HistoryList history={history} onSelectCity={fetchWeather} />
      </div>
    </div>
  );
}

export default App;
