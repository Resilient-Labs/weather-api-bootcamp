# simple-api-weather

This is a simple app that returns a location's temperature. The user inputs a location and clicks enter/on the button and the current temperature of that location is returned. 

Link to Project: https://simple-temperature-api.netlify.app/

![Project Image](/pic/weather.png)


### How It's Made:

Tech used: HTML, CSS, JavaScript

This weather app uses 1 API (openweather). It is made using an input, event listener, function, and fetch statement. First, the user enters a city + country code as the input. Next, there is an event listener on the 'Get Temperature' button/the enter key. When either is clicked, a function runs. Within the function is a fetch statement which contacts the API with the request. Finally, the current temperature is returned to the DOM.  


### Lesson Learned

I learned how to fetch data from an API. In this case, the API url needs a city and country code parameter to fetch the temperature. The city + country code is retrieved from the input and inserted into the url through a template literal.  
 

###