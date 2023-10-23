# 🌦 Project: Weather API

### Goal: Enable your user to enter a city + country and return the temperature in Fahrenheit
Project Name: Weather Forecast Web App

Description:
This Weather Web App allows users to check the current temperature in Fahrenheit for any city and country. When a user enters the city and country in the provided input fields and click the "Check" button the app fetches real-time weather data from the OpenWeatherMap API and displays the temperature on the webpage.

Link to Project: https://alejandralondev.github.io/weather-api-bootcamp/

Screenshot: ![Screenshot 2023-10-23 at 2 00 27 AM](https://github.com/alejandralondev/weather-api-bootcamp/assets/145242183/a2a5d997-a70c-400b-bad2-a8c3ee2bf4ac)


Weather Forecast Web App

How It's Made:

Tech Used: HTML, CSS, JavaScript
Framework: None (Vanilla JavaScript)
Implementation Details:
I built this Weather Forecast Web App using HTML for the structure, CSS for styling, and plain JavaScript for functionality. The app features a clean and intuitive user interface. Users input the city and country, and the app dynamically fetches weather data from the OpenWeatherMap API. Error handling ensures that the app displays a friendly message if the city or country input is empty or if there are issues fetching data from the API. The temperature is displayed in Fahrenheit, providing users with the current weather for the specified location.

Optimizations:

Implemented caching mechanisms for API responses to enhance user experience and reduce API calls.
Utilized asynchronous JavaScript to ensure smooth user interaction without freezing the UI during API requests.

Lessons Learned:
Building this Weather Forecast Web App made me learn about error handling and the throw statement and how to use it to enhance user experience should the API encounter an error. The statements after throw won't be executed, and this was something new to implement into my code.
