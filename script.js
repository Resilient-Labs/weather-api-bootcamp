const url = ' https://www.api.weatherapi.com/v1'
document.querySelector('button').addEventListener('click', getWeather)
function getWeather() {
    let cityEntered = document.querySelector('input').value


    fetch(`https://api.weatherapi.com/v1/forecast.json?key=23dae6daa1374eb7a74145036262209&q=${cityEntered}&days=1`)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
            document.querySelector('.city').textContent = data.location.name
            // document.querySelector('#country').innerText = data.location.country
            document.querySelector('.weather').textContent = data.forecast.forecastday[0].day.maxtemp_f
        })

        .catch(err => {
            console.log(`error ${err}`)
        });
}
// 23dae6daa1374eb7a74145036262209
// /forecast.json
// 'https://www.api.weatherapi.com/v1/forecast.json?key=23dae6daa1374eb7a74145036262209&q=London&days=1'
//'http://api.weatherapi.com/v1/forecast.json?key=23dae6daa1374eb7a74145036262209&q=London&days=1&aqi=no&alerts=no'
// .textContent