document.querySelector('button').addEventListener('click',getWeather)

function getWeather(){
    let city = document.querySelector('#city').value
    let state = document.querySelector('#state').value
    let country = document.querySelector('#country').value

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&appid=b4addd210572f6566706a4fd7dded19f&units=imperial`

    fetch(url) 
    .then(res => res.json()) // parse response as JSON 
    .then(data => { 
      console.log(data.main.temp) 
      document.querySelector('h2').innerText = data.name
      document.querySelector('h3').innerText = data.main.temp
    }) 
    .catch(err => { 
        console.log(`error ${err}`) 
    }); 

}