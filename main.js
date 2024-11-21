//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
document.querySelector('button').addEventListener('click',returnTemp)
function returnTemp(){
    let city=document.querySelector('#cityInput').value  
    let country=document.querySelector('#countryInput').value
    let APIkey='9abb7b3f6ab1d3233425f3a409b33769'
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&${country}&appid=${APIkey}&units=imperial`
    fetch(url) 
        .then(res => res.json()) // parse response as JSON 
        .then(data => { 
          console.log(data) 
          console.log(data.main)
          console.log(data.temp)
          console.log(data.main.feels_like)
          console.log(data.weather[0].description)

          document.querySelector('p').innerText=data.main.temp
          document.querySelector('span').innerText=data.main.feels_like
          document.querySelector('.description').innerText=data.weather[0].description
        }) 
        .catch(err => { 
         console.log(`error ${err}`) 
        });
}