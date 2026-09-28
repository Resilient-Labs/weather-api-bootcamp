// Open-Meteo Geocoding API: https://geocoding-api.open-meteo.com/v1/search=

// Open-Meteo Weather API: https://api.open-meteo.com/v1/forecast?

const getCity = document.querySelector('#cityName')

document.querySelector('#weatherButton').addEventListener('click', getCityWeather);

function getCityWeather() {

    const myCityLatitudeLongitude = getMyCityGeocode();
    console.log(myCityLatitudeLongitude);

    let countTime = 0;
    while ((myCityLatitudeLongitude.length === 0)
        && (countTime < 10000)) {
        setTimeout(function (countTime) {
            countTime += 1;
        }, 1000);
        console.log(countTime);
    };

    console.log(myCityLatitudeLongitude);

};

function getMyCityGeocode() {

    let myCityLatitudeLongitude = [];

    const myCity = getCity.value;
    console.log(myCity);

    const myCityGeocodeURL = `https://geocoding-api.open-meteo.com/v1/search?name=${myCity}&count=10&language=en&format=json`;
    console.log(myCityGeocodeURL);

    fetch(
        myCityGeocodeURL
    )

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

            const myCityLatitude = myCityGeocode.latitude
            console.log(myCityLatitude);

            const myCityLongitude = myCityGeocode.longitude;
            console.log(myCityLongitude);

            myCityLatitudeLongitude = [myCityLatitude, myCityLongitude];
            console.log(myCityLatitudeLongitude);

        });
    return myCityLatitudeLongitude;
};

function getCityLatitudeLongitude(cityLatitudeLongitude) {
    document.querySelector('#cityCoordinates').innerHTML = cityLatitudeLongitude;
    return cityLatitudeLongitude;
};

function getMyCityWeather(cityLatitude, cityLongitude) {

    console.log(cityLatitude);
    console.log(cityLongitude);

    const todayDate = new Date();
    console.log(todayDate);

    const myCityWeatherURL = `https://api.open-meteo.com/v1/forecast?lat`;
    console.log(myCityWeatherURL);


};