  const apiURL = 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=a6b36300ca27fc31ce8529a15096e44d';

  fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    for(let i = 0; i < jsObject.list.length; i++){
    if(jsObject.list[i].dt_txt.includes('18:00:00')){
        document.getElementById('temp1')
        .textContent = jsObject.list[0].main.temp.toFixed();
      }
    }
});

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    for(let i = 0; i < jsObject.list.length; i++){
    if(jsObject.list[i].dt_txt.includes('18:00:00')){
        document.getElementById('temp2')
        .textContent = jsObject.list[1].main.temp.toFixed();
      }
    }
});

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    for(let i = 0; i < jsObject.list.length; i++){
    if(jsObject.list[i].dt_txt.includes('18:00:00')){
        document.getElementById('temp3')
        .textContent = jsObject.list[2].main.temp.toFixed();
      }
    }
});

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    for(let i = 0; i < jsObject.list.length; i++){
    if(jsObject.list[i].dt_txt.includes('18:00:00')){
        document.getElementById('temp4')
        .textContent = jsObject.list[3].main.temp.toFixed();
      }
    }
});

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    for(let i = 0; i < jsObject.list.length; i++){
    if(jsObject.list[i].dt_txt.includes('18:00:00')){
        document.getElementById('temp5')
        .textContent = jsObject.list[4].main.temp.toFixed();
      }
    }
});




const apiURL2 = 'http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=a6b36300ca27fc31ce8529a15096e44d';

fetch(apiURL2)
.then((response) => response.json())
.then((jsObject) => {
  console.log(jsObject);
  document.getElementById('degrees')
  .textContent = jsObject.weather["0"].description;
});

fetch(apiURL2)
.then((response) => response.json())
.then((jsObject) => {
  console.log(jsObject);
  document.getElementById('high')
  .textContent = jsObject.main.temp_max.toFixed();
});


  fetch(apiURL2)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('humidity')
    .textContent = jsObject.main.humidity;
  });


  fetch(apiURL2)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('wind')
    .textContent = jsObject.wind.speed.toFixed();
  });



var d = new Date();
var day = d.getDay();

switch (day) {
    case 0:
        document.getElementById('day1')
        .textContent = ('SUN');
        break;
    case 1:
      document.getElementById('day1')
      .textContent = ('MON');        
      break;
    case 2:
      document.getElementById('day1')
      .textContent = ('TUE');
      break;
    case 3:
      document.getElementById('day1')
      .textContent = ('WED');      
      break;
    case 4:
      document.getElementById('day1')
      .textContent = ('THU');      
      break;
    case 5:
      document.getElementById('day1')
      .textContent = ('FRI');      
      break;
    case 6:
      document.getElementById('day1')
      .textContent = ('SAT');      
      break;
  }

var d = new Date();
var day = d.getDay()+1;

switch (day) {
    case 0:
        document.getElementById('day2')
        .textContent = ('SUN');
        break;
    case 1:
      document.getElementById('day2')
      .textContent = ('MON');        
      break;
    case 2:
      document.getElementById('day2')
      .textContent = ('TUE');
      break;
    case 3:
      document.getElementById('day2')
      .textContent = ('WED');      
      break;
    case 4:
      document.getElementById('day2')
      .textContent = ('THU');      
      break;
    case 5:
      document.getElementById('day2')
      .textContent = ('FRI');      
      break;
    case 6:
      document.getElementById('day2')
      .textContent = ('SAT');      
      break;

  }