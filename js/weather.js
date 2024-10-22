import weatherApiKeys from "./apiKey.js";

const key1 = weatherApiKeys.GEO_KEY;
const key2 = weatherApiKeys.WEATHER_KEY;

document.querySelector("button").addEventListener("click", getWeather);

function getWeather(e) {
  e.preventDefault();

  const city = document.querySelector("#cityInput").value;
  const country = document.querySelector("#countryInput").value;
  const tempDisplay = document.querySelector("#tempDisplay");

  fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=1&appid=${key1}`
  )
    .then((response) => response.json()) // parse response as JSON
    .then((dataOne) => {
      // console.log(dataOne);

      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${dataOne[0].lat}&lon=${dataOne[0].lon}&appid=${key2}`
      )
        .then((response) => response.json())
        .then((dataTwo) => {
          // console.log(dataTwo);
          let temp = dataTwo.main.temp;
          temp = Math.floor(((temp - 273.15) * 9) / 5 + 32);
          tempDisplay.innerText = `${temp} °F`;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    })

    .catch((err) => {
      console.log(`error ${err}`);
    });
}
