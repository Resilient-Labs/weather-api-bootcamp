document.querySelector('.location-button').addEventListener('click',getWeather)
function getWeather(){
    const selection = document.querySelector('input').value 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${selection}&appid=e66af5b64e1a5d368e4bafaea2a9dc05&units=imperial`
    fetch(url)
    .then(res =>res.json())//gets response and transaltes "json"
    .then(data =>{
        console.log(data)
        document.querySelector('.location').innerText = data.name
        document.querySelector('.weather-temp').innerText = `${data.main.temp}F`
         console.log(data)//debug
        document.querySelector('.winSpeed').innerText =`${ data.wind.speed}mph`
        document.querySelector('.humida').innerText = `${data.main.humidity}%`
        document.querySelector('.pressure').innerText = `${data.main.feels_like}F`
    })
    //catch errors
    .catch(err =>{
        console.log(`error ${err}`)
    })
}
