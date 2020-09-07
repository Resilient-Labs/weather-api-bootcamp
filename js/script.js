//Reset values
document.querySelector(".cityName").value = "";
document.querySelector(".stateName").value = "";

function getTemp(){
    document.querySelector(".submitButton").onclick = () => {
        let city = document.querySelector(".cityName").value;
        let state = document.querySelector(".stateName").value;
        let apiKey = "777e5fb4df89e4b1f5244c3276cc5b9c";

        let request = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state}&appid=${apiKey}&units=imperial`

        fetch(request)
            .then(response => response.json())
            .then(data => {
                document.querySelector(".weatherResult").innerHTML = `It is ${Math.floor(data.main.temp)}F in ${city}`;
            })
    }
}

getTemp();
