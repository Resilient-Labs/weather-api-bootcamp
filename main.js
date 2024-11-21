// Wait for the document to load
document.addEventListener("DOMContentLoaded", function () {
    // Get the form element
    const form = document.getElementById('weatherForm');

    // Add an event listener for when the form is submitted
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the values entered by the user
        const city = document.getElementById('city').value;
        const country = document.getElementById('country').value;

        // Construct the API URL
        const apiKey = '8809bca215ba4c2ca77ac3ed72fd3a4e';
        const apiUrl = `https://api.weatherbit.io/v2.0/current?city=${city}&country=${country}&key=${apiKey}&units=I`;

        // Fetch the weather data
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('City not found');
                }
                return response.json();
            })
            .then(data => {
                // Display the temperature and weather description
                const temperature = data.data[0].temp;
                const description = data.data[0].weather.description;
                document.getElementById('temp').innerText = `Temperature: ${temperature}°F, Weather: ${description}`;
            })
            .catch(error => {
                // Handle errors
                console.error('Error fetching data:', error);
                document.getElementById('temp').innerText = 'Error fetching data';
            });
    });
});
