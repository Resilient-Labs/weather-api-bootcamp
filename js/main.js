

document.querySelector('button').addEventListener('click', getWeather)

function getWeather(){

    let city = document.querySelector('#city').value
    let country = document.querySelector('#country').value
    const url = `http://api.weatherapi.com/v1/current.json?key=a95ab548de894c73b07220619213009&q=${city}&country=${country}`


    fetch(url)
    .then(res => res.json())
    .then(data =>{
        document.querySelector('h2').innerText = `The Temperature in ${data.location.name}, ${data.location.region} is ${data.current.temp_f} °F`
    })
    .catch(err =>{
        alert('Provide valid City and country')
        console.log(err)

    })
}