import React, { useState, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { WEATHER_DATA, formatTemperature } from '../data';

const WeatherList = () => {
  const [query, setQuery] = useState("");

  const unit = useSelector((state) => state.settings.unit);

  const handleSearch = useCallback((e) => {
    setQuery(e.target.value);
  }, []);


  const filtered = useMemo(() => {
    return WEATHER_DATA.filter((c) =>
      c.city.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <section>
      {}
      <div className="search-container">
        <input
          type="text"
          placeholder="Wyszukaj swoje miasto..."
          value={query}
          onChange={handleSearch}
          className="search-input"
        />
      </div>

      {/* miastaa */}
      <div className="grid">
        {filtered.length > 0 ? (
          filtered.map((c) => (
            <div key={c.id} className="card">
              <span className="icon">{c.icon}</span>
              <h2>{c.city}</h2>
              <p className="temp">{formatTemperature(c.temp, unit)}</p>
              <p style={{ color: '#6b7280', marginBottom: '15px' }}>{c.condition}</p>
              <Link to={`/miasto/${c.id}`} className="details-btn">
                Szczegóły pogody
              </Link>
            </div>
          ))
        ) : (
          <p style={{ textAlign: 'center', gridColumn: '1/-1', color: '#6b7280' }}>
            Nie znaleziono miasta o tej nazwie.
          </p>
        )}
      </div>
    </section>
  );
};

export default WeatherList;