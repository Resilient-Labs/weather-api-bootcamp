
document.querySelector('button').addEventListener('click', getWeather)

function getWeather(){
   let city = document.querySelector('#city').value 
   let country = document.querySelector('#country').value


   fetch(`http://api.weatherapi.com/v1/forecast.json?key=b330eda19c2a497d8fa193958221610&q=${city}&days=1&aqi=no&alerts=no`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data)
    
    // place in DOM 
    document.querySelector('h2').innerText = data.location.name + ', ' + data.location.region
    document.querySelector('h4').innerText = data.location.country
    
    //define Fahrenheit temperature and put in DOM 
    let tempInF = data.forecast.forecastday[0].day.avgtemp_f
    document.querySelector('h3').innerText = tempInF + '℉'

})
    .catch(err => {
        console.log(`error ${err}`)
});
}
