import React, { useState } from 'react'
import axios from 'axios' 

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=7ca999a90b412050fed193b3c8ad3a26`
  const searchLocation = (event) => {
    if (event.key === 'Enter'){
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('');
    }
  }
// Time function referenced from Tutorial - https://www.youtube.com/watch?v=_L6vpV_3SaE 
function updateClock() {
  const timeEl = document.querySelector(".time");
  const dateEl = document.querySelector(".date");
  
  if (!timeEl || !dateEl) return;
  
  const now = new Date();
  const h = now.getHours();
  const m = now.getMinutes();
  const ampm = h < 12 ? "AM" : "PM";
  const h12 = h % 12 || 12;

  timeEl.textContent = `${h12 < 10 ? "0" : ""}${h12}:${m < 10 ? "0" : ""}${m} ${ampm}`;

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  dateEl.textContent = `${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()} ${now.getFullYear()}`;
}

// Use setTimeout to ensure DOM is ready
setTimeout(() => {
  updateClock();
  setInterval(updateClock, 1000);
}, 0);

  return (
    <div class="app">
      <div class="search">
        <input value = {location}
        onChange = {event => setLocation (event.target.value)}
        placeholder = 'Enter City e.g Boston'
        onKeyPress = {searchLocation}
        type="text"></input>
      </div>
      
      <div class="datetime">
        <div class="time"></div>
        <div class="date"></div>
      </div>      

      <div class="container">

        <div class="top">
          <div class="left">
          <div class="location">
            <h2>{data.name}</h2>
          </div>
          <div class="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
          </div>
          </div>
          <div class="right">
          <div class="description">
            {data.weather ? <h3>{data.weather[0].main}</h3> : null}
          </div>
          <div class="weatherIcon">
          {data.weather ? <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt="weather icon" /> : null}
          </div>
          </div>
        </div>

        {data.name != undefined &&
        <div class="bottom">
                  <div class="feels">
                    {data.main ?<p class="bold">{data.main.feels_like.toFixed()}°F</p> : null}
                    <p>Feels Like</p>
                  </div>
                  <div class="humidity">
                    {data.main ? <p class="bold">{data.main.humidity}%</p> : null}
                    <p>Humidity</p>            
                  </div>
                  <div class="wind">
                    {data.main ? <p class="bold">{data.wind.speed}MPH</p> : null}
                    <p>Wind Speed</p>
                  </div>
        </div>
        }
      </div>
    </div>  
  );
}

export default App;


// Citation:
// Referenced from Tutorial:https://www.youtube.com/watch?v=UjeXpct3p7M