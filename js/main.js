// Goal: Enable your user to enter a city + country and return the temperature in Fahrenheit



document.querySelector('button').addEventListener('click', searchLocation)

//function to fetch info from weather site
function searchLocation() {
    //store user input in variable
    let city = document.querySelector('#city').value
    let country = document.querySelector('#country').value
    let Key = 'cc6c6f28e7b84a72bd62b604a822491c'
    let url = `http://api.weatherbit.io/v2.0/current?key=${Key}&city=${city}&country=${country}`


    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            let fahrenheit = (data.data[0].temp* 9/5) + 32
            document.querySelector('h2').innerText = data.data[0].city_name
            document.querySelector('h4').innerText = data.data[0].country_code

            document.querySelector('p').innerText =
                `It is ${fahrenheit}° in ${data.data[0].city_name},${data.data[0].country_code} `
            
            
            })
            .catch(err => { 
            console.log(`error ${err}`)
        })

    


}