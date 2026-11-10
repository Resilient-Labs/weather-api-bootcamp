//Create a weather app, find appropriate weather API, get API Key, Query Parametes
//Output the weather in specific City 
const api = "6180dced5f9e43cfad0180802262209"
const url = "https://api.weatherapi.com/v1/current.json"

class WeatherApp { 
    constructor() { 
        //DOM + Click Event
        this.city = document.getElementById("city"); 
        this.tempF = document.getElementById("temp-f");
        this.tempC = document.getElementById("temp-c");

        document.querySelector(".button").addEventListener("click", () => 
            this.getWeather());
    }


    //get the weather 
    getWeather() { 
        const city = this.city.value; 
        console.log("City", city); 

        fetch(`${url}?key=${api}&q=${city}`)
        .then((res) => res.json())
        .then((data) => { 
            console.log("Weather", data);   

            //connect to the DOM
            this.tempF.innerText = `${data.current.temp_f}F`;
            this.tempC.innerText = `${data.current.temp_c}C`;
         })
        .catch((err) => { 
            console.log("Unable to retrieve weather. Please try again.", err);
        }); 
    }
}

//RUN the app
const weatherApp = new WeatherApp();


