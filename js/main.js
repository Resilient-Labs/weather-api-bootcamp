

document.querySelector('button').addEventListener('click', getLocation)
let akey = 'df401b96871cf27546f462d9f5656698'
//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

//Geocode for getting lat and long by country
//http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
//http://api.openweathermap.org/geo/1.0/direct?q=philadelphia,USA&limit=2&appid=df401b96871cf27546f462d9f5656698


function getLocation(e){
    e.preventDefault
    let country = document.getElementById('country').value
    let city = document.getElementById('city').value

    let url = `https://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=1&appid=${akey}`

    fetch(url) 
        .then(res => res.json()) // parse response as JSON 
        .then(data => { 

      getTemperature(data[0].lat, data[0].lon)
    }) 

    .catch(err => { 
        console.log(`error ${err}`) 
    }); 
}

function getTemperature(lon, lat){
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${akey}&units=imperial`


    fetch(url) 
        .then(res => res.json()) // parse response as JSON 
        .then(data => { 
            console.log(data) 
            console.log(data.main.temp)
    
            document.querySelector('span').innerText = -data.main.temp
    }) 
    
    .catch(err => { 
        console.log(`error ${err}`) 
    }); 
}
