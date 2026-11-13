const appConfig={
    //googleAPIKey : `${weather-app.env.GOOGLE_DEMO_API_KEY}`,
    weatherAPIKEY: 'a1e6951b7a414f8faa0180642262209' //`${weather-app.env.WEATHER_API_KEY}`
}

document.querySelector('button').addEventListener('click',getWeather)

function getWeather(){
   // const date = document.querySelector('input[type="date"]').value
    const city = document.querySelector('#city').value
    const country = document.querySelector('#country').value
    let temperature = document.querySelector('#weather-report')
    fetch(`https://api.weatherapi.com/v1/current.json?key=${appConfig.weatherAPIKEY}&q=${city}, ${country}`)
        .then(result => result.json()) // parse to json
        .then(data =>{
            console.log(data)
            temperature.innerText = `Today's temperature is ${data.current.temp_f} °F`
        })    
}


//GOOGLE STUFF
//get coordinates from 
//https://geocode.googleapis.com/v4/geocode/address/
//return coordinates from this^^
//enter coordinates into: 
// to do: 
//before fetching url need x and y coordinates
//hard code then figure out how to get location from user
// fetch ('https://api.weather.gov/gridpoints/TOP/31,80/forecast')
// .then format data in JSON
// .then console log data
