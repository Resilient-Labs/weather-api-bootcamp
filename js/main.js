//what I have to do 
//User will set the city and country. Use that location to get the weather of the day from that location 
//get api fro weather satellite

//add event listener for the button 
document.querySelector('button').addEventListener('click', getWeather)

//create a function 
function getWeather(){
    let selectCity=document.querySelector('#inputCity').value
    let selectCountry=document.querySelector('#inputCountry').value
    console.log(selectCity)
    console.log(selectCountry)

    const url=`https://api.openweathermap.org/data/2.5/weather?q=${selectCity},${selectCountry}&APPID=a5387c6cf57752657d32cdebecedb26d`

    //'fetch' is connected to the browser
    //console--object
    //log--function
    fetch (url)
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        //temp has to be converted from K to F
        document.querySelector('h3').innerHTML=(data.main.temp*(9 / 5) - 459.67)
    })
    .catch(err=>{
        console.log(`error${err}`)
    })
}