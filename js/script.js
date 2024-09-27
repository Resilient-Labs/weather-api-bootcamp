document.querySelector('button').addEventListener('click', pull)

const key = '7bea6e525f51dfd6acc5ccc84555c571'

function pull(){
    let lon = document.getElementById('lon').value
    let lat = document.getElementById('lat').value
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)

            document.querySelector('h2').innerText = data.name
            document.querySelector('h3').innerText = 1.8 * (data.main.temp - 273) +32 

        })
        .catch(err => {
            console.log(`error ${err}`)
    })
}