document.querySelector('button').addEventListener('click', getTemp)

function getTemp(){

    let selection = document.querySelector('input').value
        const url = `http://api.weatherapi.com/v1/current.json?key=cefcb968412245d3af0191310230404&q=${selection}`

    fetch(url)
    
        .then(res => res.json()) // parse response as JSON
        .then(data => {
        console.log(data)

        document.querySelector("h3").innerText = `Country of Origin : ${data.location.country}`
        document.querySelector("h2").innerText = `The temperature in 
        ${data.location.name},${data.location.region} is ${data.current.temp_f}F`
    })

    .catch(err => {
        console.log(`error ${err}`)
    })

    document.querySelector("input").value = ''
}

getTemp()