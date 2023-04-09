let btn = document.querySelector('button')
let cityCountry = document.querySelector('input')
let url = `http://api.weatherapi.com/v1/current.json?key=49e573d949e4472cb37180155230504&q=` 

btn.addEventListener('click', getWeather)

function getWeather () {
    fetch(url)
    .then(res => res.json()) 
    .then(data => {
        console.log(data)
        cityCountry.innerText = data.cityCountry
       
     })
    .catch(err => {
        console.log(`error ${err}`) 
})
}