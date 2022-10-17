document.querySelector('button').addEventListener('click', poop)

function poop(){
    // const choice = document.querySelector('input').value
    // console.log(choice)
    const city = document.querySelector('input').value
    const country = document.querySelector('input').value
    const url = `http://api.weatherapi.com/v1/current.json?key=77bdd91b2da34d6eb10175446221410&q=${city}&aqi=no`

    fetch(url)
    .then(res => res.json()) 
    .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.current.temp_f
        document.querySelector('h3').innerText = data.location.name
    })
    
    .catch(err => {
        console.log('error ${err}')

    });
}
//worked with oscar and simeon