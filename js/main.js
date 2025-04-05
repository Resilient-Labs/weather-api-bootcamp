document.querySelector("button").addEventListener("click", checkTemperature)

function checkTemperature() {
    let city = document.querySelector(".city").value
    let country = document.querySelector(".country").value
    const url = `https://wttr.in/${city}+${country}?format=j1`
    let replacedUrl= url.replaceAll(" ", "+")
    console.log(replacedUrl)
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector("h2").classList.remove('hidden')
            document.querySelector("h2 span").innerText = data["current_condition"][0].FeelsLikeF
        })
    .catch(err => {
        console.log(`error ${err}`)
    });
}