const weatherMe = document.querySelector('button')
let cityOrCountryInput = document.querySelector('input')
let weather = document.querySelector('#weather')

let url = `http://api.weatherapi.com/v1/forecast.json?key=8d1ebd7f52d84749bfb184358230904&q=${cityOrCountryInput}` 

function getForecast(){
    let cityOrCountry = cityOrCountryInput.value;
    url = url + cityOrCountry;
    fetch(url)
    .then(res => res.json()) 
    .then(data => {
        console.log(data.current.temp_f)
        weather.innerText = data.current.temp_f
    })
    .catch(err => {
        console.log(`error ${err}`) 
    })
}

weatherMe.addEventListener('click', getForecast);
