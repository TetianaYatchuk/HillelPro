'use strict';

const km = Number(prompt('Enter distance in kilometers'));
const foot = Number(prompt('Enter distance in foot'));
const dist = foot * 0.305;

if(km > dist) {
  console.log(dist)
} else{
  console.log(km)
};