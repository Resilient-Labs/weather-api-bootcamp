let api_key = "d5283da9fdd1753984f8324195cd588b"


// this adds an EventListener to the submit button and triggers
document.querySelector("button").addEventListener("click", ()=>{
  let city = document.querySelector("#cityUsa").value

  fetch(` http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=imperial`)


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
