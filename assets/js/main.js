//The user will enter a a country or city. Use that location to get the weather of that day! https://openweathermap.org/api


//connect button  function "getTemp"
document.querySelector("button").addEventListener("click", getTemp);

function getTemp() {

  //getting my user input for city and country 
  const city = document.querySelector("#city").value;
  const country = document.querySelector("#country").value;

  // have to print what you are trying to test
  console.log("city : " + city);
  console.log("country : " + country);

  //creating a variable which is going to be passed to my api call that passes my three params, (city,country, api key) - added template literals for params
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&country=${country}&appid=920aaca8fd0517e3a967a0513380c983`; 

  //using method fetch to request my data from that api using url
  fetch(url) // go get api

  //.then property passes param res which responds with JSON parsing out the data you requested 
    .then((res) => res.json())
    .then((data) => {

      console.log(data); 
      document.querySelector("h1").innerText = `City : ${data.name}`;
      document.querySelector("h2").innerText = `Country : ${data.sys.country}`;
      const f = Math.floor((data.main.temp - 273.15) * 9/5 + 32) ;
      console.log(typeof data.main.temp);
      document.querySelector("h3").innerText = f + "°F";
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}


// event listener to button to convert temp
document.querySelector("#check").addEventListener("click", convertToCelcius);

// converting celcius to farenheit
  function convertToCelcius() {
    const f = document.querySelector("#fahrenheit").value;
    document.querySelector("#celcius").innerText = ((f - 32) * 5) / 9;
  }