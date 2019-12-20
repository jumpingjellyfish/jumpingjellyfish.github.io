const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?zip=84601,us&units=imperial&APPID=a6b36300ca27fc31ce8529a15096e44d';

  fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    for(let i = 0; i < jsObject.list.length; i++){
    if(jsObject.list[i].dt_txt.includes('18:00:00')){
        document.getElementById('temp1')
        .textContent = jsObject.list[0].main.temp.toFixed();}}});

        const apiURL2 = 'https://api.openweathermap.org/data/2.5/weather?zip=84601,us&units=imperial&APPID=a6b36300ca27fc31ce8529a15096e44d';
fetch(apiURL2)
  .then((response) => response.json())
  .then((jsObject) => {
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
    const desc = jsObject.weather[0].description;  // note how we reference the weather array
    document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);
          })

fetch(apiURL2)
          .then((response) => response.json())
          .then((jsObject) => {
            document.getElementById('degrees')
            .textContent = jsObject.weather["0"].description;
          });





const apiURL3 = 'https://api.openweathermap.org/data/2.5/forecast?zip=83709,us&units=imperial&APPID=a6b36300ca27fc31ce8529a15096e44d';

          fetch(apiURL3)
          .then((response) => response.json())
          .then((jsObject) => {
            for(let i = 0; i < jsObject.list.length; i++){
            if(jsObject.list[i].dt_txt.includes('18:00:00')){
                document.getElementById('temp2')
                .textContent = jsObject.list[0].main.temp.toFixed();}}});
        
                const apiURL4 = 'https://api.openweathermap.org/data/2.5/weather?zip=83709,us&units=imperial&APPID=a6b36300ca27fc31ce8529a15096e44d';
        fetch(apiURL4)
          .then((response) => response.json())
          .then((jsObject) => {
            const imagesrc2 = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
            const desc = jsObject.weather[0].description;  // note how we reference the weather array
            document.getElementById('icon2').setAttribute('src', imagesrc2);  // focus on the setAttribute() method
            document.getElementById('icon2').setAttribute('alt', desc);
                  })
        
        fetch(apiURL4)
                  .then((response) => response.json())
                  .then((jsObject) => {
                    document.getElementById('degrees2')
                    .textContent = jsObject.weather["0"].description;
                  });





const apiURL5 = 'https://api.openweathermap.org/data/2.5/forecast?id=3936456&units=imperial&APPID=a6b36300ca27fc31ce8529a15096e44d';
fetch(apiURL5)
  .then((response) => response.json())
  .then((jsObject) => {
    for(let i = 0; i < jsObject.list.length; i++){
    if(jsObject.list[i].dt_txt.includes('18:00:00')){
        document.getElementById('temp3')
        .textContent = jsObject.list[0].main.temp.toFixed();}}});

const apiURL6 = 'https://api.openweathermap.org/data/2.5/weather?id=3936456&units=imperial&APPID=a6b36300ca27fc31ce8529a15096e44d';
        fetch(apiURL6)
  .then((response) => response.json())
  .then((jsObject) => {
    const imagesrc3 = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
    const desc = jsObject.weather[0].description;  // note how we reference the weather array
    document.getElementById('icon3').setAttribute('src', imagesrc3);  // focus on the setAttribute() method
    document.getElementById('icon3').setAttribute('alt', desc);
          })

fetch(apiURL6)
          .then((response) => response.json())
          .then((jsObject) => {
            document.getElementById('degrees3')
            .textContent = jsObject.weather["0"].description;
          });






const apiURL7 = 'https://api.openweathermap.org/data/2.5/forecast?zip=89110,us&units=imperial&APPID=a6b36300ca27fc31ce8529a15096e44d';

          fetch(apiURL7)
          .then((response) => response.json())
          .then((jsObject) => {
            for(let i = 0; i < jsObject.list.length; i++){
            if(jsObject.list[i].dt_txt.includes('18:00:00')){
                document.getElementById('temp4')
                .textContent = jsObject.list[0].main.temp.toFixed();}}});
        
  const apiURL8 = 'https://api.openweathermap.org/data/2.5/weather?zip=89110,us&units=imperial&APPID=a6b36300ca27fc31ce8529a15096e44d';
        fetch(apiURL8)
          .then((response) => response.json())
          .then((jsObject) => {
            const imagesrc4 = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
            const desc = jsObject.weather[0].description;  // note how we reference the weather array
            document.getElementById('icon4').setAttribute('src', imagesrc4);  // focus on the setAttribute() method
            document.getElementById('icon4').setAttribute('alt', desc);
                  })
        
        fetch(apiURL8)
                  .then((response) => response.json())
                  .then((jsObject) => {
                    document.getElementById('degrees4')
                    .textContent = jsObject.weather["0"].description;
                  });