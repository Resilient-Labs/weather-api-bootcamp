# 🌦 Project: Weather API

### Goal: Enable your user to enter a city + country and return the temperature in Fahrenheit

This simple weather API allows users to input a city and country to view the current weather. The display provides the date and a corresponding image related to the weather on that date.

![Screenshot of the Weather App](<img/simple weather app api.png>)

## How It's Made:
**Tech used:** HTML, CSS, JavaScript

I began this project by structuring a simple HTML layout to take user inputs for the city and country. With the user inputs, I then use JavaScript to fetch data from the weather API. Upon receiving the weather data, the JavaScript then dynamically updates the DOM to display the current date and a corresponding weather image. I styled the UI using CSS to make it visually appealing and intuitive.

## Optimizations

To improve the user experience, I've optimized the image. This ensures that the page loads quickly without waiting for all the images. Additionally, I added error handling to cater for scenarios where the user might input a city or country that's not recognized by the API, giving feedback to try a different location.

## Lessons Learned:

Building this project gave me deeper insights into API integration using pure JavaScript. One of the best moments was when I was able to successfully parse and display the data in a user-friendly manner. 
