// button for getWeather function
document.querySelector('button').addEventListener('click', getWeather);

function getWeather(e) {
    // this literally "prevents" the default form
    e.preventDefault();

    // input for the city and country
    let city = document.querySelector('#city').value;
    let country = document.querySelector('#country').value;

    // API url
    const url = `https://api.weatherapi.com/v1/current.json?key=38f5931344034364a9e173940230404&q=${city},${country}&aqi=no`;

    //fetch 
    fetch(url)
        .then(res => res.json())
        .then(data => {
            // Log the API response data to the console
            console.log(data);

            // Display the temperature in degrees Fahrenheit
            document.querySelector('.degrees').innerText = "It's now " + data.current.temp_f + ' °F and';

            // Display the weather condition and location
            document.querySelector('.text').innerText = data.current.condition.text + " , in ";

            // Create an image element for the weather condition icon
            const iconUrl = `https:${data.current.condition.icon}`;
            const icon = document.createElement('img');
            icon.src = iconUrl;
            const container = document.querySelector('.weather-icon');
            const existingIcon = container.querySelector('img');
            if (existingIcon) {
                container.removeChild(existingIcon);
            }
            container.appendChild(icon);
            // Display the city and country
            document.querySelector('.city').innerText = data.location.name + ', ';
            document.querySelector('.country').innerText = data.location.country;
        })
        .catch(err => {
            // log if error/
            console.log(`error ${err}`);
        });
}
