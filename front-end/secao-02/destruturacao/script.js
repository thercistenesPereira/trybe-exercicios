const data = {
  "location": {
      "name": "Sao Paulo",
      "region": "Sao Paulo",
      "country": "Brazil",
      "lat": -23.53,
      "lon": -46.62,
      "tz_id": "America/Sao_Paulo",
      "localtime_epoch": 1677457628,
      "localtime": "2023-02-23 21:27"
  },
  "current": {
      "last_updated_epoch": 1677456900,
      "last_updated": "2023-02-23 21:15",
      "temp_c": 25.0,
      "temp_f": 77.0,
      "is_day": 0,
      "condition": {
          "text": "Clear",
          "icon": "//cdn.weatherapi.com/weather/64x64/night/113.png",
          "code": 1000
      },
      "wind_mph": 2.2,
      "wind_kph": 3.6,
      "wind_degree": 189,
      "wind_dir": "S",
      "pressure_mb": 1018.0,
      "pressure_in": 30.06,
      "precip_mm": 0.6,
      "precip_in": 0.02,
      "humidity": 65,
      "cloud": 0,
      "feelslike_c": 27.5,
      "feelslike_f": 81.5,
      "vis_km": 10.0,
      "vis_miles": 6.0,
      "uv": 1.0,
      "gust_mph": 8.5,
      "gust_kph": 13.7
  }
}

const { location } = data
console.log(location);