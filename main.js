//pseudo code
//Enable your user to enter a city + country and return the temperature in Fahrenheit
//find an api key https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/USA?unitGroup=us&key=BMMVJTJ8RLLBXVQB7AQQESTSU&contentType=json
//create event listener to get info from user and run our function
//create a var to get the input value
//create a variable for the temp
//get formula to convert the temp to fahrenheit 
//make a function tha will show the temp in the dom and make our api key work
//project made using what learned from class and help from  a mentor
document.querySelector('button').addEventListener('click',getFetch)

function getFetch(){
const city= document.querySelector('input').value;   
const apikey='76fb83eb1c1218fce338aa267f669a87' 
const url=`https://api.openweathermap.org/data/2.5/weather?q=${city},{country_code}&appid=${apikey}`



fetch(url)
.then(res => res.json())
.then(data=>{
    console.log(data);
    document.querySelector('h3').innerText=((data.main.temp -273.15) * 9/5 + 32).toFixed(0);
     document.querySelector('h4').innerText=data.wind.speed
})


}