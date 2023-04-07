
document.querySelector('button').addEventListener('click', getWeather)



function getWeather(){
let location = document.querySelector('input').value
console.log(location)




fetch(`http://api.weatherapi.com/v1/current.json?key=4e3de7235f22435180c150018230504&query=${location}`
)
.then(res =>res.json()).then(data => {
   console.log(data)
   document.querySelector('#result').innerHTML =

   `<h1> ${data.current.temp_f}° Fahrenheit</h1>`


})
.catch(err =>{
    console.log(`error ${err}`)
});}


