// button to get daily weather
document.querySelector('button').addEventListener("click", degreesF)


// fetch API data
function degreesF(){
    
    let getCity = document.querySelector('.inputCity').value; 
    let getCountry = document.querySelector('.inputCountry').value


    // if(!getCountry.includes("XX")){
    //     alert("Enter location in 'US' format")
    //     return
    // }

    // const key = "91192d8655164a51a68da763a25c2b3c"
    // const url = `https://api.weatherbit.io/v2.0/current?&city=${getCity}&country=${getCountry}&key=${key}`;
    const url = `https://api.weatherbit.io/v2.0/current?key=91192d8655164a51a68da763a25c2b3c&city=${getCity}&country=${getCountry}`;


    https://api.weatherbit.io/v2.0/current?key=91192d8655164a51a68da763a25c2b3c&city=miami&country=us

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)

            if (data.data && data.data.length > 0) {
                const weatherData = data.data[0]
            document.querySelector('.city').innerText = `City: ${weatherData.city_name}`
            document.querySelector('.country').innerText = `Country: ${weatherData.country_code}`
            document.querySelector('.temp').innerText = `${weatherData.app_temp}°F`
            document.querySelector('.details').innerText = `Weather: ${weatherData.weather.description}`
        }
         else {
            document.querySelector('.city').innerText = "City not found!"
            document.querySelector('.country').innerText = ""
            document.querySelector('.temp').innerText = ""
            document.querySelector('.details').innerText = ""
         }
        })

    // .catch(err => {
    //     console.log(`error ${err}`)
    // })

}

