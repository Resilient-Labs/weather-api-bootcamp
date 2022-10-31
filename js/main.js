// Goal of this exercise: Enable your user to enter a city + country and return the temperature in Fahrenheit


// API key = 22f2d79a37af4b3d861ecb2368fd509e
//Here is the documentation I used for this exercise https://www.weatherbit.io/api/weather-current
//Reading the documentation, I see the base url, upon which I can use as a framework for my fetch url consisting of the API endpoint 'get observation by city and country' and the API key
//I also see that I need to pass in the city and country as parameters in the url.

//add click event to button that allows user to enter a city and country
document.querySelector("#button").addEventListener('click', getWeather);

//create a function to get the weather from entered city and country
function getWeather(event) {
    event.preventDefault();  //prevents the page from reloading
    let location = document.querySelector("#location").value; //set location to the value of the location input element
    let url = `https://api.weatherbit.io/v2.0/current?city=${location}&key=22f2d79a37af4b3d861ecb2368fd509e`; //set url to the api url used in the fetch with the location variable added to the end
    fetch(url) // this will fetch the url, I have already set the url to the api url with the location variable added to the end
    .then(res => res.json()) // parse response as JSON
    .then(data => { // we will run this when the response is received
        console.log(data); // the data is being logged into the console
        let temp = document.querySelector("#temp") // this will set temp to the h2 element in HTML
        let fahrenheit = (data.data[0].temp * 9/5) + 32      //convert temp to fahrenheit
        temp.innerHTML = fahrenheit +" Fahrenheit"
    })
    .catch(err => {
        console.log(`error ${err}`)  // this will log any errors if they are present
    }                                                                                                                                                   );          

}


