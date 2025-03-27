//start of first attempt
// document.getElementById('submit').addEventListener('click', getWeather)

// function getWeather(){
//     const inputCity = document.getElementById('cityName').value; 
//     const inputState = document.getElementById('stateName').value;   
//     const inputCountry = document.getElementById('countryName').value; 

//     const url = `https://api.weatherbit.io/v2.0/current?city=${inputCity}&state=${inputState}&country=${inputCountry}&key=bc90b8b4e83245dc99d2dbfe72dc69c1`

//     fetch(url)
//         .then(res => res.json())
//         .then(data => {
//             console.log(data);
//             document.querySelector('h2').innerText = data.data[0].city_name
//             document.querySelector('p').innerText = data.data[0].weather.description          
//             document.querySelector('h3').innerText = data.data[0].temp
//             document.querySelector('h4').innerText = data.data[0].sunrise
//             document.querySelector('h5').innerText = data.data[0].sunset            
//         })
//         .catch(err => {
//             console.log(`error ${err}`);
//         });

// }
//end of first attempt


//second and wild attempt
//create event listener for button to run getweather function
document.getElementById('submit').addEventListener('click', getWeather)
    function getWeather(){

    const inputCity = document.getElementById('cityName').value; //create const variables for each input like names of city and abbrevs for state and country
    const inputState = document.getElementById('stateName').value;   
    const inputCountry = document.getElementById('countryName').value; 

    if (!inputCity || !inputCountry) {//if statement that pops alert message incase inputs are NOT correct for city and country at least, or dont fit in the drop down menus, keep state opt since its international
        alert("Enter City and please select from our drop down menu for State and Country!");
        return;
    }

    const apiKey = "bc90b8b4e83245dc99d2dbfe72dc69c1";
    const url = `https://api.weatherbit.io/v2.0/current?city=${inputCity}&state=${inputState}&country=${inputCountry}&key=${apiKey}&units=I`;// converts all temps to F with units=i

    fetch(url)
        .then(res => res.json()) //parse request as JSON
        .then(data => { //gives us data as object then lets us use object access
            console.log(data); 

            if (data && data.data && data.data.length > 0) {// if statement if data array index is greater than 0, which should always be right in this case
                let weatherData = data.data[0];// make shortcut so I dont have to type out data array index everytime lol

                document.querySelector('h2').innerText = `📍Location: ${weatherData.city_name}, ${weatherData.state_code}, ${weatherData.country_code}`; // change innertext of h2 to location w city, state and countries
                document.querySelector('p').innerText = `🌤️Weather: ${weatherData.weather.description}`; //changes p tag innertext into weather condo
                document.querySelector('h3').innerText = `🌡️Temperature: ${weatherData.temp}°F`; //displays h3 innertext as temp in fahrenheight
                document.querySelector('h4').innerText = `🌅Sunrise: ${weatherData.sunrise}`; //changes h4 innertext into sunrise time
                document.querySelector('h5').innerText = `🌇Sunset: ${weatherData.sunset}`; //makes h5 innertext show sunset time
            } else {
                document.querySelector('h2').innerText = "Area not found, please try again :)"; //add else statement if inputs dont even match correct fields from api
                document.querySelector('p').innerText = ""; // keep everything as empty strings else input is wrong or typo in name
                document.querySelector('h3').innerText = "";
                document.querySelector('h4').innerText = "";
                document.querySelector('h5').innerText = "";
            }
        })
        .catch(err => { //catches for any errors and shows alert to doublecheck all inputs for city, state and country, make sure abbreviations are correct
            console.error(`error ${err}`);
            alert("Make sure all names for city, state and country are correct!");
        });
};

//end of sec attempt