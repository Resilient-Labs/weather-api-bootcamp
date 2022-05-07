// "http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}"
document.querySelector(".button").addEventListener("click", runThis);

// document.querySelector("button").addEventListener("keypress", (e) => {
//   if (e.key === 13) { // key code of the keybord key
//     e.preventDefault();
//     runThis()
//   }
// });
function runThis() {
  let cityPlusCountryCode = document.querySelector("input").value;
  if(cityPlusCountryCode === ""){
    document.querySelector("p").innerText = "Please enter a location"
  }
  fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${cityPlusCountryCode}&limit=1&appid=8b5404a1144c390a0b41c7b94ad1c956`
  )
    .then((res) => res.json()) //turn object into json for legibility
    .then((data) => {
      //take data
      console.log(data[0].lon, data[0].lat); //log value of object
      const cityLat = data[0].lat;
      const cityLon = data[0].lon;

      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${cityLat}&lon=${cityLon}&appid=8b5404a1144c390a0b41c7b94ad1c956`)
        .then((res) => res.json()) //turn object into json for legibility
        .then((dataTemp) => {
          //take data
          console.log(dataTemp.main.temp); //log value of object
          let faren = (9/5)*((dataTemp.main.temp) - 273) + 32
          faren = faren.toFixed(0)
          document.querySelector("#tempHere").innerText = `Current Temperature (F): ${faren}`
        })
        .catch((err) => {
          //catch the error (err is a variable)
          console.log(`error ${err}`); //and log the error
        });
 
      
    })
    .catch((err) => {
      //catch the error (err is a variable)
      console.log(`error ${err}`); //and log the error
    });
}

//trim no spaces  and lowercase
