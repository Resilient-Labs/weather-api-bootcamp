// Enable your user to enter a city + country and return the tempature in Fahrenheit

// document.queryselector for addeventlistner for button
document.querySelector("button").addEventListener("click", getWeather);

// variable to target the value of the input
// function to fetch weather from api
// convert Kelvin to Farenheit formula: 1.8 * (variable - 273) + 32

function getWeather() {
  const cityInput = document.querySelector("input").value;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=59ecd2cd8fb9f031b09306ed60bab00b`
  )
    .then((res) => res.json())
    .then((data) => {
      let kelvinTemp = data.main.temp;
      let convertTemp = 1.8 * (kelvinTemp - 273) + 32;
        document.querySelector("h2").innerText = `The current tempature is: ${Math.floor(convertTemp)}`;
    })
    .catch((err) => {
        document.querySelector("h2").innerText = `Error: Not A City`;
    });
}
