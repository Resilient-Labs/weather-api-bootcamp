
//const config={apiKey:`${weather.env.WEATHER_API_KEY}`}

document.getElementById("search").onclick=getWeather;

function getWeather()
{
    let bCiudad=document.getElementById('city').value
    let obtenerCiudad=capitalFirstLetter(bCiudad)
    let obPais=document.getElementById('input-country').value
    let obtenerPais=capitalFirstLetter(obPais)
   
    console.log(obtenerCiudad)
     console.log(obtenerPais)
   
    const url=`http://api.weatherapi.com/v1/current.json?key=2abd921c3ecf4dfa854152735262209&q=${obtenerCiudad},${obtenerPais}&aqi=no`
    fetch(url)
        .then((res) => res.json()) // parse response as JSON
         //object
        .then((data) => {
            if(obtenerCiudad=='' && obtenerPais==''){
                alert('Please add a City and country')
                return
            }else if(obtenerCiudad == data.location.name || obtenerPais == data.location.country){
                
                console.log(data)
                console.log(data.current.condition.text)
                let httpIcon=`http:${data.current.condition.icon}`;
                console.log(httpIcon)
                document.querySelector(".weather-details").style.display="block";
                document.getElementById('name').innerText=data.location.name;
                document.getElementById('country').innerText=data.location.country;
                        // let html=`<span class="material-symbols-outlined">partly_cloudy_day</span>
                        // <h3>${data.current.temp_f}</h3>`;
                document.getElementById('temp').innerText=`${data.current.temp_f}`;
                document.getElementById('condition').innerText=`${data.current.condition.text}`;
                document.getElementById('temp-icon').src=httpIcon;
                document.getElementById('dato1').innerText=`${data.current.humidity} %`;
                document.getElementById('dato2').innerText=`${data.current.wind_kph} Km/h`;
                document.getElementById('dato3').innerText=`${data.current.vis_km} Km`;
                document.getElementById('dato4').innerText=`${data.current.feelslike_f} °`;
            }else{
                alert("We don't find the city or country you insert")
            }
            
              
               
           
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}
function capitalFirstLetter(word)
{
    if(!word) return ''; 
       return (word.charAt(0).toUpperCase()+word.slice(1));
}
