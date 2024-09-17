//Enable your user to enter a city + country and return the temperature in Fahrenheit
//creating a eventListener for the function 
document.querySelector("button").addEventListener('click', getTheWeather)

//created a function 
function getTheWeather() {
    //got the value out the input 
    let city= document.querySelector('#inputone').value
    //plugged the value into the URL 
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=f375692e483dfa2adf4f551c83f7df1a&units=imperial`
   console.log()
    //used the URL to make a fetch 
    fetch(url)
        .then(res => res.json()) // parse response as JSON 
        //got data back from the URL 
        .then(data => {
            console.log(data)
            //use the data to update the dom, 

            //document.querySelector('img').src = data.hdurl //used bracket notation to grab the first drink index 0
            document.querySelector('h3').innerText = data.main.temp
            document.querySelector('h4').innerText = data.name
            document.querySelector('h5').innerText = data.weather[0].description
            document.querySelector('h2').innerText = data.main.feels_like
           console.log(data.weather.icon)
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}
