const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=a6b36300ca27fc31ce8529a15096e44d';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    document.getElementById('current-temp')
    .textContent = jsObject.main.temp;
  
const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
const desc = jsObject.weather[0].description;  // note how we reference the weather array
document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
document.getElementById('icon').setAttribute('alt', desc);
});


/*


fetch(apiURL2)
.then((response) => response.json())
.then((jsObject) => {
  document.getElementById('degrees')
  .textContent = jsObject.weather["0"].description;
});

fetch(apiURL2)
.then((response) => response.json())
.then((jsObject) => {
  document.getElementById('high')
  .textContent = jsObject.main.temp_max.toFixed();
});


  fetch(apiURL2)
  .then((response) => response.json())
  .then((jsObject) => {
    document.getElementById('humidity')
    .textContent = jsObject.main.humidity;
  });


  fetch(apiURL2)
  .then((response) => response.json())
  .then((jsObject) => {
    document.getElementById('wind')
    .textContent = jsObject.wind.speed.toFixed();});*/

