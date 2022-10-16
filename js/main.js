const input = document.querySelector('.city')
const inputTwo = document.querySelector('.country')
document.querySelector('.checkWeather').addEventListener('click', getWeather)

function getWeather() {
    let location = input.value + ',' + inputTwo.value
    console.log(location)
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=LDB6Z32YZ9GVQE87N4HCRWU5A&contentType=json`)
.then(res => res.json())

.then(data => {
    // data.main.temp is the data we are pulling from the apis object

    //farenheitConverter(data.main.temp)
    document.querySelector("#outputFarenheit").innerText = data.days[0].temp 
})
}

// function farenheitConverter(kelvin) {
//     document.getElementById("outputFarenheit").innerText = kelvin   
//   }