document.querySelector('button').addEventListener('click',getWeather)


function getWeather(){
let city = document.querySelector('input').value
let apiKey = `67b05a48d97ff9d04bf48c392afe9432`
// always use https://
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
fetch(url)
.then(res => res.json())
.then(data => {
    console.log(data)
document.querySelector('h2').innerText = data.main.temp

})
}
