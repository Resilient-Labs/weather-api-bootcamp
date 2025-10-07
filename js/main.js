// Goal: Enable your user to enter a city + country and return the temperature in Fahrenheit

// get text info by user
// listen for click
// grab information (city)
// setup the url from the weather app api
// perform the request/ fetch for the information
// extract the temperature out of the response 
// display it in the DOM

document.querySelector('#btn').addEventListener('click', getTemp);

function getTemp(){
    let city = document.querySelector('input').value;
    let apiKey = "3ca527700be61b8b5bbc9232e557bd62" 
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        document.querySelector("h2").innerText = ((data.main.temp - 273.15) * 9/5 + 32).toFixed(0);

    })

}