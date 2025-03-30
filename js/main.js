//User enters city and country
    //input field in the HTML
//Presses a button called get weather
    //button with id called getWeather in the HTML
//Button asks for weather data
    //create an event listener that when you click on the button it calls the fetch api and returns with parsed JSON 
//Weather data comes back and shows on the screen with city, country, and both temps
    //display parsed JSON results with innerText

//Docs: https://weatherstack.com/documentation

const getWeatherBtn = document.querySelector('#getWeatherBtn');

getWeatherBtn.addEventListener('click', getWeather);

function getWeather(){
//enter city and country
const enterCityAndCountry = document.querySelector('#enterCityAndCountry').value;

//display city and country
const showCity = document.querySelector('#showCity');
const showCountry = document.querySelector('#showCountry');

//temperature in Farenheit and units
const farenheit = document.querySelector('#farenheit');
const currentUnit = "f";

//display other metrics
const latitudeCoordinates = document.querySelector('#latitudeCoordinates');
const longitudeCoordinates = document.querySelector('#longitudeCoordinates');
const weatherDescriptions = document.querySelector('#weatherDescriptions');
const timezone = document.querySelector('#timezone');
const feelsLike = document.querySelector('#feelsLike');
const humidity = document.querySelector('#humidity');

//generate api key then put api base url + api key to get the data
const apiKey = "883fbaf3a2a541ff4d5abcf296d500a8";
const url = `https://api.weatherstack.com/current?access_key=${apiKey}&query=${enterCityAndCountry}&units=${currentUnit}`;

fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        showCity.innerText = `City: ${data.location.name}`;
        showCountry.innerText = `Country: ${data.location.country}`;
        farenheit.innerText = `Current temp: ${data.current.temperature}`;
        latitudeCoordinates.innerText = `Latitude: ${data.location.lat}`;
        longitudeCoordinates.innerText = `Longitude: ${data.location.lon}`;
        weatherDescriptions.innerText = `Weather Descriptions: ${data.current.weather_descriptions}`;
        timezone.innerText = `Timezone: ${data.location.timezone_id}`;
        feelsLike.innerText = `Feels like: ${data.current.feelslike}`;
        humidity.innerText = `Humidity: ${data.current.humidity}`;
    })
    .catch(err => {
        console.log(`You have an error of ${err.error}`);
    })
}
