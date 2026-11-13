document.querySelector('button').addEventListener('click', findTemp)

function findTemp(){
const inputCity = document.querySelector('input').value
const apiKey = '500dc77b4c3c4c9faef75907262309'


const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${inputCity}&aqi=no)`

fetch (url)
    .then (res => res.json())
    .then (data=> {
        console.log(data)
        document.querySelector('#temp').innerText = `Temp: ${data.current.temp_f}°F`
        document.querySelector('#country').innerText = `Country: ${data.location.country}`
    })
}
// alt link: `https://openweathermap.org/payload/api/media/file/$//{imageCode}@2x.png`
        