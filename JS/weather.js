// Need to find a valid api to fetch weather from
document.querySelector('button').addEventListener('click',weather)
function weather(){
    const cityText = document.querySelector('#cityName').value
    const countryText = document.querySelector('#countryName').value
    const userText = cityText +','+ countryText
    fetch(`http://api.weatherapi.com/v1/current.json?key=455126bd9db748db830143454262209&q=${userText}`)
    // fetch(`http://api.weatherapi.com/v1/search.json?key=455126bd9db748db830143454262209&q=${userText}`)
.then(res => res.json())
.then(data =>{
    console.log(data)   
    console.log(data.location.name)
    document.querySelector('h2').innerText = data.location.name
    console.log(data.current.temp_f)
    let Temperature = data.current.temp_f
    document.querySelector('h3').innerText = `The current temperature is ${Temperature}°F`
    console.log(data.current.condition.text)
     console.log(`https:${data.current.condition.icon}`)
     document.querySelector('img').src = `https:${data.current.condition.icon}`
})
}
//Search through the data to find what I need
// Weather
// Temperature
// Location
// Store the data unto something I can put in the dom