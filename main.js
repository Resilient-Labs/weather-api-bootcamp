// document.querySelector('button').addEventListener('click', getWeather)


// function getWeather() {
//     let location = document.querySelector('input').value
//     let url= `http://api.weatherapi.com/v1/current.json?key=8de13a449ccb43888c7194129220305&q=${location}`

//     //"?" after URL = starting query parameters

//     // API Key: 8de13a449ccb43888c7194129220305 





// fetch(url) // utilizing the fetch method 
//     .then(res => res.json()) // parse response as JSON - utilizing the "then" method
//     .then(data => { //utilize the then method again to pass "data" as the parameter to pass through the different properties of the object - we utilize "then" twice b/c our response needs to be parsed out from json 
//     console.log(data)
//       console.log(data.hdurl)
//       document.querySelector('h2').innerText=data.location.name
//       document.querySelector('img').src=('https:')+ data.current.condition.icon 
//       document.querySelector('h3').innerText=data.current.temp_f

//     })
//     .catch(err => { //preventative measure so when there is an error, it can be console logged to the person
//         console.log(`error ${err}`)

// });

// }

document.querySelector('button').addEventListener('click', getWeather)

// API key:
// - Your API key is b60047c35f26924b2db7404518a51f21 - Open getWeather

function getWeather() {
    let location = document.querySelector('input').value
    let url= `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=b60047c35f26924b2db7404518a51f21&units=imperial`

    //"?" after URL = starting query parameters


fetch(url) // utilizing the fetch method 
    .then(res => res.json()) // parse response as JSON - utilizing the "then" method
    .then(data => { //utilize the then method again to pass "data" as the parameter to pass through the different properties of the object - we utilize "then" twice b/c our response needs to be parsed out from json 
    console.log(data)
      console.log(data)
      document.querySelector('h2').innerText=data.name + ' ' + data.sys.country
    //   document.querySelector('img').src=('https:')+ data.current.condition.icon 
      document.querySelector('h4').innerText=data.main.temp

    })
    .catch(err => { //preventative measure so when there is an error, it can be console logged to the person
        console.log(`error ${err}`)

});

}