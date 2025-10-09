

//listen for click
//get city
////setup URL from weather app api
//send request, fetch the information
//exract temp out of response
//display temp on dom


document.querySelector('button').addEventListener('click', getWeather)

function getWeather() {
    const city = document.querySelector('input').value;
    const apikey = "b6be0c6025dbeadaf97eead3cf2af068"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

    fetch(url)
        .then(res => res.json())
        .then(data => {



            console.log(data)
            //help with Michael K for kelvins to farenheit Temp conversion
            const kelvin = data.main.temp; 
            const celsius = kelvin - 273.15;
            let fahrenheit = (celsius * 9 / 5) + 32;
            document.querySelector('p').innerText = fahrenheit.toFixed(0)
            document.querySelector('').innerText = fahrenheit.toFixed(0)
        })

        .catch(err => {
            console.log(`error ${err}`)
        });
}