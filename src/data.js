export const WEATHER_DATA = [
  { id: "warszawa", city: "Warszawa", temp: 18, condition: "Słonecznie", icon: "☀️", windSpeed: 15, windDir: "NW", rainProb: 10, rainType: "brak", rainAmount: 0, clouds: 15, forecast: [19, 21, 22, 20, 18] },
  { id: "krakow", city: "Kraków", temp: 16, condition: "Częściowe zachmurzenie", icon: "⛅", windSpeed: 10, windDir: "S", rainProb: 25, rainType: "mżawka", rainAmount: 0.5, clouds: 45, forecast: [17, 18, 16, 15, 14] },
  { id: "gdansk", city: "Gdańsk", temp: 14, condition: "Burzowo", icon: "⛈️", windSpeed: 35, windDir: "W", rainProb: 90, rainType: "deszcz", rainAmount: 5.2, clouds: 100, forecast: [13, 12, 11, 13, 14] },
  { id: "wroclaw", city: "Wrocław", temp: 20, condition: "Lekkie opady", icon: "🌦️", windSpeed: 8, windDir: "E", rainProb: 30, rainType: "deszcz", rainAmount: 1.2, clouds: 25, forecast: [22, 24, 25, 23, 21] },
  { id: "poznan", city: "Poznań", temp: 17, condition: "Pochmurno", icon: "☁️", windSpeed: 12, windDir: "NE", rainProb: 15, rainType: "brak", rainAmount: 0, clouds: 60, forecast: [16, 17, 18, 17, 16] }
];

export const formatTemperature = (value, unit) => {
  if (unit === 'F') return Math.round((value * 9) / 5 + 32) + "°F";
  if (unit === 'K') return Math.round(value + 273.15) + " K";
  return value + "°C";
};