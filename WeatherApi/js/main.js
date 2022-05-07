//Enable your user to enter a city + country and return the temperature in Fahrenheit

// in css for background html {
// 	background: url(images/bg.jpg) no-repeat center center fixed;
// 	background-size: cover;
// }

document.querySelector('button').addEventListener('click', getWeather)


function getWeather(){
    let city = document.getElementById('cityName').value.toLowerCase()
    console.log(city)

    let country = document.getElementById('countryName').value.toLowerCase()
    console.log(country)
    

    let url = `http://api.weatherapi.com/v1/current.json?key=493848bb4ef445c6b3120948220405&q=${city}&${country}`

    
    // use template string $ to plug variable right in there when you define varialbe above 

    // a. / ?api_key indicates the first parameter &date indicates the query parameter.. 
    //b. when using template literals you can to replace the '' with ``.. 
    // c. json "javascript script object notation"

    fetch(url)
    .then(res => res.json())
    .then (data =>{
        console.log(data)

        document.querySelector('h2').innerText = `It is currently ${data.current.temp_f} °F in ${data.location.name} ${data.location.region}, ${data.location.country}.`
        document.getElementById('updated').innerText= `Last Updated on ${data.current.last_updated}`
        document.getElementById('feelsLike').innerText = `Feels Like: ${data.current.feelslike_f} °F`
        document.getElementById('wind').innerText = `Current Wind: ${data.current.wind_mph} mph`
        document.getElementById('gust').innerText = `Current Gust: ${data.current.gust_mph} mph`
        document.getElementById('direction').innerText = `Current Wind Direction: ${data.current.wind_dir} mph`
        document.getElementById('humidity').innerText = `Current Humidity: ${data.current.humidity} %`
        document.getElementById('precipitation').innerText = `Current Precipitation (inch): ${data.current.precip_in}`
    })

    .catch(err => {
        console.log(`error ${err}`)
        document.getElementById("error").innerText = 'Error: Please type in a valid City and Country'; 

    })


}
