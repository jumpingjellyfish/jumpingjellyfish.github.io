  const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=a6b36300ca27fc31ce8529a15096e44d';

  fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    for(let i = 0; i < jsObject.list.length; i++){
    if(jsObject.list[i].dt_txt.includes('18:00:00')){
        document.getElementById('temp1')
        .textContent = jsObject.list[0].main.temp.toFixed();

        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
        const desc = jsObject.weather[0].description;  // note how we reference the weather array
        document.getElementById('imagesrc').textContent = (imagesrc);  // informational specification only
        document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
        document.getElementById('icon').setAttribute('alt', desc);
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
        /*
        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[4].icon + '.png';  // note the concatenation
        const desc = jsObject.weather[4].description;  // note how we reference the weather array
        document.getElementById('imagesrc').textContent = (imagesrc);  // informational specification only
        document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
        document.getElementById('icon').setAttribute('alt', desc); */
      }
    }
});




const apiURL2 = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=a6b36300ca27fc31ce8529a15096e44d';

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
    .textContent = jsObject.wind.speed.toFixed();
  });




var d = new Date();
var day = d.getDay();

switch (day) {
    case 6:
      document.getElementById('day1')
      .textContent = ('SAT');      
      break;
      case 5:
        document.getElementById('day1')
        .textContent = ('FRI');      
        break;
        case 4:
      document.getElementById('day1')
      .textContent = ('THU');      
      break;
      case 3:
      document.getElementById('day1')
      .textContent = ('WED');      
      break;
      case 2:
        document.getElementById('day1')
        .textContent = ('TUE');
        break;
        case 1:
          document.getElementById('day1')
          .textContent = ('MON');        
          break;
      case 0:
        document.getElementById('day1')
        .textContent = ('SUN');
        break;
    
  }

  switch (day) {
    case 6:
      document.getElementById('day2')
      .textContent = ('SUN');      
      break;
      case 5:
        document.getElementById('day2')
        .textContent = ('SAT');      
        break;
        case 4:
      document.getElementById('day2')
      .textContent = ('FRI');      
      break;
      case 3:
      document.getElementById('day2')
      .textContent = ('THU');      
      break;
      case 2:
        document.getElementById('day2')
        .textContent = ('WED');
        break;
        case 1:
          document.getElementById('day2')
          .textContent = ('TUE');        
          break;
      case 0:
        document.getElementById('day2')
        .textContent = ('MON');
        break;
    
  }

  switch (day) {
    case 6:
      document.getElementById('day3')
      .textContent = ('MON');      
      break;
      case 5:
        document.getElementById('day3')
        .textContent = ('SUN');      
        break;
        case 4:
      document.getElementById('day3')
      .textContent = ('SAT');      
      break;
      case 3:
      document.getElementById('day3')
      .textContent = ('FRI');      
      break;
      case 2:
        document.getElementById('day3')
        .textContent = ('THU');
        break;
        case 1:
          document.getElementById('day3')
          .textContent = ('WED');        
          break;
      case 0:
        document.getElementById('day3')
        .textContent = ('TUE');
        break;
    
  }
  switch (day) {
    case 6:
      document.getElementById('day4')
      .textContent = ('TUE');      
      break;
      case 5:
        document.getElementById('day4')
        .textContent = ('MON');      
        break;
        case 4:
      document.getElementById('day4')
      .textContent = ('SUN');      
      break;
      case 3:
      document.getElementById('day4')
      .textContent = ('SAT');      
      break;
      case 2:
        document.getElementById('day4')
        .textContent = ('FRI');
        break;
        case 1:
          document.getElementById('day4')
          .textContent = ('THU');        
          break;
      case 0:
        document.getElementById('day4')
        .textContent = ('WED');
        break;
    
  }
  switch (day) {
    case 6:
      document.getElementById('day5')
      .textContent = ('WED');      
      break;
      case 5:
        document.getElementById('day5')
        .textContent = ('TUE');      
        break;
        case 4:
      document.getElementById('day5')
      .textContent = ('MON');      
      break;
      case 3:
      document.getElementById('day5')
      .textContent = ('SUN');      
      break;
      case 2:
        document.getElementById('day5')
        .textContent = ('SAT');
        break;
        case 1:
          document.getElementById('day5')
          .textContent = ('FRI');        
          break;
      case 0:
        document.getElementById('day5')
        .textContent = ('THU');
        break;
    
  }

/*
switch (day) {
    case 0:
        document.getElementById('day2')
        .textContent = ('MON');
        break;
    case 1:
      document.getElementById('day2')
      .textContent = ('TUE');        
      break;
    case 2:
      document.getElementById('day2')
      .textContent = ('WED');
      break;
    case 3:
      document.getElementById('day2')
      .textContent = ('THU');      
      break;
    case 4:
      document.getElementById('day2')
      .textContent = ('FRI');      
      break;
    case 5:
      document.getElementById('day2')
      .textContent = ('SAT');      
      break;
    case 6:
      document.getElementById('day2')
      .textContent = ('SUN');      
      break;
  }

switch (day) {
    case 0:
        document.getElementById('day3')
        .textContent = ('TUE');
        break;
    case 1:
      document.getElementById('day3')
      .textContent = ('WED');        
      break;
    case 2:
      document.getElementById('day3')
      .textContent = ('THU');
      break;
    case 3:
      document.getElementById('day3')
      .textContent = ('FRI');      
      break;
    case 4:
      document.getElementById('day3')
      .textContent = ('SAT');      
      break;
    case 5:
      document.getElementById('day3')
      .textContent = ('SUN');      
      break;
    case 6:
      document.getElementById('day3')
      .textContent = ('MON');      
      break;
  }
  switch (day) {
    case 0:
        document.getElementById('day4')
        .textContent = ('WED');
        break;
    case 1:
      document.getElementById('day4')
      .textContent = ('THU');        
      break;
    case 2:
      document.getElementById('day4')
      .textContent = ('FRI');
      break;
    case 3:
      document.getElementById('day4')
      .textContent = ('SAT');      
      break;
    case 4:
      document.getElementById('day4')
      .textContent = ('SUN');      
      break;
    case 5:
      document.getElementById('day4')
      .textContent = ('MON');      
      break;
    case 6:
      document.getElementById('day4')
      .textContent = ('TUE');      
      break;

  }
  switch (day) {
    case 0:
        document.getElementById('day5')
        .textContent = ('THU');
        break;
    case 1:
      document.getElementById('day5')
      .textContent = ('FRI');        
      break;
    case 2:
      document.getElementById('day5')
      .textContent = ('SAT');
      break;
    case 3:
      document.getElementById('day5')
      .textContent = ('SUN');      
      break;
    case 4:
      document.getElementById('day5')
      .textContent = ('MON');      
      break;
    case 5:
      document.getElementById('day5')
      .textContent = ('TUE');      
      break;
    case 6:
      document.getElementById('day5')
      .textContent = ('WED');      
      break;

  }*/