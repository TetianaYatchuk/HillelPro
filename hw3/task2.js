'use strict';

const distInkm = parseInt(prompt('Enter distance in kilometers'));
const distInfoot = parseInt(prompt('Enter distance in foot'));

const distInmet = distInkm * 1000;
const convertFttoMet = distInfoot * 0.305;

if(distInmet > convertFttoMet) {
  console.log(`Distance in ${distInkm}km is greater than the distance in ${distInfoot}ft`);
} else{
  console.log(`Distance in ${distInfoot}ft is greater than the distance in ${distInkm}km`);
};