//Goal: Enable your user to enter a city + country and return the temperature in Fahrenheit
// user enter city and country
//event listener at click
//collect input of city store in variable 
//collect input of country store in variable
//return TEMP in Fahrenheit <h3>


document.querySelector('button').onclick = getWEATHER



function getWEATHER(){
//get user input for city and country
const inputcountry = document.querySelector(".country").value;
console.log(inputcountry);
const inputcity = document.querySelector(".city").value;
console.log(inputcity);

const APIkey= "f8c4c9fbfffe0029705c3398152d222f";
const url= `https://api.openweathermap.org/data/2.5/weather?q=${inputcity}&${inputcountry}&appid=${APIkey}`;

console.log(url)


//fetch requests
fetch(url) 
.then ((x) => x.json ())
.then((data) => {
   console.log(data);
 document.querySelector('.main').innerText =((data.main.temp -273.15) * 9/5 + 32).toFixed(0) ;
 document.querySelector('.high').innerText =((data.main.temp_max -273.15) * 9/5 + 32).toFixed(0) ;
document.querySelector('.low').innerText =((data.main.temp_min -273.15) * 9/5 + 32).toFixed(0) ;


})
.catch(err => {
//     console.log(`err${err}`);
})};