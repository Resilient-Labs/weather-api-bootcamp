//allow user input for city, state, and country code
//when user clicks button, take in inputs and plug into geocoding url request
//take latitiude and longitude data pulled from geocoding url and plug into weather data url request
//grab temp from weather data url request (temp is in kelvin)
//convert that temp to fahrenheit and display it on the DOM

document.querySelector('#button').addEventListener('click', getTempForCity)


function getTempForCity() {
    const userLocation = document.querySelector('#userLocation').value
    const location = document.querySelector('#currentLocation')
    

    if(!userLocation) {
        location.innerText = 'Please enter a location.'
        tempInF.innerText = ''
    }else {

        fetch(`https://api.weatherapi.com/v1/current.json?key=21a89595fe534aa5b54173954241710&q=${userLocation}&aqi=no`)
        .then(res => res.json())
        .then(data => {
        console.log(data)
    
        displayLocation(data)
        displayTempInFahrenheit(data)
    
    
        })
        .catch(err => {
            console.log(`error ${err}`)
        })

    }

}

function displayLocation(data) {
    const location = document.querySelector('#currentLocation')
    location.innerText = `${data.location.name}, ${data.location.region}`
}


function displayTempInFahrenheit(data) {
    const tempInF = document.querySelector('#tempInF')
    tempInF.innerText = `Current Temperature: ${data.current.temp_f} F`
}





