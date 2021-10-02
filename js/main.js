document.querySelector('button').addEventListener('click', getWeather)

function getWeather() {
    const choiceCity = document.getElementById('city').value
    const choiceCountry = document.getElementById('country').value
    document.getElementById('city').value = ''
    document.getElementById('country').value = ''
    const choices = `${choiceCity} ${choiceCountry}`
    
    //paramaters comes after the question mark. for multiple paramaters you need to add the & symbol 
    const url = `http://api.weatherapi.com/v1/current.json?key=935be36f7f594233b2b202003210210&q=${choices}`

    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
        console.log(data);
        console.log(data.location.country)
        console.log(data.location.name);
        console.log(data.current.temp_f);
        document.querySelector('h2').innerText = `${Math.round(data.current.temp_f)}F ${data.current.condition.text}`
        document.querySelector('img').src = data.current.condition.icon
        document.querySelector('h3').innerText = `Feels like ${Math.round(data.current.feelslike_f)}F`
        document.querySelector('h4').innerText = `${data.current.humidity} humidity`
        document.querySelector('img').style.display = "inline-block"
    })
    .catch(err => {
        console.log(`error ${err}`)
        document.querySelector('h2').innerText = 'Please enter City or Country'
        document.querySelector('img').style.display = "inline-block"
    });
    

}