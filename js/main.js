const city
const country

document.querySelector(`#btn`).addEventListener("click", (e) =>{

    city = document.querySelector(`#city-name`).value 
    country = document.querySelector(`#country-name`).value

})


/*
let userAnswer = prompt("What cocktail would you like? ")
fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userAnswer}`)

    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)

    .then(response => {

      let imgUrl = []
      response.drinks.forEach((el)=>{

        imgUrl.push(el.strDrinkThumb)

      })
      let count = 0

      setInterval(()=>{
        if( count >= imgUrl.length ){

          count = 0

        }

        document.querySelector('img').src = response.drinks[count].strDrinkThumb
        count++

      },500)


      console.log(imgUrl);
      document.querySelector('img').src = response.drinks[0].strDrinkThumb
      document.querySelector('p').textContent = response.drinks[0].strInstructions
      console.log(response);
      console.log(response.drinks[0].strDrinkThumb);
    })



    .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    });

    */