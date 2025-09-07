import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherCard = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchWeather = (lat, lon) => {
      const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
      if (!apiKey) {
        setError('Weather API key is missing.');
        return;
      }
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
      
      axios.get(url)
        .then(response => {
          setWeather(response.data);
        })
        .catch(() => {
          setError('Could not fetch weather data.');
        });
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetchWeather(position.coords.latitude, position.coords.longitude);
        },
        () => {
          setError('Location permission denied. Showing default weather.');
          fetchWeather(20.2961, 85.8245); // Fallback to Bhubaneswar
        }
      );
    } else {
      setError('Geolocation not supported.');
      fetchWeather(20.2961, 85.8245); // Fallback
    }
  }, []);

  if (!weather && !error) {
    return (
      <div className="bg-gradient-to-br from-gray-400 to-gray-600 text-white p-6 rounded-2xl shadow-lg flex items-center justify-center min-h-[148px]">
        <p>Loading Weather...</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between p-6 text-white shadow-lg bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl">
      <div>
        <p className="text-2xl font-bold">{weather ? weather.name : 'Bhubaneswar'}</p>
        <p className="text-5xl font-extrabold">{weather ? `${Math.round(weather.main.temp)}°C` : '--°C'}</p>
        <p className="capitalize">{weather ? weather.weather[0].description : 'Loading...'}</p>
        {error && <p className="mt-2 text-xs opacity-80">{error}</p>}
      </div>
      {weather && (
        <div className="text-7xl opacity-80">
          <i className={`wi wi-owm-${weather.weather[0].id}`}></i>
        </div>
      )}
    </div>
  );
};

export default WeatherCard;