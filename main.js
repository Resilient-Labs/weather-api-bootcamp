document.getElementById("btn").addEventListener("click", start)
function start() {
    let city = document.getElementById("city").value
    fetch(`https://api.weatherbit.io/v2.0/current?city=${city}&key=0e6fa4ee6f2a416781fb059361478c94`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            let temp = data.data[0].temp
            temp = (temp * 9 / 5) + 32
            temp = temp.toFixed(2)
            document.getElementById("temp").innerHTML = temp
            
    })
}