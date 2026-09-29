document.querySelector("button").addEventListener("click", displayTemp)

function displayTemp() {

    const apiKey = "570cc879f0e54d83b5d235705262209";
    const val = document.querySelector("input").value

    fetch (`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${val}&aqi=no
`) 
        .then(res => res.json())
        .then(data => {
            console.log(data)

            const [year, month, day] = data.location.localtime.split(/[- ]/)
            document.querySelector("#info1").innerText= `Today is ${month} ${day}, ${year}`
            document.querySelector("#info2").innerText= 
            `${data.current.temp_f} F
            ${data.location.country}: ${data.location.name}, ${data.location.region} ${data.current.condition.text}`
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
        
}