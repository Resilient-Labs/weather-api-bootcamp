//Enable your user to enter a city + country and return the temperature in Fahrenheit

// listen for click, call the api
//get city, country names from user

document.querySelector('button').addEventListener('click', getTemp)
//build the weather api with those location names and put them in the API
function getTemp(){
    const city=document.querySelector('input').value;
    const apiKey="bbcc17ef14b878cbee4a32381950db43";
    const url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`;
//fetch JSON from weather api website
//grab temp info about that region and put it in the DOM
    fetch(url)
        .then(res => res.json())
        .then(data=>{
            console.log(data);//had to fix my link with the help of Meryem and Innocent
        
            let kelv = data.main.temp;//in kelvin 
            let Fahren = (kelv-273.15) * 1.8 + 32;//fahrenheit formula
            document.querySelector('h2').innerText= `${Fahren.toFixed(0)} °F`;
            
        })
        .catch(err=>{
            console.log(`error ${err}`);
           
        })

    


}





