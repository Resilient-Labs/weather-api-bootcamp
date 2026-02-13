//The user will enter city + country and return the temperature in Fahrenheit
//kagi = 573e39e3da904aa38cf155148250310
//url = http://api.weatherapi.com/v1/current.json?key=${key}
//temp_f
//country_name
//city

document.querySelector('button').addEventListener('click',getTemp);

function getTemp() {
    //const countryInput = document.querySelector('#countryInput').value;
    //const zipInput = document.querySelector('#chooseZip').value;
    //const cityInput = document.querySelector('#chooseCity').value;
    
    const wildCardInput = document.querySelector('#wildCard').value;

    let kagi = '573e39e3da904aa38cf155148250310';
    //let zip = '02128';
    let temp = 'temp_f';
    //let zipUrl = `http://api.weatherapi.com/v1/current.json?key=${kagi}&q=${zipInput}&${temp}&`;
    //let cityUrl = `http://api.weatherapi.com/v1/current.json?key=${kagi}&q=${cityInput}&${temp}`;
    //let countryUrl = `http://api.weatherapi.com/v1/current.json?key=${kagi}&q=${countryInput}&${temp}`;
    let wildCardUrl = `http://api.weatherapi.com/v1/current.json?key=${kagi}&q=${wildCardInput}&${temp}`;

    //if()
    fetch(wildCardUrl) //fetch at this url
        .then(response => response.json()) //then get the response data
        .then(data => {
            console.table(data)
            document.querySelector('#output').innerText = data.current.temp_f;
        }) //then start using the data
        .catch(error => console.error(error)); //catch errors instead of crashing or something
}
