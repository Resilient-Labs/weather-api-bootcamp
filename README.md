# Weather API 🌦 

Enter your location (city and state) and get back the current temperature.

**Live Demo:** <i><a href="https://weather-api-jenna-nguyen.netlify.app/">Demo</a> for display only, needs API key for functionality.</i>

<img width="951" alt="Weather API" src="https://user-images.githubusercontent.com/88993361/137640268-94ad1dc5-1c8e-4b95-a84d-e9bcce01aef6.png">

## How It's Made

This is a simple weather application (focused on the U.S.) that starts by storing the user input (city and state) as a variable to later enter as a parameter value in the Open Weather API.

## What I Learned
Despite this being a simple usage of an API, this project allowed me to experiment with parameters. Because I was using the city and state format of the Open Weather API I was wondering how strict it would be especially since we're depending on user input for the fetch to work. Would it confuse cities that have the same names? I figured out that it could be finicky at times because it requires the state to be written in full and not just as initials, so we have to be stricter on how the user inputs their location. Projects like these emphasize the importance of not only researching your APIs but also thoroughly testing your applications because despite the API "successfully" fetching data, it could be outputing the temperature for Everett, Washington when in actuality the user wants Everett, Massachusetts.
