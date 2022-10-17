/* api key:  
 https://api.nasa.gov/planetary/apod?api_key=Mjy1bxuNx42ZPiJ3qncUBIGu1JouiLwPkbFULRCU
*/



//listener
document.querySelector("#submit").addEventListener("click", userInput);
//
let temp = document.querySelector(".weather-temp")


//gets date and 
function userInput(event) {
    //stops refreshing on submit, Shout on Leon
    event.preventDefault()
    //I am grabbing the user input date
    city = document.getElementById("city").value
    country = document.getElementById("country").value
    console.log(city)
    console.log(country)

    let api = config.MY_API_TOKEN
    
    //fetch api
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}%20${country}}?unitGroup=metric&key=${api}&contentType=json`)
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("NETWORK RESPONSE ERROR");
        }
    })
    .then(data =>{
        console.log(data)
        console.log(data.days[0].datetimeEpoch)

   
            
            const main = document.querySelector(".main")
            const section = document.createElement("section")
            const area = document.createElement("ul")
            main.appendChild(section)
        // section.appendChild(ma)
            section.appendChild(area)
            const lineForDate = document.createElement("h1")
            const lineForTemp = document.createElement("li")
            const lineForHumidity = document.createElement("li")
            area.appendChild(lineForDate)
            area.appendChild(lineForTemp)
            area.appendChild(lineForHumidity)
      
            lineForDate.innerHTML += "Forcast:" + data.currentConditions.datetime
            let tempC = parseFloat(data.currentConditions.temp)
            let tempF =  ( tempC * 1.8) + 32 


            lineForTemp.innerHTML += "Temperature: " + tempF + " degrees"
            lineForHumidity.innerHTML += "Humidity: " + data.currentConditions.humidity
       



    })

    

}