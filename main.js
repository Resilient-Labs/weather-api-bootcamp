// Goal: Enable your user to enter a city + country and return the temperature in Fahrenheit

//the user will enter a city and country

//on click the server responds with the temperature in Farenheit

document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){

    const userCity = document.querySelector('.city').value
    const userCountry = document.querySelector('.country').value
    const apikey = "3a77db9e1c21020990f829d57b306cbf"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${userCity},${userCountry}&appid=${apikey}`

    console.log(userCity)
    console.log(userCountry)

    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        const temp = (data.main.temp - 273.15) * 9 / 5 + 32
        document.querySelector('h3').innerText = temp.toFixed(1) + " degrees Farenheit"



    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}