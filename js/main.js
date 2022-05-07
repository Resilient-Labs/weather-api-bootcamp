document.querySelector('.submitBtn').addEventListener('click', getTemp)

function getTemp() {
    const city = document.querySelector('.userInput').value
    const key = config.MY_KEY
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=imperial`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            //console.log(data.main.temp.toFixed(0))
            document.querySelector('.city').innerText = "City: " + data.name
            document.querySelector('.country').innerText = "Country: " + data.sys.country
            document.querySelector('.temperature').innerText = "Temperature (Farenheit): " + data.main.temp.toFixed(0) + " degrees"
            document.querySelector('.weatherDesc').innerText = "Weather Description: " + data.weather[0].description
            if (data.main.temp.toFixed(0) <= 32) {
                document.querySelector('img').src = 'assets/images/snow.jpg'
                document.querySelector('.recommendation').innerText = 'Brrrr...It\'s cold! You should definitely grab a nice heavy coat!'
            } else if (data.main.temp.toFixed(0) > 32 && data.main.temp.toFixed(0) <= 50) {
                document.querySelector('img').src = 'assets/images/sweater.jpg'
                document.querySelector('.recommendation').innerText = 'Still cold! Don\'t leave the house without a nice jacket or a thick sweater!'
            } else if (data.main.temp.toFixed(0) > 50 && data.main.temp.toFixed(0) <= 70) {
                document.querySelector('img').src = 'assets/images/layers.jpg'
                document.querySelector('.recommendation').innerText = 'It\'s getting warmer! Pack layers because you\'ll be hot and cold throughout the day!'
            } else if (data.main.temp.toFixed(0) > 70) {
                document.querySelector('img').src = 'assets/images/summer.jpg'
                document.querySelector('.recommendation').innerText = 'It\'s warm! Dress for summer! (but keep an eye out for rain!)'
            }
        })
        .catch (err => {
                console.log(`error ${err}`)
            })
}
// Step 1: Copy over the syntax for fetching an API
// Step 2: Find API and url -> Use console log to see if it works.
// Step 3: Pull the properties I want from the JSON object returned: data.name = city, data.main.temp = temperature, data.weather[2] = weather description

// Right now, we can only search by city. Next, I want to search by country as well.
// Kelly Ch showed me to toFixed() to dictate how many decimal places the returned value will have (was originally two decimal places)