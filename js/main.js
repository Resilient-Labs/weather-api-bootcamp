//Enable your user to enter a city + country and return the 
//temperature in Fahrenheit
//https://www.weatherapi.com/api-explorer.aspx


document.querySelector('button').addEventListener('click', getWeather)

function getWeather(){
    const getCity = document.getElementById('city').value
    fetch(`https://api.weatherapi.com/v1/current.json?key=ca85e655367e486aacd192618221510&q=${getCity}&aqi=no`)
    .then(res => res.json())
    .then(data => {
              
         document.querySelector('h2').innerText = `The current temperature in ${getCity} is ${data.current.temp_f}°F `
   
    })
    .catch(err => {
        document.querySelector('h2').innerText = 'Not A City'
        console.log(`error ${err}`)
    })
}



