class Weather {
    constructor(city, state, country) {
        this._city = city;
        this._state = state;
        this._country = country;
        this._url = "Your API Key gose HERE"
    }

    // Getter methods
    get city() {
        return this._city;
    }
    get state() {
        return this._state;
    }
    get country() {
        return this._country
    }

    //Setter methods
    set city(value) {
        this._city = value
    }
    set state(value) {
        this._state = value
    }
    set country(value) {
        this._country = value
    }

    // Get values from DOM
    valueFromDom(id) {
        return document.querySelector(id).value
    }

    // Method uses fetch to make a request to the server
    retriveInfo() {

            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this._city},${this._state},${this._country}&appid=${this._url}&units=imperial`)
            .then(res => res.json()) // parse response as JSON
            .then(data => {

                // Place csata into the DOM
                document.querySelector("#city").innerText = data.name
                document.querySelector("#weather").innerText = data.main.temp
                document.querySelector("#condition").innerText = data.weather[0].main

            })
            .catch(err => {
                console.log(`error ${err}`)
        });
    }

}

// Add an event listener to the button
document.querySelector("#btn").addEventListener("click", () => {

    // Create a new instance
    const userLocation = new Weather()

    // call the valueFromDom() to grab the value from the DOM
    let cityValue = userLocation.valueFromDom("#userCity")
    let stateValue = userLocation.valueFromDom("#userState")
    let countryValue = userLocation.valueFromDom("#userCountry")

    // Set the locations
    userLocation.city = cityValue
    userLocation.state = stateValue
    userLocation.country = countryValue

    // make the fetch request 
    userLocation.retriveInfo()
})