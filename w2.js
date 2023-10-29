const searchInput = document.querySelector("#searchInput");
const buttonSL = document.querySelector("#btn");
const list = document.querySelector("#list");
const statecode = "";

buttonSL.addEventListener("click", weatherCheck);

function weatherCheck() {
  const city = searchInput.value.trim();
  if (city.length === 0) {
    alert("Please enter a valid city name");
    return;
  }
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${statecode}&appid=825e3828e8d560f330f90e751147d7f3&units=metric`;
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      displayWeatherData(data);
    })
    .catch((error) => {
      console.error("There was a problem fetching the weather data:", error);
      alert("There was a problem fetching the weather data. Please try again later.");
    });
}

function displayWeatherData(data) {
  const city = data.name;
  const temperature = data.main.temp;
  const temperatureFahrenheit = (temperature * 9/5) + 32;
  const weatherDescription = data.weather[0].description;
  const iconCode = data.weather[0].icon;
  const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
  const html = `
    <li>
      <img src="${iconUrl}" alt="${weatherDescription}">
      <h2>${city}</h2>
      <p>${temperatureFahrenheit.toFixed(1)}°F (${temperature.toFixed(1)}°C)</p>
      <p>${weatherDescription}</p>
    </li>
  `;
  list.innerHTML = html;
}
