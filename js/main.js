class WeatherChecker {
    constructor() {
        const apiKey = "b19672e7064f4443a3b94527252703"; 
        this.baseUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&aqi=no&q=`;

        this.cityInput = document.querySelector("#city");
        this.countryInput = document.querySelector("#country");
        this.errorElement = document.querySelector("#error");
        this.descriptionElement = document.querySelector("#description");
        this.tempElement = document.querySelector("#temperature");

        this.button = document.querySelector("button");
        this.button.addEventListener("click", this.search.bind(this));
    }

    search() {
        let url = this.baseUrl;
        const city = this.cityInput.value.trim().toLowerCase();
        const country = this.countryInput.value.trim().toLowerCase();

        if (this.cityInput.value === "") {
            this.errorElement.innerText = "Error: Please enter a city";
            return;
        }

        this.errorElement.innerText = "";
        url += `${city},${country}`;


        fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.location === undefined) {
                this.errorElement.innerText = `Sorry! We couldn't find ${city}${country && ", "}${country}. Please try another search.`;
                this.descriptionElement.innerText = "";
                this.tempElement.innerText = "";
                return;
            }

            if (country !== "" && country !== data.location.country.toLowerCase()) {
                this.errorElement.innerText = `Sorry! We couldn't find ${city}${country && ", "}${country}. Here's ${data.location.name}, ${data.location.country} instead.`;               
            }
            this.descriptionElement.innerText = `${data.location.name}, ${data.location.country}`;
            this.tempElement.innerText = `${data.current.temp_f}°F / ${data.current.temp_c}°C`;
        })
        .catch(error => {
            console.error(error);
        })
    }
}

const weatherChecker = new WeatherChecker();