// User clicks the button on HTML to start function getWeatherData
document.querySelector('button').addEventListener('click', getWeatherData)

// Function runs, after button clicked
function getWeatherData() {
    // get city and country that user entered and store in variables
    const userEnteredCity = document.querySelector('#cityEnteredByUser').value
    const countryEnteredByUser = document.querySelector('#countryEnteredByUser').value
    console.log(userEnteredCity)
    // modify API using it's query parameters to get weather information about city and country user entered
    fetch(
        `http://api.weatherapi.com/v1/current.json?key=633d142d30664e60ba9150029262209&q=${userEnteredCity},${countryEnteredByUser}`
    )
        // Convert the API response from JSON into a JavaScript object
        .then((res) => res.json())
        // work with what came back. Need to store property values in variables to then be able to use later
        .then((data) => {
            console.log('Data Weather API', data)
            // these aren't relevant to this project, used in Complex NASA project
            let latitudeOfLocation = data.location.lat
            let longitudeOfLocation = data.location.lon
            console.log(latitudeOfLocation, longitudeOfLocation)
            // display values of certain properties using this function:
            display(data)
        })
}

// display specific property values of object in DOM
function display(stuffReturned) {

    document.querySelector('h2').innerText = stuffReturned.current.heatindex_f
    document.querySelector('h3').innerText = stuffReturned.location.name
    document.querySelector('h4').innerText = stuffReturned.location.country
    document.querySelector('span').innerText = stuffReturned.current.last_updated
}
