// alert('works')

const weatherForm = document.querySelector(".weather");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card")
const key = "765e968c259ea4c8b726cef972d2581e";

weatherForm.addEventListener("submit", async event => {

    event.preventDefault();
    const city = cityInput.value;

    if(city){
        try{
            const weatherData = await getWeatherData(city);
            displayWeather(weatherData);
        }
        catch(error){
            console.log(error);
            displayError(error);
        }
    }else{
        displayError("Please enter a city");
    }
});

async function getWeatherData(city){


    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${key}`;

    const response = await fetch(apiUrl);

    if(!response.ok){
        throw new Error("could not fetch weather data");
    }

    return await response.json();
}

function displayWeather(data){
    
    const {name: city,
           sys: {country},
           main: {temp,humidity},
           weather: [{description, id}]} = data

    card.textContent = "";
    card.style.display = "flex";

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");

    cityDisplay.textContent = `${city}, ${country}`;
    tempDisplay.textContent = `${((temp - 273.15)* (9/5) + 32).toFixed(1)}°F`;
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    descDisplay.textContent = description;
    weatherEmoji.textContent = getEmoji(id);

    cityDisplay.classList.add("display");
    tempDisplay.classList.add("temp");
    humidityDisplay.classList.add("humidity")
    descDisplay.classList.add("description");
    weatherEmoji.classList.add("emoji");

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(weatherEmoji);
}

function getEmoji(weatherId){
    switch(true){
        case (weatherId >= 200 && weatherId < 300):
        return "🌩️";
        case (weatherId >= 300 && weatherId < 400):
        return "🌧️";
        case (weatherId >= 500 && weatherId < 600):
        return "🌧️";
        case (weatherId >= 600 && weatherId < 700):
        return "🌨️";
        case (weatherId >= 700 && weatherId < 800):
        return "🌫️";
        case (weatherId === 800):
            return "🌞";
        case (weatherId >= 801 && weatherId < 810):
            return "☁️";
        default: return "?";
    }
}

function displayError(messgae){
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = messgae;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}