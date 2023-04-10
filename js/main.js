// create event listener for button
// create a innerText for H2 that will display the weather results
// create a querySelector for input value

document.querySelector("button").addEventListener("click", whatsTheWeather)


function whatsTheWeather(){

    let location = document.querySelector("input").value

    const url = `http://api.weatherapi.com/v1/current.json?key=52aba881318041ffb4e04334230504&q=${location}`


    fetch(url) 
    .then(res => res.json()) // parse response as JSON 
    .then(data => { 
        console.log(data) 

        document.querySelector("h2").innerText = data.current.temp_f

        }) 



    .catch(err => { 
        console.log(`error ${err}`) 
    });
}