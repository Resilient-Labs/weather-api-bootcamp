
document.querySelector("button").addEventListener("click", getWeather)

function getWeather(){
    const city=document.querySelector(".cityName").value.toLowerCase()
    const country=document.querySelector(".countryCode").value.toLowerCase()

    const url=`https://api.weatherstack.com/current?access_key=d5db840b2707aa1991129b222090f481&query=${city},${country}`;

    fetch(url)
    .then(res => res.json())
    .then(data => {
        
        console.log(data)
        
        document.querySelector('.weatherIcon').src=data.current.weather_icons
        document.querySelector('h3').textContent=data.current.weather_descriptions
        document.querySelector('.temp').textContent=data.current.temperature+"°c"
        document.querySelector('h2').textContent=data.location.name+", "+data.location.country
        
    })
        
    .catch(err => {
        console.log(`error ${err}`)
    })
}
