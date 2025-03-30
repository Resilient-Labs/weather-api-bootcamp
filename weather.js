document.querySelector('button').addEventListener('click', getWeather);

function getWeather() {
    // Get the user input from the input fields
    const city = document.getElementById('cityName').value;  // Get the city input
    const country = document.getElementById('countryName').value;  // Get the country input

    const url = `https://api.weatherbit.io/v2.0/current?city=${city}&country=${country}&key=771364f9bb054d9a8b9c6b78086ebbfb&units=I`;

    // HTML elements where we will display the temperature

    // Fetch weather data from the API
    fetch(url)
        .then(res => res.json()) // Convert the response to JSON
        .then(data => {
            console.log(data);

            document.querySelector("h4").innerText = data.data[0].temp ; 
        })
        .catch(err => {
            console.log(`Error: ${err}`);
        });
}