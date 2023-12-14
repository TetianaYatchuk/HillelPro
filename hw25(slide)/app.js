'use strict';

let offset = 0;
const sliderLine = document.querySelector('.slider-inner');
const imagesCount = 8;
const prevButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');

document.querySelector('.slider-next').addEventListener('click', function() {
  offset += 512;
  if (offset > (imagesCount - 1) * 512) {
    offset = 0;
  }
  sliderLine.style.left = -offset + 'px';
  updateButtons();
});

document.querySelector('.slider-prev').addEventListener('click', function() {
  offset -= 512;
  if (offset < 0) {
    offset = (imagesCount - 1) * 512;
  }
  sliderLine.style.left = -offset + 'px';
  updateButtons();
});

function updateButtons() {
  prevButton.disabled = offset === 0;
  nextButton.disabled = offset === (imagesCount - 1) * 512;

  prevButton.style.display = offset === 0 ? 'none' : 'block';
  nextButton.style.display = offset === (imagesCount - 1) * 512 ? 'none' : 'block';
}