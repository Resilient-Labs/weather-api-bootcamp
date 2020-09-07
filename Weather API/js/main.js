let searchButton = document.querySelector("#search")
let inputValue = document.querySelector("input")
//Add an event listener to the button that runs the function sendApiRequest when it is clicked
searchButton.addEventListener("click", ()=>{
  console.log("button pressed")
  sendApiRequest()
})
//An asynchronous function to fetch data from the API.
function sendApiRequest(){

 inputValue=document.querySelector("input").value.toString();
 fetch(`https://api.weatherbit.io/v2.0/current?city=${inputValue}&units=I&key=622d6c73edd84222a6295483437e4698`, {mode:'cors', headers:{'Access-Control-Allow-Origin':'*'}})
    .then(response => response.json())
    .then(data =>{
      // useApiData(data)
        let hold = data.data[0]

        document.getElementById("location").innerHTML =hold.city_name
        document.getElementById('temp').innerHTML =hold.temp
        document.getElementById('logo').src= `https://www.weatherbit.io/static/img/icons/${hold.weather.icon}.png`
        document.getElementById('looks').innerHTML =hold.weather.description
        document.getElementById('country').innerHTML =hold.country_code
      console.log(data)
    })
}
