// bdd5abcd8b12b64e538a7529cfd81891

 let geo = document.querySelector('.getGeo').addEventListener('click', retrieveInput)
 
                    
    function retrieveInput(){ console.log('hi')
// user input city and country 
// store them into variables
        let convert = document.querySelector('input').value;
        let [city,country] = convert.split(',');
                    let url = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&appid=bdd5abcd8b12b64e538a7529cfd81891`
                    //retrieve input from city state and country
                    // get lat & lon
                    //What does a cloud wear under his raincoat? Thunderwear...
                        fetch(url)
                            .then (res => res.json())
                            .then (data => {
                                console.log(data)
                                let lat = data[0].lat
                                console.log(`latitude ${data[0].lat}`)
                                let lon = data[0].lon
                                console.log(`longitude ${data[0].lon}`)
                                document.querySelector('.location').innerHTML = `Your weather in ${data[0].name}, ${data[0].state}, ${data[0].country}`
                     //put lat & lon into new fetch for the weather

                                let urlTwo = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=bdd5abcd8b12b64e538a7529cfd81891`
                                    fetch(urlTwo)
                                    .then (res => res.json())
                                    .then (dataOne => {
                                        console.log(dataOne)
                                        let round = Math.floor(dataOne.main.temp)
                                        document.querySelector('.temp').innerHTML = round
                                        document.querySelector('.description').innerHTML = dataOne.weather[0].
                                        main
                                        // document.querySelector('img').src = dataOne.weather[0].icon FIGURE OUT API WEATHER ICON
                                    })
                            .catch(errOne => {
                                console.log(`error ${errOne}`)
                                    })
                             })
                                        
        
                    
                }




    // class WeatherApp{
    //     constructor(city,country) {
    //         this.city = city
    //         this.country = country
    //     }

               

                
    // }

    // const getWeather = new WeatherApp
// data got to geolocation
// geo data send back lat & lon 
//lat & lon get sent to weather app
//if weather sent in celsius convert to fahrenheight 
//display weather