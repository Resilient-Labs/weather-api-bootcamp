# ⛅️ Weather App

A simple weather app where you type in a city and a country code, and it shows the current temperature, a weather icon, and a short description of the weather. It uses the Weatherstack API to get the weather data.

**Live Demo:** https://avatar-weather-app.netlify.app

[![Screenshot-2026-09-29-at-3-32-59-AM.png](https://i.postimg.cc/gjMK2sW3/Screenshot-2026-09-29-at-3-32-59-AM.png)](https://postimg.cc/QKT76pVM)

## How It's Made:

**Tech used:**

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)

The page has two inputs, one for the city and one for the country code, and a search button. When you click search, I take what the user typed and put it into the Weatherstack URL.

When the data comes back, I update the page with the weather icon, the description (like "Sunny" or "Light rain"), the temperature, and the city and country name from the response.

## Optimizations

Things I want to improve:

- Show a message on the page when a city isn't found, instead of only logging the error in the console.
- Let the user press Enter to search, not just click the button.
- The app has an Avatar theme, so I want the container's background image to change with the weather: a firebender when it's hot, a waterbender when it's raining, an airbender when it's windy, and so on.

## Lessons Learned:

This project was where I practiced taking user input and using it to build an API request. I learned how to read the response with `console.log(data)` to find where the values I needed were, like the temperature inside `data.current` and the city name inside `data.location`.
