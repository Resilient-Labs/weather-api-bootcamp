// this adds an EventListener to the submit button and triggers
let apiKey = "0f343d7ff36b517d55f72d4d8ecfabfd"

document.querySelector("button").addEventListener("click", ()=>{
  let city = document.querySelector("#cityUsa").value

  fetch(` http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`)
      .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
      .then(response => {
        // console.log()
        document.querySelector("#tmp").innerHTML = response.main.temp
      })
      .catch(err => {
          // console.log(`error ${err}`)
          alert("sorry, there are no results for your search")
      });
})
