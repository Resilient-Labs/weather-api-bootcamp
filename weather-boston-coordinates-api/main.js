
//°F =(K - 273.15)* 1.8000 + 32.00
//seth: 8d71539d26c8f7a96fb717f3e71f6023
// 42.3601° N, -71.0589° W



//roger: 4ff9e12eb3732b861c20affb93670b5b



// fetch("https://api.darksky.net/forecast/8d71539d26c8f7a96fb717f3e71f6023/37.8267,-122.4233")
//     .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
//     .then(response => {
//         console.log(response)
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//         alert("sorry, there are no results for your search")
//     });


// const date = document.querySelector("input").value
// document.querySelector("h1").innerHTML = "Weather Geeks 2000"


//42.361145, -71.057083.

document.querySelector("button").addEventListener("click", function(){

    fetch("http://api.openweathermap.org/data/2.5/weather?lat=42.3611&lon=-71.0570&appid=4ff9e12eb3732b861c20affb93670b5b")
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
        console.log(response.main.temp)
        let kelvin = response.main.temp;
        let fahrenheit = (kelvin - 273.15)* 1.8000 + 32.00;
        console.log(fahrenheit)
        console.log(typeof fahrenheit)
        document.querySelector("h3").innerHTML = `${Math.round(fahrenheit)}&#176`+"F";
    })
    .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    });
    })
