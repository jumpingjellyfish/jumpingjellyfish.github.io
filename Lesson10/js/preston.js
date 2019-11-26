const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=a6b36300ca27fc31ce8529a15096e44d';

  fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    for(let i = 0; i < jsObject.list.length; i++){
    if(jsObject.list[i].dt_txt.includes('18:00:00')){
        document.getElementById('temp1')
        .textContent = jsObject.list[0].main.temp.toFixed();}}});
const apiURL2 = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=a6b36300ca27fc31ce8529a15096e44d';
fetch(apiURL2)
  .then((response) => response.json())
  .then((jsObject) => {
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
    const desc = jsObject.weather[0].description;  // note how we reference the weather array
    document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);
          })


fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    for(let i = 0; i < jsObject.list.length; i++){
    if(jsObject.list[i].dt_txt.includes('18:00:00')){
        document.getElementById('temp2')
        .textContent = jsObject.list[1].main.temp.toFixed();}}});
fetch(apiURL2)
  .then((response) => response.json())
  .then((jsObject) => {
const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
const desc = jsObject.weather[0].description;  // note how we reference the weather array
document.getElementById('icon2').setAttribute('src', imagesrc);  // focus on the setAttribute() method
document.getElementById('icon2').setAttribute('alt', desc);})


fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    for(let i = 0; i < jsObject.list.length; i++){
    if(jsObject.list[i].dt_txt.includes('18:00:00')){
    document.getElementById('temp3')
    .textContent = jsObject.list[2].main.temp.toFixed();}}});
fetch(apiURL2)
  .then((response) => response.json())
  .then((jsObject) => {
const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
const desc = jsObject.weather[0].description;  // note how we reference the weather array
  document.getElementById('icon3').setAttribute('src', imagesrc);  // focus on the setAttribute() method
  document.getElementById('icon3').setAttribute('alt', desc);})


fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    for(let i = 0; i < jsObject.list.length; i++){
    if(jsObject.list[i].dt_txt.includes('18:00:00')){
      document.getElementById('temp4')
      .textContent = jsObject.list[3].main.temp.toFixed();}}});
fetch(apiURL2)
  .then((response) => response.json())
  .then((jsObject) => {
  const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
  const desc = jsObject.weather[0].description;  // note how we reference the weather array
    document.getElementById('icon4').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('icon4').setAttribute('alt', desc);})


fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    for(let i = 0; i < jsObject.list.length; i++){
    if(jsObject.list[i].dt_txt.includes('18:00:00')){
      document.getElementById('temp5')
      .textContent = jsObject.list[4].main.temp.toFixed();}}});
fetch(apiURL2)
  .then((response) => response.json())
  .then((jsObject) => {
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
    const desc = jsObject.weather[0].description;  // note how we reference the weather array
      document.getElementById('icon5').setAttribute('src', imagesrc);  // focus on the setAttribute() method
      document.getElementById('icon5').setAttribute('alt', desc);})


  
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
          .textContent = jsObject.wind.speed.toFixed();});




var d = new Date();
var days = new Array(7);
days[0] = "SUN";
days[1] = "MON";
days[2] = "TUE";
days[3] = "WED";
days[4] = "THU";
days[5] = "FRI";
days[6] = "SAT";

var n = days[d.getDay()];
document.getElementById("day1").innerHTML = n;
var n = days[d.getDay()+1 % 7];
document.getElementById("day2").innerHTML = n;
var n = days[d.getDay()+2 % 7];
document.getElementById("day3").innerHTML = n;
var n = days[d.getDay()+3 % 7];
document.getElementById("day4").innerHTML = n;
var n = days[d.getDay()+4 % 7];
document.getElementById("day5").innerHTML = n;