document.querySelector('#btn').addEventListener('click', weatherApi)


function weatherApi (){
    let userInput = document.querySelector('input').value
    console.log(userInput)
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${userInput}?unitGroup=us&key=EL4FSCSSLZU6XJJDPHWFQFV3G&contentType=json`)
     .then(response => response.json())
     .then(data => {
        console.log(data)


        document.querySelector('h2').innerHTML = data.resolvedAddress
        document.querySelector('#lat').innerHTML = data.latitude
        document.querySelector('#lon').innerHTML = data.longitude
        document.querySelector('h3').innerHTML = data.currentConditions.temp
        document.querySelector('#humid').innerHTML = data.currentConditions.humidity
        document.querySelector('p').innerHTML = data.description

     })

}

