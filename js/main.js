let button = document.getElementById('search-btn')
button.addEventListener("click", ()=>{ //event listener wraps around
let input= document.getElementById("city-input").value //user inputs
let country = document.getElementById("country-input").value
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input},${country}&APPID=a63691a356aeaaee5b1fb8e1320ff404&units=imperial`)
    .then(res => res.json()) 
    .then(data => {
      console.log(typeof data.main.temp)
      if(data.sys.country == data.sys.country){ 
        console.log(data)
        document.getElementById('weather').textContent = (Math.floor((data.main.temp))+ "F" + "°");
      } //string outside of math floor or comes out as NaN
    // Math.floor(data.main.temp + "F" + "°");
    // document.getElementById('weather').textContent = fahrenheit
    // let fahrenheit = Math.floor((data.main.temp - 273.15) * 1.8 + 32) + "F" + "°"; not needed with units=imperial in fetch
    // document.getElementById('weather').textContent = fahrenheit
    })
    .catch(err => {
        console.log(`error ${err}`);
        alert("Sorry, invalid location :(");
      })
})
 button.addEventListener("click", (event) =>{
   event.preventDefault()
 })


//  let weatherApi = {
//     button: document.getElementById('search-btn'),
//     input: document.getElementById("city-input").value,
//     country: document.getElementById("country-input").value,
//     data() =>{
//         fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input},${country}&APPID=a63691a356aeaaee5b1fb8e1320ff404&units=imperial`)
//         .then(res => res.json()) 
//         .then(data => {
//         console.log(data)
//         if(data.sys.country == "US"){
//         console.log(data)
//       }

//      }
//  }