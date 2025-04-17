// Enable your user to enter a city + country and return the temperature in Fahrenheit
// Get the city name from the input field in html
//On button click, fetch the weather data for that city
// Show temperature in Fahrenheit
// Display results inside #outputWeather.


//event listener
document.querySelector('#getWeatherBtn').addEventListener('click', getWeather) // getWeather is the callback function that we will call on the next line when we create the function. 

// getWeather function for the click event
function getWeather() {
  const city = document.querySelector('#cityInput').value;// .value is getting the value that the user had stored in the input section of html 
  const apiKey = 'feb66035e870d60ca8281c12b2f8108a' // apiKey will represent the api key for the api call
  // asigning a variable for the url so that we can add the full api link inside, building a string so that it can be fetched afterwards
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial` // template literal will add the city and api so that it will appear in the url


fetch(url)
.then(res => res.json()) //parse response as JSON creates a readable file for the browser to read before returning the input
.then(data => {
  console.log(data)
  const temp = data.main.temp // main allows me to get the main weather data
  const descript = data.weather[0].description
  const humidity = data.main.humidity 
  const convertTemp = (temp * 9/5) + 32 // convert celsius into fahrenheit 

  const outputElement = document.querySelector('#outputWeather')
  outputElement.innerHTML = ` Temperture: ${temp.toFixed(2)} '\u00B0 F' condition: ${descript} Humidity: ${humidity} %` 
})

.catch (err => {
  console.log(`error ${ err }`)
  });


}


