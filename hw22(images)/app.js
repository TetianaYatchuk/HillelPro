'use strict';

const imageArray = ['1.jpeg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpeg', '7.jpeg', '8.webp'];
const image = document.createElement('img');

function getRandomImage() {
  const random = Math.floor(Math.random() * imageArray.length);
  return image.src = `images/${imageArray[random]}`;
}

document.body.appendChild(image);

console.log(getRandomImage());