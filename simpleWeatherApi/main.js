const button = document.querySelector('button');


button.addEventListener('click', () => {
let input = document.querySelector('select').value

fetch(`http://www.boredapi.com/api/activity?participants=${input}`)
    .then(res => res.json())
    .then(response => {
      console.log(response)
      document.getElementById("paragraph").textContent = response.activity
    })
    .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    })
  })
