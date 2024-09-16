# 🌦 Project: Weather API

![weather_api](https://user-images.githubusercontent.com/23227549/200642154-7576fd55-6763-46df-9a22-9c03c09c6b8e.png)

Link to the site: https://void-weather-api.netlify.app/

Tech used: HTML, CSS, JavaScript, two differnt weather APIs

An application that allows the user to type in a city and select a country from a list and receive the temperature in Fahrenheit


Optimizations:

This ones a bit of a story...

So I initially set out to find use just one weather API However I was having trouble finding a working one at the time that 
included all the features I needed to complete this project. So I ended up using two different APIs that both stored information mapped to a countrys
county code. Throughout development things seemed and testing the app went well. However I noticed something a bit odd when querying one of my APIs 
with the parameter of "Berlin" as a city. If you're like me, you would expect the associated country code that was returned would be something like "DE"
Much to my surprise the country code i kept receiving as a result of looking in Berlin in Germany was in fact "RU" the country code for Russia.
I spent a long time in a state of bemusement over this, having only ever heard of the one city in Germany. 

So after some research and a lot of typos i found this...


![Berlin_russia](https://user-images.githubusercontent.com/23227549/200644061-688acfe1-6e84-46b3-bb7a-144460ed9f39.png)

Yes...
This is real, 

a real place, that exist

in Russia

Chelyabinsk Oblast berlin

just in case youd liked to look it up yourself sans spelling mistakes.

All fun aside, this presented an incredible hands on example with something that pops up quite a bit in the programming space, data collisions.

This is an example of why it can be tricky to pull topically related resources from differing programmatic sources. 

Because the entire point of APIs is to allow discrete modules of software to engage with one another without having to be
aware of one another implementation. One of the consequent pitfalls is that the original authors of the data are often not privy
to the inclusion of specific data points the other party has utilized.

This can lead to pointers to the same data returning different results. It was easy to uncover with some digging because i made this site from scratch
but had this been within an unfamiliar code base, it could have required a much steeper hill to be overcome in order to fix the issue.

All in all, had a great time developing this one, and learned a bit of geography along the way!
