
// API KEY  = f87f0fed7117613432f3d5fc08fd8eaf
// my house (hayden) helped

document.querySelector('button').addEventListener('click',getWeather)
function getWeather(){
let city = document.querySelector('input').value


let apiKey = `f87f0fed7117613432f3d5fc08fd8eaf`
// always use https:// for fetch // 
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
fetch(url)
.then(response => response.json())
.then(data => {
 console.log(data)
 document.querySelector('h2').innerText = ((Math.round(data.main.temp)))
 document.querySelector('h4').innerHTML = data.sys.country
})
}