//weather Api

//User needs' to 



document.querySelector('button').addEventListener('click',picture)

 function picture(){

    let site = document.querySelector('#city').value 
    console.log(site)
    let country = document.querySelector('#country').value
    console.log(country)

// let city = 'london'; //Test city to be removed
let apiKey = 'GJpIgQGyjWrmCbtUL1ITHw==iGJD1KipvjGZOm2f'; // API key

let url = `https://api.api-ninjas.com/v1/weather?city=${site}&country=${country}`;

fetch(url, {
    method: 'GET',
    headers: {
        'X-Api-Key': apiKey,
        'Content-Type': 'application/json'
    }
})
    
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
        
    })
    .then(result => {
        console.log(result);
        let c = result.temp
        let newTemp = (c * 9/5) + 32
        console.log(newTemp)
        document.querySelector('.temp').innerText = newTemp + 'F°'
    })
    .catch(error => {
        console.error('Error: ', error);
    });


  }











  //   let options = {
  //     method: 'GET',
  //     headers: { 'x-api-key': 'GJpIgQGyjWrmCbtUL1ITHw==iGJD1KipvjGZOm2f' }}

  //   let url = `https://api.api-ninjas.com/v1/geocoding?city=${site}&country=${country} + ${options.headers}`

  //   fetch(url)  // + city,)
  //               .then(res => res.json()) // parse response as JSON 
  //               .then(data => { 
  //               console.log(data.url)
  //               //  console.log(data.message) 
  //               //  document.querySelector('img').src = data.url
  //               //  document.querySelector('h2').innerText = data.title
  //               //  document.querySelector('h3').innerText = data.explanation
  //               //  console.log(data)
  //             //    document.querySelector('h2').innerText = data.url
  //             }) 

  //               .catch(err => { 
  //               console.log(`error ${err}`) 
  //               }); 
                
  // }
 



//  GJpIgQGyjWrmCbtUL1ITHw==iGJD1KipvjGZOm2f apikey
 
        
            
// //Sample Weather API Code example
// var city = '//cityname//'
// $.ajax({
//     method: 'GET',
//     url: 'https://api.api-ninjas.com/v1/weather?city=' + city,
//     headers: { 'X-Api-Key': 'YOUR_API_KEY'},
//     contentType: 'application/json',
//     success: function(result) {
//         console.log(result);
//     },
//     error: function ajaxError(jqXHR) {
//         console.error('Error: ', jqXHR.responseText);
//     }
// });



// let options = {
//     method: 'GET',
//     headers: { 'x-api-key': 'myKey' }
//   }
  
//   let url = 'https://api.api-ninjas.com/v1/geocoding?city=denver'
