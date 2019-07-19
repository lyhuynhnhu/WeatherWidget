var card = document.getElementsByClassName('card')[0];
const url = 'http://api.openweathermap.org/data/2.5/weather?id=1566083&APPID=1417deae8e59f86590fc4a2024242ac9';

function initWeatherWidget() {
    addItems();
    renderDate();
}
function addItems() {
    var city = document.createElement('p');
    city.className = 'city';            //or use city.setAttribute('class', 'city')
    var cityText = document.createTextNode('HCMC');
    city.appendChild(cityText);
    card.appendChild(city);
}
function renderDate() {
    var d = new Date();
    var date = document.createElement('div');
    date.className = 'date';
    var dateText = document.createTextNode(d.getDate() + '/' + d.getMonth() + '/' + d.getFullYear());
    date.appendChild(dateText);
    card.appendChild(date);
}

function renderTime() {
    var d = new Date();
    var minutes = d.getMinutes();
    var seconds = d.getSeconds();
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);

    var d = new Date();  
    var time = document.getElementById('time');
    time.innerHTML = d.getHours() + ':' + minutes + ':' + seconds;
    var t = setTimeout(renderTime, 1000);
}

function checkTime(t) {
    if (t < 10) {
        t = '0' + t;
    }
    return t;
}

function theResponse(response) {
    var jsonObject = JSON.parse(response);
    var weather = document.createElement('p');
    weather.className = 'weather';
    var text = document.createTextNode(jsonObject.weather[0].description);
    weather.appendChild(text);
    card.appendChild(weather);
    var icon = document.createElement('img');
    icon.src = "http://openweathermap.org/img/w/" + jsonObject.weather[0].icon + ".png";
    card.appendChild(icon);
    var temp = document.createElement('h1');
    var tempText = document.createTextNode(parseInt(jsonObject.main.temp - 273) + "°");
    temp.appendChild(tempText);
    card.appendChild(temp);  
    console.log(jsonObject.main.temp);
}
  
function httpRequestAsync(url, callback)
{
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => { 
        if (httpRequest.readyState == 4 && httpRequest.status == 200)
            callback(httpRequest.responseText);
        }
    httpRequest.open("GET", url, true); 
    httpRequest.send();
}

initWeatherWidget()
card.addEventListener('load', httpRequestAsync(url, theResponse));
card.addEventListener('load', renderTime());