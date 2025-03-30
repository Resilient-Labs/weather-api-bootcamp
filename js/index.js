const apiKey = "899fb9f9638f4e61aa5121546251101";
let city = prompt("Enter City");

// Formatting the date
var objToday = new Date(),
	weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
	dayOfWeek = weekday[objToday.getDay()],
	domEnder = function() { var a = objToday; if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1)); return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th" }(),
	dayOfMonth = today + ( objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
	months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
	curMonth = months[objToday.getMonth()],
	curYear = objToday.getFullYear(),
	curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours()),
	curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
	curSeconds = objToday.getSeconds() < 10 ? "0" + objToday.getSeconds() : objToday.getSeconds(),
	curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";
    var today =    dayOfWeek + " " + dayOfMonth + " of " + curMonth + ", " + "" + curHour + ":" + curMinute + " " + curMeridiem;

// Setting up the API 

console.log(today)

async function getDate(){
    let locationData;
    const apiURL = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
    // Make a GET request using the Fetch API
    try{
        // await makes the function pause the execution & wait for a resolved promise;
        fetch(apiURL)
        .then(response => {
            if(!response.ok){
                throw new Error("Network response was not ok");
            }

            return response.json();
        })
        .then(userData =>{
            locationData = userData;
            // Process the retrieved user data
            console.log(locationData);
            // Making the changes for the current location
            document.getElementById('locationLabel').innerHTML = `${locationData['location']['name']}`;
            document.getElementById("degree").innerHTML = `${locationData['current']['temp_f']}°`;
            document.getElementById("typeDay").innerHTML = `${locationData['current']['condition']['text']}`;
            document.getElementById('date').innerHTML = today;

            // stats (percipitation) + humity + wind speed
            document.getElementById('percipitationStats').innerHTML = `${locationData['current']['precip_mm']}%`
            document.getElementById("humidyStats").innerHTML = `${locationData['current']['humidity']}%`;
            document.getElementById("kmhStats").innerHTML = `${locationData['current']['wind_kph']}`;

            // Current Date
            document.getElementById("currentDayLabel").innerHTML = "Today";
            document.getElementById("currentDegreeATM").innerHTML = `${locationData['current']['temp_f']}°`;
            document.getElementById("currentLowestDegree").innerHTML = `${locationData['current']['feelslike_f']}°`
        })
        .then(error =>{
            console.error('Error: ', error);
        })
        
    }
    catch(error){
        console.error(error.message);

    }
}

async function getDate3Dates(){
    let apiKeyThreeDays = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=3&aqi=no&alerts=no`;
    fetch(apiKeyThreeDays)
    .then(response =>{
        if(!response.ok){
            throw new Error("Network response was not ok");
        }

        return response.json();
    })
    .then(userData =>   {
        let locationData = userData;
        console.log(locationData);
        console.log(locationData['forecast']['forecastday'][1]['date']);

        // Day 2 items
        document.getElementById("day2Label").innerHTML = 
        new Date(locationData['forecast']['forecastday'][1]['date']).toString().slice(0,3);
        document.getElementById("degree2ndHigh").innerHTML = 
        `${locationData['forecast']['forecastday'][1]['day']['maxtemp_f']}°`;
        document.getElementById('degree2ndLow').innerHTML =
         `${locationData['forecast']['forecastday'][1]['day']['mintemp_f']}°`;

        // Day 3 item
        document.getElementById("day3Label").innerHTML =
        new Date(locationData['forecast']['forecastday'][2]['date']).toString().slice(0,3);

        document.getElementById("degree3rdHigh").innerHTML =
        `${locationData['forecast']['forecastday'][2]['day']['maxtemp_f']}°`; 

        document.getElementById('degree3rdLow').innerHTML =
         `${locationData['forecast']['forecastday'][2]['day']['mintemp_f']}°`;


    })
    .then(error => {
        console.error('Error: ', error);
    })
}

let response = getDate();
console.log(response);


console.log("======================");
getDate3Dates();