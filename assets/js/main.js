//Create an event listener for the button to sumbit the city and date
document.querySelector('button').addEventListener('click', weatherReport)

//create an event listener on the input so if the user want to press enter to submit their location instead of clicking on the button it will also run the fucntion
document.querySelector("#citycount").addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
        weatherReport()
    }

})



//create the weather check function

function weatherReport() {

    //clear entry after user submits it 
    //store the input element in a variable for easy access

    let locationInput = document.querySelector('#citycount').value

    //store api key in variable for easy access

    const api = '964f9fc7cda5646a7bc1c1547e3bc6f5'

    //store the url of the API as a value of a variable for easy access

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&appid=${api}`



    fetch(url)
        .then(res => res.json())
        .then(data => {
            //show data retrieved from response 
            console.log(data)

            //create variables to hold the elements from the html that I want to send the data from the API to
            const feelsLike = document.querySelector('#feels-like')
            const locationName = document.querySelector('#location')
            const temp = document.querySelector('#temp')
            const maxTemp = document.querySelector('#max-temp')
            const minTemp = document.querySelector('#min-temp')
            const condition = document.querySelector('#cond')
            const section = document.querySelector('section')
            const tempHead = document.querySelector('#temp-head')
            const feelsHead = document.querySelector('#feels-head')
            const maxHead = document.querySelector('#max-head')
            const minHead = document.querySelector('#min-head')
            const condHead = document.querySelector('#cond-head')
            const condIcon = document.querySelector('#cond-icon')

            //convert the temp response from the api to farenheit from kelvin
            const flTemp = Math.floor(((data.main.feels_like) - 273.15) * (9 / 5) + 32)
            const cTemp = Math.floor(((data.main.temp) - 273.15) * (9 / 5) + 32)
            const minT = Math.floor(((data.main.temp_max) - 273.15) * (9 / 5) + 32)
            const maxT = Math.floor(((data.main.temp_min) - 273.15) * (9 / 5) + 32)

            //pull icon and show icon in DOM
            // **Got this idea from Anais!**
            let icon = data.weather[0].icon
            let iconURL = `https://openweathermap.org/img/wn/${icon}@4x.png`

            //style the section that the information will appear in when the response data is obtained 
            section.style.border = '3px solid rgb(129, 147, 173)'
            section.style.backgroundColor = 'rgb(77, 97, 124)'
            section.style.boxShadow = '1px 3px 15px 8px rgb(166, 184, 198)'

            //return response data back to html elements specified and show on the DOM
            locationName.innerText = `${data.name}, ${data.sys.country}`
            tempHead.innerText = `Current Temp:`
            temp.innerText = `${cTemp}°F`
            feelsHead.innerText = `Feels Like:`
            feelsLike.innerText = `${flTemp}°F`
            maxHead.innerText = `Max Temp:`
            maxTemp.innerText = `${maxT}°F`
            minHead.innerText = `Min Temp:`
            minTemp.innerText = `${minT}°F`
            condHead.innerText = `Current Conditions:`
            condition.innerText = `${data.weather[0].description}`
            condIcon.src = `${iconURL}`




        })
        //catch errors
        .catch(err => {
            console.log(`error${err}`)
        })

    //clear user input after from input box 

    document.querySelector('input').value = ''

}