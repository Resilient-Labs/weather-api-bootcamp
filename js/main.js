//user has to be able to enter a city and country

//user's input will be found in a weather based api 

//user can click button to get answer in DOM 

//api will display it's information

//maybe seperate api for the static weather reports, ( i want a few city's weather displayed)

//'/api https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/42.7655%2C-71.0836?unitGroup=us&include=current&key=KRL3S8LNBNPZNW8LELCGZNXDG&contentType=json'

document.querySelector('button').addEventListener('click', getWeather)

function getWeather(){
    const input = document.querySelector('#locationInput').value
    console.log(input)
    if (!input) {
        console.log('Please enter a location')
    }
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${input}?unitGroup=us&include=current&key=KRL3S8LNBNPZNW8LELCGZNXDG&contentType=json`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('h4').innerText = `It is ${data.currentConditions.temp}°F and ${data.currentConditions.conditions} outside now in ${data.resolvedAddress}! `
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}

const albanyUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Albany%20New%20York?unitGroup=us&include=current&key=KRL3S8LNBNPZNW8LELCGZNXDG&contentType=json`
    fetch(albanyUrl)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('#albanyNY').innerText = `It is ${data.currentConditions.temp}°F and ${data.currentConditions.conditions} in ${data.resolvedAddress} `
    })
    .catch(err => {
        console.log(`error ${err}`)
    })

const parisUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Paris%2C%20France?unitGroup=us&include=current&key=KRL3S8LNBNPZNW8LELCGZNXDG&contentType=json`
    fetch(parisUrl)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('#parisFrance').innerText = `It is ${data.currentConditions.temp}°F and ${data.currentConditions.conditions} in ${data.resolvedAddress} `
    })
    .catch(err => {
        console.log(`error ${err}`)
    })

const egyptUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Giza%2C%20Egypt?unitGroup=us&include=current&key=KRL3S8LNBNPZNW8LELCGZNXDG&contentType=json`
    fetch(egyptUrl)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('#gizaEgypt').innerText = `It is ${data.currentConditions.temp}°F and ${data.currentConditions.conditions} in ${data.address} `
    })
    .catch(err => {
        console.log(`error ${err}`)
    })