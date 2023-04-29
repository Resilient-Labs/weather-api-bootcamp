const apiKey = '5ea1d299f5c9498999d80710230804';
const form = document.querySelector('form');
const temperature = document.querySelector('#temperature');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const city = document.querySelector('#city').value;
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      temperature.textContent = `Current temperature in ${data.location.name}: ${data.current.temp_f}°F`;
    })
    .catch(error => console.error(error));
});
