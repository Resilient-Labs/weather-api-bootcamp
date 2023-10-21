document.querySelector('#sun').addEventListener('click', weatherSearch);

function weatherSearch() {
    console.log('recipeSearch runs');

    let city = document.querySelector('#search').value;
    let country = document.querySelector('#search2').value;
    let state = document.querySelector('#search3').value;

    const key = `2bbdde0baf8a4b7a9b8b09ed3ef56d63`

    const url1 = `https://api.weatherbit.io/v2.0/current?city=${city}&state=${state}&country=${country}&key=${key}`;

    fetch(url1)
        .then(res => res.json()) 
        .then(data => {
            console.log(data); 


            if (data.data && data.data.length > 0) {
                const f = (data.data[0].temp) * (9 / 5) + 32;
                document.querySelector('#weather').innerHTML = `Weather is ${data.data[0].weather.description} with a temperature of ${f.toFixed(2)}°F`;
            } else {
                document.querySelector('#weather').innerHTML = 'Weather data not available for the specified location.';
            }
        })
        .catch(err => {
            console.log(`error ${err}`);
        });
}


