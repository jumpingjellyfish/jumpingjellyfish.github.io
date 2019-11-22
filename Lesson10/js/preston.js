const apiURL = 'http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=a6b36300ca27fc31ce8529a15096e44d';

fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
  console.log(jsObject);
  document.getElementById('degrees')
  .textContent = jsObject.weather["0"].description;
});

fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
  console.log(jsObject);
  document.getElementById('high')
  .textContent = jsObject.main.temp_max;
});


  fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('humidity')
    .textContent = jsObject.main.humidity;
  });


  fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('wind')
    .textContent = jsObject.wind.speed;
  });


  const apiURL = 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=a6b36300ca27fc31ce8529a15096e44d';

  fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);}