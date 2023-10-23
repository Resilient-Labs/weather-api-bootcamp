const apiKey = "18cc6c6bae18dd40e7bbdf0ee1e74b6d";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

//fetching city
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector("error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
  }

  var data = await response.json();

  //weather info
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°F";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " mph";

  //if conditionals
  if (data.weather[0].main == "Cloudy") {
    weatherIcon.src = "images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "images/clear.png";
  } else if (data.weather[0].main == "Rainy") {
    weatherIcon.src = "images/rain.png";
  } else if (data.weather[0].main == "Drizzling") {
    weatherIcon.src = "images/drizzle.png";
  } else if (data.weather[0].main == "Misty") {
    weatherIcon.src = "images/mist.png";
  } else if (data.weather[0].main == "Snowing") {
    weatherIcon.src = "images/snow.png";
  }

  document.querySelector(".weather").style.display = "block";
}

//event listener for search box
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
