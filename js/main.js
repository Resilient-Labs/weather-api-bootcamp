//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click', getDrink);
let key = process.env.APIKEY;

function getDrink() {
    let val = document.querySelector('input').value;
    let val2 = val.toLowerCase();
    console.log(val2)
    const url = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${key}&q=${val2}`

    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data[0].Key);
        let dataKey = data[0].Key;

        const url2 = `http://dataservice.accuweather.com/forecasts/v1/daily/1day/${dataKey}?apikey=${key}`
        fetch(url2)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            let highTemp = data.DailyForecasts[0].Temperature.Maximum.Value;
            let lowTemp = data.DailyForecasts[0].Temperature.Minimum.Value;
            
            document.querySelector('#high').innerHTML = `High of ${highTemp} Degrees Fahrenheit`
            document.querySelector('#low').innerHTML = `Low of ${lowTemp} Degrees Fahrenheit`
        })
        
    })
    .catch(err => {
        console.log(`error ${res.error}`)
    })
}
