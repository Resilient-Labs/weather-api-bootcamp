let conditions = {
  "Sunny": "https://upload.wikimedia.org/wikipedia/commons/c/cd/SunnyDay019.jpg",
  "Partly cloudy": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Partly_cloudy_with_a_chance_of_rain_-_panoramio.jpg/1200px-Partly_cloudy_with_a_chance_of_rain_-_panoramio.jpg",
  "Cloudy": "https://upload.wikimedia.org/wikipedia/commons/7/71/Cloudy_weather.jpg",
  "Overcast": "https://upload.wikimedia.org/wikipedia/commons/a/a3/Overcast_skies_from_Tropical_Storm_Danny.jpg",
  "Mist": "https://upload.wikimedia.org/wikipedia/commons/a/ab/Foggy_Mountain_Weather_%28Unsplash%29.jpg",
  "Blowing snow": "https://upload.wikimedia.org/wikipedia/commons/6/61/Blowing_snow%2C_Creag_Mhigeachaidh_-_geograph.org.uk_-_318618.jpg",
  "Blizzard": "https://upload.wikimedia.org/wikipedia/commons/6/61/Blizzard3_-_NOAA.jpg",
  "Fog": "https://upload.wikimedia.org/wikipedia/en/3/33/Dense_Tule_fog_in_Bakersfield%2C_California.jpg",
  "Light drizzle": "https://upload.wikimedia.org/wikipedia/commons/5/5b/Row_of_poplars_in_the_drizzle_-_geograph.org.uk_-_591822.jpg",
  "Light rain": "https://upload.wikimedia.org/wikipedia/commons/3/30/Fishing_in_light_rain_and_stillness_%288295647635%29.jpg",
  "Moderate rain": "https://upload.wikimedia.org/wikipedia/commons/3/30/Fishing_in_light_rain_and_stillness_%288295647635%29.jpg",
  "Heavy rain": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Heavy_Rain.jpg/640px-Heavy_Rain.jpg",
  "Light sleet": "https://upload.wikimedia.org/wikipedia/commons/c/cf/2013-02-23_03_59_28_Graupel_%28snow_pellets%29_in_Elko%2C_Nevada.JPG",
  "Light snow": "https://upload.wikimedia.org/wikipedia/commons/9/9e/D%C3%BCsseldorf_Hofgarten_2009.jpg",
  "Moderate snow": "https://upload.wikimedia.org/wikipedia/commons/9/9e/D%C3%BCsseldorf_Hofgarten_2009.jpg",
  "Heavy snow": "https://png.pngtree.com/thumb_back/fh260/background/20220711/pngtree-the-road-496-is-blanketed-in-heavy-snow-amidst-unfavorable-weather-conditions-photo-image_32657340.jpg",
  "Ice pellets": "https://upload.wikimedia.org/wikipedia/commons/0/0f/2019-02-20_10_52_19_Sleet_%28ice_pellets%29_on_a_car_in_the_Dulles_section_of_Sterling%2C_Loudoun_County%2C_Virginia.jpg",
  "Light rain shower": "https://upload.wikimedia.org/wikipedia/commons/c/cf/Averse_en_Haute-Savoie.JPG",
  "default": '../img/sky.jpg'
}


class WeatherReport {
  constructor() {}
  getWeather() {
    const location = document.querySelector('input').value;
    console.log(location);
    if (location != '') {
      fetch(`https://api.weatherapi.com/v1/current.json?q=${location}&key=3dbe885aba8446698ce144944252603`)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          console.log(data.current.condition.text)
          document.querySelector('section.report').classList.remove('hide');
          document.querySelector('h3').innerText = `${data.location.name}, ${data.location.country}`;
          document.querySelector('h4').innerText = `${Math.floor(data.current.temp_f)}ºF | ${Math.floor(data.current.temp_c)}ºC`;
          document.querySelector('h5').innerText = `Feels like: ${Math.floor(data.current.feelslike_f)}ºF | ${Math.floor(data.current.feelslike_c)}ºC`;
          document.querySelector('h6').innerText = `UV: ${data.current.uv} | ${data.current.uv > 10 ? 'Extreme, Take full precaution' : data.current.uv > 7 ? 'Very High, Extra precaution required' : data.current.uv > 5 ? 'High, Protection required' : data.current.uv > 2 ? 'Moderate, Take precautions': 'Low, Minimal sun protection required'}`;
          document.querySelector('img').src = data.current.condition.icon;
          document.querySelector('img').alt = data.current.condition.text;
          document.querySelector('body').style.backgroundImage = `url(${conditions[data.current.condition.text] || conditions.default})`;
        })
        .catch(err => {
          console.log(err);
        })
    } 
  }
}


const weather = new WeatherReport();


document.querySelector('button').addEventListener('click', weather.getWeather.bind(weather));