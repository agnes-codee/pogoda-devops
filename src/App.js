import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { changeUnit } from './store';
import WeatherList from './components/WeatherList';
import WeatherDetails from './components/WeatherDetails';
import './App.css';

function App() {
  const unit = useSelector((state) => state.settings.unit);
  const dispatch = useDispatch();

  return (
    <Router>
      <div className="container">
        <header className="main-header">
          <h1>Pogoda na każdy dzień</h1>
          <nav>
            <Link to="/" className="nav-link">Strona Główna</Link>
            <div className="unit-controls">
              {['C', 'F', 'K'].map((u) => (
                <button
                  key={u}
                  className={unit === u ? 'active' : ''}
                  onClick={() => dispatch(changeUnit(u))}
                >
                  {u}
                </button>
              ))}
            </div>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<WeatherList />} />
            <Route path="/miasto/:id" element={<WeatherDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
export default App;
