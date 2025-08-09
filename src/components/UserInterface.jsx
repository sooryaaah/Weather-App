import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MapPinIcon, MagnifyingGlassIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

const UserInterface = () => {
  const [location, setLocation] = useState('Kerala');
  const [weatherData, setWeatherData] = useState(null);
  const [isDay, setIsDay] = useState(true); 

  const fetchWeather = async (loc = location) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${import.meta.env.VITE_API_KEY}&units=metric`
      );
      console.log(response.data);
      setWeatherData(response.data);

      // Determine if it's day or night
      const now = Date.now() / 1000; // current time in seconds
      const { sunrise, sunset } = response.data.sys;
      setIsDay(now >= sunrise && now < sunset);
    } catch (error) {
      console.error('error fetching weather:', error);
    }
  };

  useEffect(() => {
    fetchWeather('Kerala');
  }, []);

  const getWeatherColor = () => {
    if (!weatherData) return 'bg-blue-700';
    const main = weatherData.weather[0].main.toLowerCase();
    if (main.includes('cloud')) return 'bg-gray-500';
    if (main.includes('rain')) return 'bg-blue-900';
    if (main.includes('clear')) return 'bg-yellow-500';
    if (main.includes('snow')) return 'bg-blue-300';
    if (main.includes('thunder')) return 'bg-purple-700';
    return 'bg-blue-700';
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="flex flex-col sm:flex-row justify-between bg-gray-50 border-y-2 border-gray-100 p-3 sm:p-0">
        <div className="m-3 text-center sm:text-left">
          <h1 className="text-blue-500 text-3xl font-bold">WeatherPro</h1>
          <p className="text-gray-500 text-sm">Global Weather Intelligence</p>
        </div>
        <div className="m-3 sm:m-5 flex justify-center gap-4 my-auto sm:mr-10">
          <button className="border border-gray-300 rounded-md w-10 h-8 bg-gray-200 hover:bg-blue-400 transition duration-200 ease-in-out cursor-pointer">
            ☰
          </button>
          <button className="border border-gray-300 rounded-md w-10 pl-3 h-8 bg-gray-200 hover:bg-blue-400 transition duration-200 ease-in-out cursor-pointer">
            <img
              width="16"
              height="16"
              src="https://img.icons8.com/ios/100/settings--v1.png"
              alt="settings"
            />
          </button>
        </div>
      </nav>

      {/* Search bar */}
      <div className="flex items-center justify-center">
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl p-4 rounded mt-6">
          {/* Input */}
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <MapPinIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              onChange={(e) => setLocation(e.target.value)}
              type="text"
              placeholder="Enter your location"
              className="bg-white w-full pl-10 pr-4 py-3 text-lg border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Search button */}
          <button
            onClick={() => fetchWeather()}
            className="bg-blue-600 px-5 text-white rounded hover:bg-blue-500 transition cursor-pointer flex items-center justify-center"
          >
            <MagnifyingGlassIcon className="h-5 w-5" />
          </button>

          {/* Refresh button */}
          <button
            onClick={() => {
              setLocation('Kerala');
              fetchWeather('Kerala');
            }}
            className="bg-gray-200 text-gray-700 p-3 rounded hover:bg-gray-300 transition cursor-pointer flex items-center justify-center"
          >
            <ArrowPathIcon className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Weather main card */}
      {weatherData && (
        <section className="p-5 sm:p-10">
          <div className={`mx-auto max-w-4xl ${getWeatherColor()} p-10 sm:p-20 rounded-lg`}>
            <div className="flex flex-col items-center space-y-5">
              <h1 className="text-5xl sm:text-6xl font-bold text-white">
                {weatherData?.main?.temp}°C
              </h1>
              <p className="text-xl sm:text-2xl text-white">
                {weatherData?.weather?.[0]?.description}
              </p>
              <p className="text-white">{weatherData?.name}</p>
              {/* Day/Night indicator */}
              <p className="text-white text-sm opacity-80">
                {isDay ? '☀️ Day-time' : '🌙 Night-time'}
              </p>
            </div>

            {/* Weather small cards */}
            <div className="flex flex-col sm:flex-row justify-evenly gap-4 sm:gap-8 mt-10">
              <div className="bg-gray-200/10 h-32 sm:h-40 w-full sm:w-60 py-8 sm:py-12 rounded-lg">
                <p className="text-center text-sm text-white">Feels like</p>
                <p className="font-semibold text-xl sm:text-2xl text-center text-white">
                  {weatherData?.main?.feels_like}°C
                </p>
              </div>
              <div className="bg-gray-200/10 h-32 sm:h-40 w-full sm:w-60 py-8 sm:py-12 rounded-lg">
                <p className="text-center text-sm text-white">Humidity</p>
                <p className="font-semibold text-xl sm:text-2xl text-center text-white">
                  {weatherData?.main?.humidity}%
                </p>
              </div>
              <div className="bg-gray-200/10 h-32 sm:h-40 w-full sm:w-60 py-8 sm:py-12 rounded-lg">
                <p className="text-center text-sm text-white">Wind speed</p>
                <p className="font-semibold text-xl sm:text-2xl text-center text-white">
                  {weatherData?.wind?.speed} m/s
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Weather details grid */}
      {weatherData && (
        <section>
          <div className="mx-4 sm:mx-16 bg-white rounded-lg border border-gray-300">
            <h1 className="font-semibold text-lg sm:text-xl px-5 sm:px-10 pt-5">
              Weather details
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 bg-white gap-5 p-5 sm:p-10">
              {[
                { label: 'Pressure', value: `${weatherData?.main?.pressure} hPa`, note: weatherData?.main?.pressure > 1013 ? 'High' : 'Low' },
                { label: 'Visibility', value: `${(weatherData?.visibility / 1000).toFixed(1)} km`, note: weatherData?.visibility > 10000 ? 'Excellent' : 'Moderate' },
                { label: 'Wind Direction', value: `${weatherData?.wind?.deg}°`, note: `${weatherData?.wind?.speed} m/s` },
                { label: 'Sunrise', value: new Date(weatherData?.sys?.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), note: 'AM' },
                { label: 'Sunset', value: new Date(weatherData?.sys?.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), note: 'PM' },
                { label: 'Country', value: weatherData?.sys?.country, note: 'Region' }
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-5 bg-gray-50 rounded border border-gray-100"
                >
                  <p className="text-center text-sm text-gray-500">{item.label}</p>
                  <h1 className="text-center font-bold text-lg">{item.value}</h1>
                  <p className="text-center text-sm text-gray-500">{item.note}</p>
                </div>
              ))}
            </div>

            {/* Bottom highlights */}
            <div className="flex flex-col sm:flex-row justify-around rounded border border-blue-100 bg-blue-50 p-4 mx-5 sm:mx-10 mb-8 gap-4 sm:gap-0">
              <div>
                <p className="text-gray-500 text-sm">Air Quality</p>
                <h1 className="text-center text-lg font-semibold text-blue-400">
                  Good
                </h1>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Comfort level</p>
                <h1 className="text-center text-lg font-semibold text-blue-400">
                  {weatherData?.main?.humidity > 70 ? 'Humid' : 'Comfortable'}
                </h1>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Weather Trend</p>
                <h1 className="text-center text-lg font-semibold text-blue-400">
                  Stable
                </h1>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-500 py-8 mt-10">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-center">
          <p className="text-sm">🌍 Global Coverage</p>
          <p className="text-sm">⚡ Real-time Updates</p>
          <p className="text-sm">📊 Detailed Analytics</p>
          <p className="text-sm">🎯 Accurate Forecasts</p>
        </div>
        <div>
          <p className="mt-4 text-center">
            Professional weather monitoring for informed decisions
          </p>
        </div>
      </footer>
    </div>
  );
};

export default UserInterface;
