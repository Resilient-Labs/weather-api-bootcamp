
document.querySelector('button').addEventListener('click', getWeather)
    function getWeather(){
    let city = document.getElementById('city').value
    let country =document.getElementById('country').value
    const url = (`https://api.weatherbit.io/v2.0/current?city=${city}&country=${country}&key=3f06edb8e23f45e88af9eab94d89bc98&include=minutely&units=I`)
    fetch(url) 
        .then(res => res.json()) // parse response as JSON 
        .then(data => { //myself calling the array I'm getting: data 
            console.log(data.data[0]) //the second data is what it's actually called in an array from the api, I had to add the first data because I had to address what I called the array
            document.querySelector('h2').innerText = data.data[0].app_temp
            
            // console.log(data)
         }) 
         .catch(err => { 
             console.log(`error ${err}`) 
         });
    }
    



