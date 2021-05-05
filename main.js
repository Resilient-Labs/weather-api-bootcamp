//The user will be able to input their city and state and get back relevant weather info for that location. 

document.querySelector("button").addEventListener("click", getWeather)

function getWeather(){
    let city = document.getElementById("city").value
    let state = document.getElementById("state").value
        // console.log(city, state)

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},us&units=imperial&appid=9714db9b8cbac55b94713b0f75e80ad4`
    // console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data =>{
        addData('Feels like - '+data.main.feels_like+'F')
        addData(data.main.temp+'F')
        addData(data.weather[0].description)
    })
    function addData(text){
        const listNode = document.getElementById("myList")
        listNode.appendChild(makeLiNode(text))
    }
    function makeLiNode(text){
        const liNode = document.createElement("li");
        const textNode = document.createTextNode(text);
        liNode.appendChild(textNode);
        return liNode
    }

}
// // function apiCallTwo(data){
//     etch(urlTwo)
//     .then(res => res.json())
//     .then(data => {
//         // process API two result

//     })
// // }
//     function apiCallOne(dataOne){
//         (fetch(urlOne))
//         .then(res => res.json())
//         .then(data =>{
//         apiCallTwo(result of apiCallOne)    
//         })
//     }
