//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

// CASS group help work together with the last .thendata to get the temp to dispaly. 

document.querySelector('button').addEventListener('click', weather)

function weather(){
    const city = document.querySelector('.city').value
    const country = document.querySelector('.country').value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}, ${country}&units=imperial&appid=114091f0852c3d6b1adbfa85bf4106b7`
    fetch(url)
    .then(response => {
        console.log(response)
        return response.json()
        })
        .then(data =>{document.querySelector('h3').innerText=data.main.temp
    console.log(data)
    })
}
