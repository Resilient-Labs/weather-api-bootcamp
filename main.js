// Goal: Enable your user to enter a city + country and return the temperature in Fahrenheit
// Convert to fahrenheit


const userInput = document.querySelector("#city");
const descriptionDiv = document.querySelector(".description");
const getWeatherBtn = document.querySelector("button");
getWeatherBtn.addEventListener("click", getWeather);

const url = "https://api.weatherstack.com/current";
const apiParam = "?access_key=";
const apiKey = "8e812ce7277b2cefa8e757f02fcc48e6";
const unitParam = "&units=f";
const queryParam = "&query=";

async function getWeather() {
  const userInputValue = userInput.value;
  // const [city, country] = userInputValue.split(',');
  const apiReqUrl = url + apiParam + apiKey + unitParam + queryParam + userInputValue;
  const options = {
    method: "GET",
  };
  try {
    const response = await fetch(apiReqUrl, options);
    const result = await response.json()
    const {current, location} = result; 
    const {region, name} = location;
    const {weather_descriptions, weather_icons, temperature} = current;
    const locationDetails = `${name}, ${region}`
    const weatherDetails = `${temperature}, ${weather_descriptions}`
    document.querySelector('#weatherIcon').src = weather_icons[0];
    descriptionDiv.innerText = `${locationDetails}
    ${weatherDetails}`;

    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

// const url = 'https://api.weatherstack.com/current?access_key={PASTE_YOUR_API_KEY_HERE}&query=New Delhi';
// const options = {
// 	method: 'GET'
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
