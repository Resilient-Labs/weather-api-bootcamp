// url
// apikey 9e6ff08731cb40ea9cc182921250210

let API_KEY = '9e6ff08731cb40ea9cc182921250210'
// let url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${userInput}`

let btn = document.querySelector('button')
let result = document.querySelector('#result')
btn.addEventListener("click", getWeatherData)

function getWeatherData(){
      let userInput = document.querySelector('#userInput').value


      
  if (!userInput) {
    alert("Please enter a city name!");
    return;
  }

  let url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${userInput}`;


fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    console.log("City:", data.location.name);
    console.log("Country:", data.location.country);
    console.log("Temperature (F):", data.current.temp_f);
    result.innerHTML = `<p>${data.location.name}, ${data.location.country}! and the temp in Fahrenheit is ${data.current.temp_f}`
  })
  .catch(err => {
    console.error("Error:", err);
  });
}