
document.querySelector("button").addEventListener("click", getTemp)


function getTemp(){
    let selection = document.querySelector("input").value
    let url = `http://api.weatherapi.com/v1/current.json?key=8a6cf086af094c68b4d174031230404&q=${selection}`
    

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            
            document.querySelector("h3").innerText = `Country of Origin : ${data.location.country}`
            document.querySelector("h2").innerText = `Temperature in ${data.location.name}, ${data.location.region} is : ${data.current.temp_f}F°`

        })
        .catch(err => {
            console.log(`error ${err}`)
        })
    
    document.querySelector("input").value = ''
    
}

