import React, { useReducer } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { WEATHER_DATA, formatTemperature } from '../data';

const WeatherDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const unit = useSelector((state) => state.settings.unit);
  const [visible, toggle] = useReducer((s) => !s, true);
  const city = WEATHER_DATA.find((c) => c.id === id);

  if (!city) return <p>Nie znaleziono miasta.</p>;

  return (
    <div className="details">
      <button onClick={() => navigate('/')}>Powrót</button>
      <h2>{city.city} {city.icon}</h2>
      <div className="info">
        <p>Temperatura: {formatTemperature(city.temp, unit)}</p>
        <p>Wiatr: {city.windSpeed} km/h ({city.windDir})</p>
        <p>Opady: {city.rainProb}% ({city.rainAmount}mm)</p>
        <p>Zachmurzenie: {city.clouds}%</p>
      </div>
      <button onClick={toggle}>Pokaż/Ukryj prognozę</button>
      {visible && (
        <div className="forecast">
          {city.forecast.map((t, i) => (
            <div key={i} className="f-item">Dzień {i+1}: {formatTemperature(t, unit)}</div>
          ))}
        </div>
      )}
    </div>
  );
};
export default WeatherDetails;