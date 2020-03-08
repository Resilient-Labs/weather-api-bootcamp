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

let cuidad= document.getElementById("city");
let button= document.getElementById("search");
let paragraph =document.getElementById("weatherShow")

button.addEventListener('click',function(){

  console.log(cuidad.value);
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cuidad.value}&appid=ef36e97e996b598e00a44314fe0f09ba`)
      .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
      .then(response => {
        paragraph.textContent = response.weather[0].description
        console.log(response.weather[0].description)
      })
      .catch(err => {
          console.log(`error ${err}`)
          alert("sorry, there are no results for your search")
      });



})
// var paragraph = document.getElementById("p");
//
// paragraph.textContent += "This just got added";
