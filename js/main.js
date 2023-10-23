const getWeatherBtn = document.getElementById('getWeatherBtn') 
const cityInput = document.getElementById('cityInput') 
const countryInput = document.getElementById('countryInput') 
const weatherResultDiv = document.getElementById('weatherResult') 

getWeatherBtn.addEventListener('click', function() {
    // Get the values from the input fields and trim any extra spaces
    const city = cityInput.value.trim() 
    const country = countryInput.value.trim() 
    
    // Check if city or country input is empty
    // Alert if empty
    if (city === '' || country === '') {
        alert('Please enter both city and country.') 
        return // Stop function if input is invalid
    }

    const apiKey = 'a6fa18d5bb84d5481b6bc228e4adc5f3' 
    // API endpoint for fetching weather data
    const weatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=imperial` 

    fetch(weatherAPI)
        .then(response => {
            // Error debugging
            // Response.ok is a Boolean property that indicates whether the HTTP request was successful or not 
            // When response.ok is false, we throw a new Error object with the message 'Network response was not ok'. This means something went wrong with the request and we want to handle this error 
            if (!response.ok) {
                throw new Error('Network response was not ok') 
            }
            return response.json() 
        })
        .then(data => {
            // Using the properties from API grab the temp
            const temperature = data.main.temp 
            // Display the weather result
            // toFixed(2) is a method to round the number to (2) decimal places
            weatherResultDiv.textContent = `Temperature in ${city}, ${country}: ${temperature.toFixed(2)}°F` 
        })
        .catch(error => {
            console.error('Error:', error) 
            weatherResultDiv.textContent = 'Error fetching weather data.' 
        }) 
}) 
