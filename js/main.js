//add event listener for get weather
document.querySelector('#in-the-us').addEventListener('click', getTemp)
document.querySelector('#out-the-us').addEventListener('click', getTempOutsideUS)

//title var
let title = document.querySelector('h2')
//image var
let img = document.querySelector('img')
//title var
let result = document.querySelector('h4')

function getTemp() {
    clear()
    const city = document.querySelector('#city').value
    const state = document.querySelector('#state').value
    const country = document.querySelector('#country').value

    const apiKey = 'ac7a25cc1fd6223acd06a17e1aeccd7f'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&appid=${apiKey}&units=imperial`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            title.innerText = `${city}, ${state}, ${country}`
            result.innerText = `The weather in ${city} is ${data.main.temp}° F`
            console.log(data)
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
}
function getTempOutsideUS() {
    clear()
    const city = document.querySelector('#city-2').value
    const country = document.querySelector('#country-2').value

    // title.innerText = ''
    const apiKey = 'ac7a25cc1fd6223acd06a17e1aeccd7f'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=imperial`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            title.innerText = `${city}, ${country}`
            result.innerText = `The weather in ${city} is ${data.main.temp}° F`
            console.log(data)
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
}
function clear() {
    result.innerText = ''
}