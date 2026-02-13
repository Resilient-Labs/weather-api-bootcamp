//[https://geocode.maps.co/docs] takes city and country
// returns latitude and longitude that are used by a weather api [https://www.weatherapi.com/]


document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();
    addressToCoordinates();
});

function addressToCoordinates() {
    const city = document.querySelector('#city').value;
    const state = document.querySelector('#state').value || '';
    const country = document.querySelector('#country').value;


    const geoKey = 'c10413ffc4334951aa9225330250110';
    const geoUrl = `https://geocode.maps.co/search?city=${city}&state=${state}&country=${country}`;

    fetch(geoUrl)
        .then(res => res.json())
        .then(data => {
            const weatherUrl = `https://api.weatherapi.com/v1/current.json?key=${geoKey}&q=${data[0].lat},${data[0].lon}`;
            console.log(data);
            return fetch(weatherUrl);
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            document.querySelector('#temperature').innerText = `${data.current.temp_f}°F`;
            if (data.location.region)
                document.querySelector('#location').innerText = `${data.location.name}, ${data.location.region}, ${data.location.country}`;
            else
                document.querySelector('#location').innerText = `${data.location.name}, ${data.location.country}`;
        })
        .catch(error => {
            console.log(error);
        });

}