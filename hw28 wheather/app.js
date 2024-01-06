'use strict';

const container = document.createElement('div');
container.classList.add('container');

const searchBlock = document.createElement('div');
searchBlock.classList.add('block-search');

const icon = document.createElement('i');
icon.classList.add('search-image', 'fa-solid', 'fa-location-dot');

const input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('placeholder', 'Enter your location');


const button = document.createElement('button');
button.classList.add('fa-solid', 'fa-magnifying-glass');

const errorBlock = document.createElement('div');
errorBlock.classList.add('block-error');

const errorText = document.createElement('p');
errorText.textContent = 'Invalid city name';

const weatherBlock = document.createElement('div');
weatherBlock.classList.add('block-weather');

const weatherIcon = document.createElement('i');
weatherIcon.classList.add('weather-image', 'fa-solid', 'fa-cloud');

const title = document.createElement('h1');
title.classList.add('weather-temp');

const title2 = document.createElement('h2');
title2.classList.add('weather-city');

const details = document.createElement('div');
details.classList.add('weather-details');

const pressure = document.createElement('div');
pressure.classList.add('details-pressure');

const pressureIcon = document.createElement('i');
pressureIcon.classList.add('pressure-image', 'fa-solid', 'fa-tachometer-alt');

const pressureText = document.createElement('p');
pressureText.classList.add('pressure-text');

const speed = document.createElement('div');
speed.classList.add('details-speed');

const speedIcon = document.createElement('i');
speedIcon.classList.add('speed-image', 'fa-solid', 'fa-wind');

const speedText = document.createElement('p');
speedText.classList.add('speed-text');

const humidity= document.createElement('div');
humidity.classList.add('details-humidity');

const humidityIcon = document.createElement('i');
humidityIcon.classList.add('humidity-image', 'fa-solid', 'fa-tint');

const humidityText = document.createElement('p');
humidityText.classList.add('humidity-text');

const apiKey = '269140b69eb202e944da220fa020cd26';
const apiUrl = 
`https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

async function getWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if(response.status === 404) {
    errorBlock .style.display = 'block';
    errorText.textContent = 'Invalid city name';
    weatherBlock.style.display = 'none';
  }
  const data = await response.json();
  console.log(data, 'data')
  
  document.querySelector('.weather-city').textContent = data.name;
  document.querySelector('.weather-temp').textContent = Math.round(data.main.temp) + '℃';
  document.querySelector('.speed-text').textContent = 'Wind speed:\n' +  data.wind.speed + 'km/h';
  document.querySelector('.humidity-text').textContent = 'Humidity:\n' + data.main.humidity + '%';
  document.querySelector('.pressure-text').textContent = 'Pressure:\n' + data.main.pressure + 'mm';

  if (data.weather[0].main === 'Clear') {
    weatherIcon.classList.remove('fa-cloud-rain', 'fa-cloud-mist', 'fa-cloud-drizzle');
    weatherIcon.classList.add('fa-sun');
  }

  if (data.weather[0].main === 'Rain') {
    weatherIcon.classList.remove('fa-sun', 'fa-cloud-mist', 'fa-cloud-drizzle');
    weatherIcon.classList.add('fa-cloud-rain');
  }

  if (data.weather[0].main === 'Mist') {
    weatherIcon.classList.remove('fa-sun', 'fa-cloud-rain', 'fa-cloud-drizzle');
    weatherIcon.classList.add('fa-cloud-mist');
  }

  if (data.weather[0].main === 'Haze') {
    weatherIcon.classList.remove('fa-sun', 'fa-cloud-rain', 'fa-cloud-mist');
    weatherIcon.classList.add('fa-cloud-haze');
  }

  weatherBlock.style.display = 'block';
  errorBlock .style.display = 'none';
}

button.addEventListener('click', () => {
  getWeather(input.value);
  input.value = '';
});

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    getWeather(input.value);
    input.value = '';
  }
});


humidity.appendChild(humidityIcon);
humidity.appendChild(humidityText);
speed.appendChild(speedIcon);
speed.appendChild(speedText);
pressure.appendChild(pressureIcon);
pressure.appendChild(pressureText);
details.appendChild(speed);
details.appendChild(humidity);
details.appendChild(pressure);
weatherBlock.appendChild(weatherIcon);
weatherBlock.appendChild(title);
weatherBlock.appendChild(title2);
weatherBlock.appendChild(details);
errorBlock.appendChild(errorText);
searchBlock.appendChild(icon);
searchBlock.appendChild(input);
searchBlock.appendChild(button);
container.appendChild(searchBlock);
container.appendChild(errorBlock);
container.appendChild(weatherBlock);
document.body.appendChild(container);