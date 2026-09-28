// Open-Meteo Geocoding API: https://geocoding-api.open-meteo.com/v1/search=

// Open-Meteo Weather API: https://api.open-meteo.com/v1/forecast?

const getCity = document.querySelector('#cityName')

document.querySelector('#weatherButton').addEventListener('click', getCityWeather);

function getCityWeather() {

    getMyCityGeocode()

        .then(function (myCityLatitudeLongitude) {

            console.log(myCityLatitudeLongitude);

            return getMyCityWeather(
                myCityLatitudeLongitude[0],
                myCityLatitudeLongitude[1]
            );
        })

        .then(function (weatherData) {

            console.log(weatherData);

        });
};

function getMyCityGeocode() {

    let myCityLatitudeLongitude = [];

    const myCity = getCity.value;
    console.log(myCity);

    const myCityGeocodeURL = `https://geocoding-api.open-meteo.com/v1/search?name=${myCity}&count=10&language=en&format=json`;
    console.log(myCityGeocodeURL);

    return fetch(myCityGeocodeURL)

        .then(function (response) {

            console.log(response);

            return response.json();
        })

        .then(function (data) {

            console.log(data);

            let generationTime = data.generationtime_ms
            console.log(generationTime);

            let myCityGeocode = data.results[0];
            console.log(myCityGeocode);

            const myCityLatitude = myCityGeocode.latitude;
            console.log(myCityLatitude);

            const myCityLongitude = myCityGeocode.longitude;
            console.log(myCityLongitude);

            myCityLatitudeLongitude = [myCityLatitude, myCityLongitude];
            console.log(myCityLatitudeLongitude);

            return myCityLatitudeLongitude;
        });
};

function getMyCityWeather(cityLatitude, cityLongitude) {

    console.log(cityLatitude);
    console.log(cityLongitude);

    const todayDate = new Date();
    console.log(todayDate);

    const myCityWeatherURL = `https://api.open-meteo.com/v1/forecast?latitude=${cityLatitude}&longitude=${cityLongitude}&current=temperature_2m,apparent_temperature,relative_humidity_2m,cloud_cover,wind_speed_10m,precipitation`;
    console.log(myCityWeatherURL);

    return fetch(myCityWeatherURL).then(function (response) {

        console.log(response);

        return response.json();
    })

        .then(function (data) {

            console.log(data);

            const myCityCurrentWeather = data.current;
            console.log(myCityCurrentWeather);

            const myCityTemperature = myCityCurrentWeather.temperature_2m;
            console.log(myCityTemperature);

            return data;
        });
};