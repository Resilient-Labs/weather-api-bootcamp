// usually start with a click to get the app running
document.querySelector('button').addEventListener('click', makeWeather)

// insert an api key
let api_key = "014631d2c96c603952b85db3d997e201"
function makeWeather(){
    const city = document.getElementById('city').value
    const country = document.getElementById('country').value
   
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=${api_key}`

// then layout the fecth anbd what you want to add to the dom
fetch(url)
    .then(res => res.json())
    .then(data => {

        console.log(data)
        let temp = data.main.temp
        let humidity = data.main.humidity
        document.querySelector('.temp').innerText = temp
        document.querySelector('.humid').innerText = humidity
        // document.querySelector('img').src = photos *to add pics
    })
    .catch(err => {
        console.log(`error ${err}`)
    })

}