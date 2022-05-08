
document.querySelector('button').addEventListener('click', getWeather)

function getWeather(){

    let cityVal = document.querySelector('input').value
    let countryVal = document.querySelector('input').value
    console.log(cityVal)
    let url = `http://api.weatherapi.com/v1/current.json?key=1bf5be0f357c4fb3942185220220305&q=${cityVal}&aqi=no`
fetch(url)
.then(res => res.json())
.then(data =>{
     console.log(data)
     document.querySelector('h2').innerText = data.current.temp_f
})
.catch(err => {
    console.log(`error &{err}`)
});
}
