// Goal: Enable your user to enter a city + country and return the temperature in Fahrenheit
// How to submit your code for review:
// Fork and clone this repo
// Create a new branch called answer
// Checkout answer branch
// Push to your fork
// Issue a pull request
// Your pull request description should contain the following:
// (1 to 5 no 3) I completed the challenge
// (1 to 5 no 3) I feel good about my code
// Anything specific on which you want feedback!

// Goal: Enable your user to enter a city + country and return the temperature in Fahrenheit
// How to submit your code for review:
// Fork and clone this repo
// Create a new branch called answer
// Checkout answer branch
// Push to your fork
// Issue a pull request
// Your pull request description should contain the following:
// (1 to 5 no 3) I completed the challenge
// (1 to 5 no 3) I feel good about my code
// Anything specific on which you want feedback!

let form = document.querySelector("form")
let button = document.getElementById("search");
let apiKey = "c2dd4c00faa746c74724edfe9877d1bc"

form.addEventListener('submit', function(e) {
  e.preventDefault()
  let city = document.getElementById("city").value
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      console.log(response)
      var iconcode = response.weather[0].icon;
      document.querySelector("#weatherIcon").src = "http://openweathermap.org/img/w/" + iconcode + ".png";
      document.getElementById("weatherShow").textContent = response.weather[0].description
    })
    .catch(err => {
      console.log(`error ${err}`)
      alert("sorry, there are no results for your search")
    });
})
