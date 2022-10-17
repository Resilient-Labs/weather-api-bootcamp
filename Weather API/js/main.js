
document.querySelector('button').addEventListener('click', getWeather)

function getWeather(){
    let city = document.querySelector('#city').value
    let country = document.querySelector('#country').value
    fetch(`http://api.weatherapi.com/v1/current.json?key=82525578b810417a961154716221310&q=${city},${country}&aqi=no`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('.degrees').innerText = "It's currently " + data.current.temp_f + '°F in'
        document.querySelector('.city').innerText = data.location.name + ', '
        document.querySelector('.country').innerText = data.location.country
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}