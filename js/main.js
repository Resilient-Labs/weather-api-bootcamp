document.querySelector('.submitBtn').addEventListener('click', getTemp)

function getTemp() {
    const city = document.querySelector('.userInput').value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7aef535e9fa166f07bef91761f4b8ff6&units=imperial`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            //console.log(data.main.temp.toFixed(0))
            document.querySelector('.city').innerText = "City: " + data.name
            document.querySelector('.country').innerText = "Country: " + data.sys.country
            document.querySelector('.temperature').innerText = "Temperature (Farenheit): " + data.main.temp.toFixed(0) + " degrees"
            document.querySelector('.weatherDesc').innerText = "Weather Description: " + data.weather[0].description
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
}
// Step 1: Copy over the syntax for fetching an API
// Step 2: Find API and url -> Use console log to see if it works.
// Step 3: Pull the properties I want from the JSON object returned: data.name = city, data.main.temp = temperature, data.weather[2] = weather description 

// Right now, we can only search by city. Next, I want to search by country as well.
// Kelly Ch introduced me to toFixed() to dictate how many decimal places the returned value will have (was originally two decimal places)