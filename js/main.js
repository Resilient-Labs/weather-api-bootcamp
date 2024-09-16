//Goal: Enable your user to enter a city + country and return the temperature in Fahrenheit




document.querySelector('button').addEventListener('click', getTemp)





function getTemp() {


    const selectedCity = document.querySelector('#city').value
    const countryCode = document.querySelector('#country').value

    //Use this for the user entering a city
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${selectedCity},${countryCode},&appid=041f3181e9040588c9b140cbf9e134fd`) //${countryCode}
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
            console.log("The name of the city you looked up is: ", data[0].name)
            console.log("The country code for this city is: ", data[0].country)
            console.log("The latitude for this city is: ", data[0].lat)
            console.log("The longitude for this city is: ", data[0].lon)

            let cityName = data[0].name
            let lat = data[0].lat
            let lon = data[0].lon


            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=041f3181e9040588c9b140cbf9e134fd`)
                .then(res => res.json()) // parse response as JSON
                .then(data => {
                    console.log(data)
                    console.log(data["main"])
                    console.log(data["main"].temp)

                    let kelvinTemp = data["main"].temp
                    let fahrenheitTemp = (kelvinTemp - 273.15) * 1.8 + 32



                    document.querySelector('h2').innerText = cityName
                    document.querySelector('h3').innerText = fahrenheitTemp
                })
                .catch(err => {
                    console.log(`error ${err}`)

                });





        })
        .catch(err => {
            console.log(`error ${err}`)

        });





}


function GetTempUS() {

    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=New York,NY,&appid=041f3181e9040588c9b140cbf9e134fd`)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
            console.log("The name of the city you looked up is: ", data[0].name)
            console.log("The country code for this city is: ", data[0].country)
            console.log("The latitude for this city is: ", data[0].lat)
            console.log("The longitude for this city is: ", data[0].lon)


        })
        .catch(err => {
            console.log(`error ${err}`)
            //console.log(err)

            //document.querySelector('h2').innerText = err
        });


}
