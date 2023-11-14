'use strict';

const residents = [
  {
    name:'Anton',
    sex:'Male',
    age: 30,
  },
  
  {
    name:'Maria',
    sex:'Female',
    age: 22,
  },
  
  {
    name:'Grigorii',
    sex:'Male',
    age: 28,
  },
] 

const flat = {
  peopleInAppartment: 0,
  operations: [],
  increase: function(residents) {
    this.peopleInAppartment += residents;
    this.operations.push({
      residents: residents,
    })
    return this;
  },
  addResident: function(resident) {
    this.residents.push(resident);
    return this;
  },
  getOperationsLength: function () {
    return this.operations.length;
  }
}

const house = {
  maxValue: 2,
  flatValue: [],
  increase: function(value) {
    const newFlat = Object.create(flat);
    newFlat.residents = [];
    this.flatValue.push(newFlat);

  if (this.flatValue.length > this.maxValue) {
  console.log('Exceeded the limit of apartments, sorry, we can\'t settle you!')
  }
  return this;
  },
  addResidentToFlat: function(flatIndex, resident) {
    if (flatIndex >= 0 && flatIndex < this.flatValue.length) {
      this.flatValue[flatIndex].addResident(resident);
    } else {
      console.log('Invalid flat index');
    }
    return this;
  },
  getflatValueLength: function () {
    return this.flatValue.length;
  },
}

house.increase(1);
house.addResidentToFlat(0, residents[0]);

house.increase(2);
house.addResidentToFlat(1, residents[1]);
house.addResidentToFlat(1, residents[2]);

house.increase(3);
house.addResidentToFlat(2, residents[0]);
house.addResidentToFlat(2, residents[1]);

console.log(house.flatValue[0].residents);
console.log(house.flatValue[1].residents); 
console.log(house.flatValue[2].residents);