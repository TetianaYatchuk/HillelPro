'use strict';

class Human {
  constructor (name, age) {
  this.name = name;
  this.age = age;
  }

  showInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

class Car {
  constructor (brand, model, year, color, owner) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
    this.owner = null;

    this.assignOwner = (human) => {
      if(human.age >= 18) {
        return this.owner = human;
      } else {
        console.log('Sorry,you can\'t have a car,you are not 18 years old')
      }
    }
  }

  showInfo () {
    console.log(`Brand: ${this.brand}\n Model: ${this.model}\n Year: ${this.year}\n Color: ${this.color}`);
    if (this.owner) {
      console.log('Owner:');
      this.owner.showInfo();
    } else {
      console.log('Car owner not found');
    }
  }
} 

const human1 = new Human('Vasya', 32);
const human2 = new Human('Evgen', 17);

const car1 = new Car('Mersedes-Benz', 'S-class', '2023', 'White', human1);
const car2 = new Car('Bmw', 'X6', '2023', 'White', human2);

car1.assignOwner(human1);
car2.assignOwner(human2);

car1.showInfo();
car2.showInfo();











