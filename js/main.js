const button = document.querySelector('button')
// document.querySelector('.results').style.display = 'none'
button.addEventListener('click', () => {
    let search = document.querySelector('input').value
    const url = `https://api.weatherapi.com/v1/current.json?key=4c455336721b4765a08175859252603&q=${search}&days=1&aqi=yes&alerts=no`

    fetch(url) //Make sure to include to search for date
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data)
        document.querySelector('.results').style.display = 'block'
        document.querySelector('.cityState').innerHTML = `${data.location.name}, ${data.location.region}`
        document.querySelector('.country').innerHTML = data.location.country
        document.querySelector('.describe').innerHTML = data.current.condition.text
        document.querySelector('.temp').innerHTML = `${data.current.temp_f}\u00B0F`
        document.querySelector('img').src = `https:${data.current.condition.icon}`
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
})