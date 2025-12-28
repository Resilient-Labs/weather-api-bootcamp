//Enable your user to enter a city + country and return the temperature in Fahrenheit

//Adding event listern on the click 
//Creating the click function
//Assignment variables for input, apiKey and the url
//Adding query parameters in the url
//fetching data reciveived from API through json
//Displaying data as innerText on the DOM
//catching all errors that may occur

document.querySelector('#search').addEventListener('click', checkWeather)

function checkWeather(){
   const inputCity = document.querySelector('input').value
   const key = '0e904a2a7aacc8772e00052c29bf80c8'
   const url =`https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&APPID=${key}`


   fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      document.querySelector('h2').innerText = `${((data.main.temp - 273.15) * 9/5 + 32).toFixed(1)} °F`;
   })
    .catch(error => console.error(error)); 
}
