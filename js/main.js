
const WEATHER_KEY = "b0a06997003bb34ff74635549a8bfd0e"

    // CITY FROM INPUT
const city = document.querySelector("#city-val")

// COUNTRY  country Name
const country = document.querySelector("#count-val")
    
    // date
const todayDate = document.querySelector("#date")
// displays the city
const cityContainer= document.querySelector("#city")

// displays the country Name
const countryContainer = document.querySelector("#country")

// get the temperature
const temperature = document.querySelector("#temp")

// feels like
const feelsLike = document.querySelector("#feels-like")

// humidity
const humidContainer = document.querySelector("#humid")

// description
const descriptionContainer = document.querySelector("#description")
// wind 
const windContainer = document.querySelector("#wind")

// image for the forecast
const img = document.querySelector("#weatherIcon")
//input val for city and country
const cityInp = document.querySelector("#city-val")
const countryInp = document.querySelector("#count-val")

// button for fetching the data
const getWeatherBtn = document.querySelector("button").addEventListener("click",getWeatherData)


function getWeatherData(){

   //  get the city and country values here
    const cityValue = city.value;
    const countryValue = country.value

    // url for fetching
    const url= `https://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_KEY}&q=${cityValue},${countryValue}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        
        // get city and country name (for my ui)
        const{
            name , country
        } = data.city

        // get the date
        const {
            dt_txt
        } = data.list[0]


            // get the temperature, humidity feel like
        const {
              feels_like , temp , pressure  , humidity
        } = data.list[0].main

  
        console.log(data.list[0])

            // convert the temp and feels like to celsius 
            const tempInCelsius = temp - 273.15
            const feelsLikeInCelsius = feels_like - 273.15 

            // display on the DOM
            temperature.textContent = `${tempInCelsius.toFixed(1)}`
            feelsLike.textContent = `Feels ${feelsLikeInCelsius.toFixed(1)}`

        //using the Date object to make it format
        const date = new Date(dt_txt)
        todayDate.textContent = date.toString()

        // get the icon code from the api
        const imageCode = data.list[0].weather[0].icon
      
        // // get the image URL where 2x is modern two times resolution icon 
        const imageURL = `https://openweathermap.org/payload/api/media/file/${imageCode}.png`
        img.src = imageURL
    
       
    
        descriptionContainer.textContent = data.list[0].weather[0].description
            const wind = data.list[0].wind.speed ;
            const calculatedWind = wind * 3.6
        windContainer.textContent = `Wind : ${calculatedWind}  km/h`
        


    })
    .catch(err=>{
        console.log("sorry", + err)
    })
    
}