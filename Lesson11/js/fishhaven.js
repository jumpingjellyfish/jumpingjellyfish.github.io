const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?zip=83287&units=imperial&APPID=a6b36300ca27fc31ce8529a15096e44d';

  fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    for(let i = 0; i < jsObject.list.length; i++){
    if(jsObject.list[i].dt_txt.includes('18:00:00')){
        document.getElementById('temp1')
        .textContent = jsObject.list[0].main.temp.toFixed();}}});

const apiURL2 = 'https://api.openweathermap.org/data/2.5/weather?zip=83287&units=imperial&APPID=a6b36300ca27fc31ce8529a15096e44d';
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
/*forecast.forEach(day => {
    let date = new Date(day.dt * 1000);
    let days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    let name = days[date.getDay()];*/





const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
      for (let i = 4; i < 5; i++){
        const towns = jsonObject['towns'];
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');
            let p4 = document.createElement('p');
            let image1 = document.createElement('img');
            let alt1 = document.createElement('alt');


            h2.textContent = 'Upcoming Events:'
            p1.textContent = '-' + ' ' + towns[1].events[0];
            p2.textContent = '-' + ' ' + towns[1].events[1];
            p3.textContent = '-' + ' ' + towns[1].events[2];
            p4.textContent = '-' + ' ' + towns[1].events[3];
        
            card.appendChild(h2);
            card.appendChild(p1);
            card.appendChild(p2);
            card.appendChild(p3);
            card.appendChild(p4);
            card.appendChild(image1);

            image1.setAttribute('src', 'images/fishevents.jpg');
            image1.setAttribute('alt', 'picture of Fish Haven Town');

            document.querySelector('div.cards').appendChild(card);}
    
          });