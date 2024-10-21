

document.querySelector('#getTempButton').addEventListener('click', getWeather);

function getWeather() {
    let userInput = document.querySelector('#cityInput', '#countryInput').value;

    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${userInput}&limit=1&appid=62a4ef726e892c3ebd3f60ee52e77367`)
        .then(res => res.json())
        .then(data => {
            if (data.length > 0) {
                console.log(data);
                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=62a4ef726e892c3ebd3f60ee52e77367`)
                    .then(res => res.json())
                    .then(weatherData => {
                        console.log(weatherData);
                        // document.querySelector('h2').innerText = weatherData.weather

                        const kelvinTemp = weatherData.main.temp;
                        const fahrenheitTemp = (kelvinTemp - 273.15) * 9 / 5 + 32;
                        document.querySelector('h1').innerText = `Temperature in Fahrenheit: ${fahrenheitTemp.toFixed(2)}°F`
                        console.log(`Temperature in Fahrenheit: ${fahrenheitTemp.toFixed(2)}°F`);
                    })
                    .catch(err => {
                        console.log(`error ${err}`);
                    });
            } else {
                console.log('Location not found');
            }
        })
        .catch(err => {
            console.log(`error ${err}`);
        });
}
// const kelvinTemp = weatherData.main.temp;
        
// const fahrenheitTemp = (kelvinTemp - 273.15) * 9/5 + 32;
// console.log(`Temperature in Fahrenheit: ${fahrenheitTemp.toFixed(2)}°F`);
    // document.querySelector('h1').innerText = data.explanation 
    // document.querySelector('h2').innerText = data.name 

    // .catch(err =>{                      
    //     console.log(`error ${err}`) 
    // })
    

    // // document.querySelector('button').addEventListener('click', getWeather )  

// function getWeather{

// fetch(`https://api.openweathermap.org/geo/1.0/direct?q=Chicago,IL,US&limit=1&appid=62a4ef726e892c3ebd3f60ee52e77367`)
//     .then(res => res.json())                                                                                                            //you had to nest the first url with the second.
//     .then(data => {
//         console.log(data)
//         fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=62a4ef726e892c3ebd3f60ee52e77367`)
//         .then(res => res.json())
//         .then(data => {
//             console.log(weatherData)
//         })
//         const kelvinTemp = weatherData.main.temp;
//         const fahrenheitTemp = (kelvinTemp - 273.15) * 9/5 + 32;
//         console.log(`Temperature in Fahrenheit: ${fahrenheitTemp.toFixed(2)}°F`);
//     })

// }


// .catch(err =>{                      
//     console.log(`error ${err}`) 
// })
// }



