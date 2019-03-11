//create an event listener on the button to run the function to find weather
document.querySelector('form').addEventListener('submit', weather)

//function for determining weather depending on city and country
function weather(e){
//prevents form from resetting the page
  e.preventDefault()
//store city and country input values in variables for JS to use. do not move out of function scope
  let city = document.querySelector('#city').value
  let country = document.querySelector('#country').value

//make a call to openweathermap with city and country value from user input
 fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}?id=524901&APPID=d2006c68e939100f58b23686523bf498`)
 //take the json file from api request
   .then(response => response.json())
//use the json file to display the temperature value into the DOM
   .then(myJson =>
//temp value from json default is in kelvin so use a converter function to display the proper temp in the DOM
    document.querySelector("#temp").innerHTML =
//pass the json temp into conversion function
     `The Weather is currently ${kelToFar(myJson.main.temp)}`);
}

//make conversion function to change kelvin temp to farenheit
function kelToFar(temp){
 let cel = temp - 273 // from kelvin to celcius
 let far = Math.round((1.8 * cel) + 32) + "&#8457"
 return far
}
