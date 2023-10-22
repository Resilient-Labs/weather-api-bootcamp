//User will enter a city's name and get the weather for that area

//need event listener that runs user's input
document.querySelector('button').addEventListener('click', getWeather)

function getWeather() {
    let city = document.querySelector('input').value
    let weatherURL = `https://api.api-ninjas.com/v1/weather?city=${city}`
    fetch(weatherURL, {
        method: 'GET',
        mode: 'cors', // this may be optional see what it means
        headers: { 
            'X-Api-Key': 'dHce5JLJM7nDHXhcl3ysVw==SyI2JKsC9hjFa6gs',
        }
    })
    .then(response => response.json())
    .then(weather => {
        if(city === '') {
            document.querySelector('h2').innerText = `Please enter a city name to get the current temperature!`
        } else {
        let mainTempToFah = parseInt((weather.temp * 9/5) + 32)
        let minTempToFah = parseInt((weather.min_temp * 9/5) + 32)
        let maxTempToFah = parseInt((weather.max_temp * 9/5) + 32)
        document.querySelector('#current').innerText = `Current temp ${mainTempToFah}℉` 
        document.querySelector('#min').innerText = `Min temp ${minTempToFah}℉`
        document.querySelector('#max').innerText = `Max temp ${maxTempToFah}℉`
        }
    })
    .catch(err => {  
        console.log(`error ${err}`)
    });
}





// var city = 'london'
// $.ajax({
//     method: 'GET',
//     url: 'https://api.api-ninjas.com/v1/weather?city=' + city,
//     headers: { 'X-Api-Key': 'YOUR_API_KEY'},
//     contentType: 'application/json', // this line does not work in fetch API... need to see what content type is and what is CORS
//     success: function(result) {
//         console.log(result);
//     },
//     error: function ajaxError(jqXHR) {
//         console.error('Error: ', jqXHR.responseText);
//     }
// });