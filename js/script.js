const cityInput = document.querySelector("#cityInput");
const submitButton = document.querySelector("#submitButton");
const countrySelect = document.querySelector("#countrySelect");

const kelvinToFahrenheit = (k) => { return (k) * (9/5) - 459.67; }

cityInput.addEventListener('keyup', event => {
    if(event.key === "Enter") {
        cityWeather();
    }
})

submitButton.addEventListener('click', cityWeather);

function cityWeather() {
    const city = cityInput.value;
    const country = countrySelect.options[countrySelect.selectedIndex].value.toLowerCase();
    const countryText = countrySelect.options[countrySelect.selectedIndex].text;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)},${country}&appid=${apiKey}`)
        .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
        .then(response => {
            document.querySelector("#cityText").textContent = `The temperature in ${city}, ${countryText} right now is ${Math.round(kelvinToFahrenheit(response.main.temp))}° F.`;
        })
        .catch(err => {
            console.log(`error ${err}`)
            alert("sorry, there are no results for your search")
        });

    cityInput.value = "";
}
