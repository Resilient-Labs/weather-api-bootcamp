let inputForm = document.querySelector("form")
let button = document.getElementById("search");
let apiKey = "c2dd4c00faa746c74724edfe9877d1bc"

inputForm.addEventListener('submit', function(e) {
  e.preventDefault()
  let city = document.getElementById("userInput").value
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},state,&units=imperial&appid=c2dd4c00faa746c74724edfe9877d1bc`)
 
    .then(res => res.json()) 
    .then(response => {
      console.log(response)
      var iconcode = response.weather[0].icon;
      document.querySelector("#weatherImage").src = "http://openweathermap.org/img/w/" + iconcode + ".png";
      document.getElementById("description").textContent = response.weather[0].description
    })
    .catch(err => {
      console.log(`error ${err}`)
      alert("sorry, there are no results for your search")
    });
})