// example api call: api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=apiKey
import { apiKey } from './apiKey.js';

const btn = document
  .querySelector('#btn')
  .addEventListener('click', getWeather);

function getWeather() {
  const city = document.querySelector('#city').value.toLowerCase();
  const country = document.querySelector('#country').value.toLowerCase();
  const temp = document.querySelector('#temp'); 
  const feels_like = document.querySelector('#feels_like'); 
  const max_temp = document.querySelector('#max_temp'); 
  const min_temp = document.querySelector('#min_temp'); 
  const humidity = document.querySelector('#humidity'); 
  const sunrise = document.querySelector('#sunrise');
  const sunset = document.querySelector('#sunset');
 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${apiKey}&units=imperial`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      temp.textContent = data.main.temp; 
      feels_like.textContent = data.main.feels_like;
      max_temp.textContent = data.main.temp_max; 
      min_temp.textContent = data.main.temp_min; 
      humidity.textContent = `${data.main.humidity}%`; 
      sunrise.textContent = new Date(data.sys.sunrise * 1000); 
      sunset.textContent = new Date(data.sys.sunset * 1000);

    }).catch(err => console.error(err)); 
}


