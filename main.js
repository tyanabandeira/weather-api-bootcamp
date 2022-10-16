document.querySelector('#button').addEventListener('click', getWeather)

function getWeather(){
  let city = document.querySelector('#city').value
  let country = document.querySelector('#country').value

fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&appid=2fee941f1e309637c2ef5d84547fc756
`)
.then(res => res.json())
.then((data) => {
  console.log(data)
  let lat = data[0].lat
  let lon = data[0].lon

  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2fee941f1e309637c2ef5d84547fc756&units=imperial`)
  .then(res => res.json())
  .then((data) => {
    console.log(data)
    document.querySelector('h2').innerText= '°F ' +
    data.main.temp
  })
  })
  .catch(err => {
  console.log(`error ${err}`)
  })
  
}