//Goal: Enable your user to enter a city + country and return the temperature in Fahrenheit
document.querySelector('button').addEventListener('click', getTemp)
function getTemp() {
   const country = document.querySelector('#country').value
    const city =  document.querySelector('#city').value

//const region = document.querySelector('#region')
//notes: question mark= starting mark, every single one after that is sepeated by &.
    const url = `http://api.weatherapi.com/v1/current.json?key=a95ab548de894c73b07220619213009&q=${city}&country=${country}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector('h3').innerHTML = data.current.temp_f
            console.log(data.current.temp_f)
            // temp_f
        })
        .catch(err => {
            console.log('error')
        })
}

  

