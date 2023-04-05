let heading = document.querySelector('#suggest')
document.querySelector('button').addEventListener('click', () =>{
    let location = document.querySelector('input').value
    fetchWeather(location)
})

function fetchWeather(location){
    fetch(`https://api.weatherapi.com/v1/current.json?key=f67b3d6a11654194a2c151527230504&q=${location}&aqi=no`)
    .then(res => res.json())
    .then((data) => {
        renderWeather(data)
    })
}

function renderWeather(data){
    heading.classList.add("hidden")
    const weatherRender =`
        <h3>${data.location.name}, ${data.location.region}</h3>
        <img src="${data.current.condition.icon}">
        <p>${data.current.temp_f} &deg F</p>
        <p>${data.current.condition.text}</p>
        <span>${data.location.localtime}</span>
    `
    document.querySelector('#weather').innerHTML = weatherRender
}