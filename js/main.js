//Activate button, add event listener
const getLocation = document.querySelector('button')
getLocation.addEventListener('click', getWeather)

function getWeather() {

    // Get units from radio button
    const unit = document.querySelector('input[name = unit]:checked').value

    // Creaate const userdata, api, country
    const city = document.querySelector('input').value
    const api = `d23e009d9e3c420522a7d9b1300082d7`
    const country = document.querySelector('#country').value

    // Insert date into url
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api}&units=${unit}`
    fetch(url)
        .then(res => res.json()) //parse response into aa json
        .then(data => {
            // Logs json, title, url, explanations is description
            console.log(data)

            // Display city name to dom          
            document.querySelector('#city').innerText = `Location: ${data.name} `

            // Display temp and unit
            if (unit === 'imperial') {
                document.querySelector('#currentTemp').innerText = `Current Temperature: ${Math.round(data.main.temp)} ° F`
            } else {
                document.querySelector('#currentTemp').innerText = `Current Temperature: ${Math.round(data.main.temp)} ° C`
            }

            // Display weather
            document.querySelector('#weather').innerText = `Current Weather: ${data.weather[0].description.toUpperCase()}`

            // Change background based on weather description
            const weatherDesc = data.weather[0].main.toLowerCase()
            const body = document.body

            // Reset all classes
            body.className = ''

            if (weatherDesc.includes('cloud')
                || weatherDesc.includes('overcast')) {

                body.classList.add('cloudy')

            } else if (weatherDesc.includes('rain')
                || weatherDesc.includes('drizzle')
                || weatherDesc.includes('thunderstorm')
            ) {

                body.classList.add('rainy')

            } else if (weatherDesc.includes('snow')) {

                body.classList.add('snowy')

            } else if (weatherDesc.includes('clear')) {

                body.classList.add('sunny')

            } else {

                body.classList.add('defaultWeather')

            }
        })
        .catch(err => {
            console.log(`error ${err}`)
        }
    )
}