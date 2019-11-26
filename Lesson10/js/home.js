const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns'];
        for (let i = 4; ;)
        { 
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');
            let p4 = document.createElement('p');
            let image1 = document.createElement('img');
            let alt1 = document.createElement('alt');


            h2.textContent = towns[i].name;
            p1.textContent = towns[i].motto;
            p2.textContent = 'Year Founded:' + ' ' + towns[i].yearFounded;
            p3.textContent = 'Population:' + ' ' + towns[i].currentPopulation;
            p4.textContent = 'Annual Rainfall:' + ' ' + towns[i].averageRainfall;
        
            card.appendChild(h2);
            card.appendChild(p1);
            card.appendChild(p2);
            card.appendChild(p3);
            card.appendChild(p4);
            card.appendChild(image1);

            image1.setAttribute('src', 'images/Preston.jpg');
            image1.setAttribute('alt', 'picture of Preston Town');

            document.querySelector('div.cards').appendChild(card);
        }
        for (let i = 5; i < 6; i++)
        { 
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');
            let p4 = document.createElement('p');
            let image2 = document.createElement('img');
            let alt2 = document.createElement('alt');

            h2.textContent = towns[i].name;
            p1.textContent = towns[i].motto;
            p2.textContent = 'Year Founded:' + ' ' + towns[i].yearFounded;
            p3.textContent = 'Population:' + ' ' + towns[i].currentPopulation;
            p4.textContent = 'Annual Rainfall:' + ' ' + towns[i].averageRainfall;
        
            card.appendChild(h2);
            card.appendChild(p1);
            card.appendChild(p2);
            card.appendChild(p3);
            card.appendChild(p4);
            card.appendChild(image2);

            image2.setAttribute('src', 'images/Sodasprings.jpg');
            image2.setAttribute('alt', 'picture of Soda Springs Town');

            document.querySelector('div.cards').appendChild(card);

        }
        for (let i = 1; i < 2; i++){
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');
            let p4 = document.createElement('p');
            let image3 = document.createElement('img');
            let alt3 = document.createElement('alt');


            h2.textContent = towns[i].name;
            p1.textContent = towns[i].motto;
            p2.textContent = 'Year Founded:' + ' ' + towns[i].yearFounded;
            p3.textContent = 'Population:' + ' ' + towns[i].currentPopulation;
            p4.textContent = 'Annual Rainfall:' + ' ' + towns[i].averageRainfall;
        
            card.appendChild(h2);
            card.appendChild(p1);
            card.appendChild(p2);
            card.appendChild(p3);
            card.appendChild(p4);
            card.appendChild(image3);

            image3.setAttribute('src', 'images/Fishhaven.jpg');
            image3.setAttribute('alt', 'picture of Fishhaven Town');

            document.querySelector('div.cards').appendChild(card);
        }
    
    });