// https://api.openweathermap.org/data/2.5/weather?q={city name}
// &units=imperial&appid=YOURKEY

document.querySelector('button').addEventListener('click', startButton )
// let date = document.querySelector('input').value

function startButton(){
    let place = document.querySelector('input').value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${place}
    &units=imperial&appid=284e49c9d91e84ee99980f3e8f07f935`
    fetch(url)
    .then((res) => res.json())
    .then((weatherData) => {
    document.querySelector(".putHere").innerText = `${weatherData.main.temp}°Farenheight`;
    })
    .catch((err) => {
        console.log(`error ${err}`);
    });
}