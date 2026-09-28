// Weather API: https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=

const keyAPI = 'yourKeyAPI'
const todayDate = new Date();

const getCity = document.querySelector('#cityName');
const getCountry = document.querySelector('#countryName');

document.querySelector('#weatherButton').addEventListener('click', getMyCityWeather);

function getMyCityWeather() {

    const myCity = getCity.value;
    console.log(myCity);

    const myCountry = getCountry.value;
    console.log(myCountry);

    if (myCity === '' || myCountry === '') {
        return alert('Please enter city and state/country.');
    }

    const myLocation = myCity + ',' + myCountry;
    console.log(myLocation);

    const myCityWeatherURL = `https://api.weatherapi.com/v1/current.json?key=${keyAPI}&q=${myLocation}&aqi=yes`;

    console.log(myCityWeatherURL);

    fetch(myCityWeatherURL)

        .then(function (response) {

            console.log(response);

            return response.json();
        })

        .then(function (data) {

            console.log(data);

            const dataCurrent = data.current;
            console.log(dataCurrent);
            console.log(dataCurrent[1]);

            const myWeatherCondition = data.current.condition.text;
            console.log(myWeatherCondition);
            const myIcon = dataCurrent.condition.icon
            console.log(myIcon);
            returnWeatherCondition(myWeatherCondition, myIcon);


            const myUV = dataCurrent.uv;
            console.log(myUV);
            returnUV(myUV);

            const myTemperature = dataCurrent.temp_f;
            console.log(myTemperature);
            const myFeelsLike = dataCurrent.feelslike_f;
            console.log(myFeelsLike);
            returnTempature(myTemperature, myFeelsLike);

            const myHumidity = dataCurrent.humidity;
            console.log(myHumidity);
            returnHumidity(myHumidity);

            const myWind = dataCurrent.wind_mph;
            console.log(myWind);
            returnWind(myWind);

            const myAirQuality = dataCurrent.air_quality['us-epa-index'];
            console.log(myAirQuality);
            returnAirQuality(myAirQuality);
        });

    document.querySelector('#showTodayDate').innerText = todayDate;
};

function returnWeatherCondition(weatherCondition, weatherIcon) {

    document.querySelector('#showWeatherCondition').innerText = weatherCondition;

    document.querySelector('img').src = 'https:' + weatherIcon;
};

function returnUV(uv) {
    document.querySelector('#showUV').innerText = uv;
};

function returnTempature(tempature, feelsLike) {

    document.querySelector('#showTempature').innerText = 'Actual: ' + tempature + '° fahrenheit';

    document.querySelector('#showFeelsLike').innerText = 'Feels like: ' + feelsLike + '° fahrenheit';
};

function returnHumidity(humidity) {
    document.querySelector('#showHumidity').innerText = humidity + '%';
};

function returnWind(wind) {
    document.querySelector('#showWind').innerHTML = wind + ' MPH';
};

function returnAirQuality(airQuality) {

    let standardMeaning = '';

    if (airQuality === 1) {
        standardMeaning = 'Good: ';
    }
    else if (airQuality === 2) {
        standardMeaning = 'Moderate: ';
    }
    else if (airQuality === 3) {
        standardMeaning = 'Unhealthy for sensitive group: ';
    }
    else if (airQuality === 4) {
        standardMeaning = 'Unhealthy: ';
    }
    else if (airQuality === 5) {
        standardMeaning = 'Very Unhealthy: ';
    }
    else if (airQuality === 6) {
        standardMeaning = 'Hazardous: ';
    };

    document.querySelector('#showAirQuality').innerText = standardMeaning + airQuality;
};