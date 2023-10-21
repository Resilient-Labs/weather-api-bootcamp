//user will enter city and country
//then we will use an api to locate the temp in that exact city within that country


//event listener once button is clicked runs the function 
document.querySelector('button').addEventListener('click', getWeather)

function getWeather(){

    // this takes the user input and stores it into the variable selection
    const selection = document.querySelector('input').value
    
    // we then store the url with the temporal literal selection variable holding the user input in another variable called url
    // using Visual Crossing API
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${selection}?unitGroup=us&key=TNFRD3NC5MCXWYMHGVHFXM3F9&contentType=json`

    // we then fetch data from the url
    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {

        //here we access the data address and display it in our h3
        document.querySelector('h3').innerText = `City + Country: ${data.address}`

        //here we access the data temp and display it in our h24
        document.querySelector('h4').innerText = `Temperature: ${data.currentConditions.temp} °F`

        //here we access the data description and display it in our h5
        document.querySelector('h5').innerText = `Description: ${data.description}`
    })
    //error catcher
    .catch(err => {
        console.log(`error ${err}`)
});
}






