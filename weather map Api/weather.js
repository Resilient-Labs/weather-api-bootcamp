

// fetch(url)
// .then(res=> res.json())
// .then(data=>{
//     console.log(data)
// })
// .catch(err=>{

//     console.log(err)

 
// })
document.querySelector(".button").addEventListener("click",getTemp)
function getTemp(){
    

    let text = document.querySelector(".input").value
    let apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=imperial&appid=b63e2f9db34e2b9c2332cb18f8b3509c`

     fetch(apiLink)
    .then(res=> res.json())
    .then(data=>{
        console.log(data)
        document.querySelector(".area").innerText=data.name
        document.querySelector("h3").innerText=data.main.temp
    })
    .catch(err=>{

        console.log(err)

 
    })
    
}

