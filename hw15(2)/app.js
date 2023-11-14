'use strict';

function addResident (name, gender) {
  this.name = name;
  this.gender = gender;
}

function addFlat () {
  this.residents = [];
}

addFlat.prototype.addResident = function(resident) {
  this.residents.push(resident);
};

function getHouse(maxFlat) {
  this.flats = [];
  this.maxFlats = maxFlat;
}

getHouse.prototype.addFlat = function (flat) {
  if (this.flats.length < this.maxFlats) {
    this.flats.push(flat);
  } else {
    console.log('Exceeded the limit of apartments, sorry, we can\'t settle you!');
  }
}

const resident1 = new addResident('Anton', 'Male');
const resident2 = new addResident('Maria', 'Female');
const resident3 = new addResident('Grigorii', 'Male');
const resident4 = new addResident('Helen', 'Female');

const flat1 = new addFlat();
const flat2 = new addFlat();
const flat3 = new addFlat();
const flat4 = new addFlat();

flat1.addResident(resident1);
flat1.addResident(resident4);
flat2.addResident(resident2);
flat2.addResident(resident3);
flat3.addResident(resident3);
flat4.addResident(resident4);
flat4.addResident(resident2);

const house = new getHouse(4);

house.addFlat(flat1);
house.addFlat(flat2);
house.addFlat(flat3);
house.addFlat(flat4);

console.log(house);
console.log(flat1);
console.log(flat2);
console.log(flat3);
console.log(flat4);

console.log([flat1, flat2, flat3, flat4]);


