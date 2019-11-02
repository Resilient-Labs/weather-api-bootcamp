require('dotnev').config();
let btn = document.querySelector('.btn')
let val = document.querySelector('.val')
let id = process.env.id
btn.addEventListener('click', function(){
  let input = document.querySelector('.input').value;

  fetch (`http://api.openweathermap.org/data/2.5/forecast?id=${id}&APPID=31aa1537ae8213a5308f9fe51c2a7718&q=${input}&units=imperial`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      let temp = response.list[0].main.temp;
      val.textContent = temp.toString()+' °F';
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
})
