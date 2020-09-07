let Weather = {
  getWeather: (x)=>{
    fetch(`https://api.weather.gov/points/${x}/forecast`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        document.querySelector('img').src= data.properties.periods[0].icon
        document.querySelector('h2').innerHTML = data.properties.periods[0].shortForecast
        document.querySelectorAll('p')[1].innerHTML = data.properties.periods[0].detailedForecast
      })
      .catch(err => console.log(err))
  },
    getLocation: ()=>{
      Weather.input=document.querySelector('input').value;
      document.querySelector('input').value=''
      fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${Weather.input.replace(/' '/g,'%20') }.json?access_token=pk.eyJ1IjoieHNoYXduY3giLCJhIjoiY2tlams1YTNnMDZ3MDJycXNsNGlxbzJlYyJ9.yhpBv07FJ2TZfJW62fs7sA`)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          let latLon = data.features[0].center.map(x=>x.toFixed(4)).reverse().join(',')
          Weather.getWeather(latLon)
          document.querySelector('h1').innerHTML= data.features[0].text+', '+data.features[0].context[0].text+', '+data.features[0].context[1].text
          Weather.getWiki(data.features[0].properties.wikidata)
        })
        .catch(err => console.log(err))
    },
    getPCLocations: (x)=>{
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${x.reverse().join(',')}.json?access_token=pk.eyJ1IjoieHNoYXduY3giLCJhIjoiY2tlams1YTNnMDZ3MDJycXNsNGlxbzJlYyJ9.yhpBv07FJ2TZfJW62fs7sA`)
          .then(response => response.json())
          .then(data => {
            console.log(data)
            document.querySelector('h1').innerHTML= data.features[0].context[2].text+',  '+data.features[0].context[3].text+',  '+data.features[0].context[4].text
            Weather.getWiki(data.features[3].properties.wikidata)
          })
          .catch(err => console.log(err))

    },

    getWiki: (a)=>{
      fetch(`
   https://www.wikidata.org/wiki/Special:EntityData/${a}.json`)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          document.querySelector('p').innerHTML = data.entities[`${a}`].descriptions['en-gb'].value
          document.querySelector('a').href = data.entities[`${a}`].sitelinks.enwiki.url

    })
  },

    input: document.querySelector('input').value,

    coordinates: (p)=>{
      Weather.getWeather([p.coords.latitude,p.coords.longitude].join(','))
      Weather.getPCLocations([p.coords.latitude,p.coords.longitude])
    },

    stalk: ()=>{
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(Weather.coordinates)
    } else {
        console.log("Geolocation is not supported by this browser.")
    }
  },
}
Weather.stalk()
