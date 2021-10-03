// CASS group help work together with the last .thendata to get the temp to dispaly. 

document.querySelector('button').addEventListener('click', weather)

function weather(){
    const city = document.querySelector('.city').value
    const country = document.querySelector('.country').value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}, ${country}&units=imperial&appid=7aa8a92b00737d0587f7ef9f7f7e33c7`
    fetch(url)
    .then(response => {
        console.log(response)
        return response.json()
        })
        .then(data =>{document.querySelector('h3').innerText= data.main.temp
    console.log(data)
    })
}
