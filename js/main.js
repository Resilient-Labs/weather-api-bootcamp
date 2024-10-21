/* the specific codes that I would like to use are :
city_name: City name.
description: Text weather description.

*/
import { apiKey } from "./apikeys"

document.querySelector('#realbutton').addEventListener('click', getTemperature)

function getTemperature() {
    const city = document.querySelector('#city').value
    const country = document.querySelector('#country').value

    const url = `https://api.weatherbit.io/v2.0/current?key=${apiKey}&city=${city}&country=${country}&units=I`

    console.log('This is the entered city:', city)
    console.log('This is the entered country:', country)

    fetch(url)

        .then(res => res.json())
        .then(data => {
            console.log(data)
            console.log(data.data[0].city_name)
            console.log(data.data[0].state_code)
            console.log(data.data[0].temp)
            console.log(data.data[0].country_code)




            document.querySelector('h2').textContent = `The Current temperature in ${city} is ${data.data[0].temp} degrees fahrenheit.`


        })
        .catch(err => {
            console.error(`error ${err}`)
        })

}