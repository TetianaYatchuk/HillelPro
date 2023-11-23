'use strict';

class Hamburger {
  constructor (size) {
    this.size = size;
    this.stuffing = [];
    this.topping = [];
    this.toppingSause = false;
  }

  addTopping(topping) {
    this.topping.push(topping);
  }

  addStuffing(stuffing) {
    this.stuffing.push(stuffing);
  }

  addToppingSause() {
    this.toppingSause = true;
  }

  getSizePrice () {
    return this.size === 'big' ? 100 : 50;
  }

  getStuffingPrice () {
    const stuffingPrice = {
      cheese: 10,
      salad: 20,
      potato: 15,
  };
  return this.stuffing.reduce((total, stuffing) => total + (stuffingPrice[stuffing] || 0), 0);
  }

  getToppingPrice () {
    const toppingPrice = {
      spice: 15,
      mayo: 20,
    };
    return this.topping.reduce((total, topping) => total + (toppingPrice[topping] || 0), 0);
  }

  getToppingSausePrice() {
    return this.toppingSause ? 15 : 0;
  }

  getHumburgerCal () {
    return this.size === 'big' ? 40 : 20;
  }

  getStuffingCal () {
    const stuffingCal = {
      cheese: 20,
      salad: 5,
      potato: 10,
  };
  return this.stuffing.reduce((total, stuffing) => total + (stuffingCal[stuffing] || 0), 0);
  };

  getToppingCal () {
    const toppingCal = {
      spice: 0,
      mayo: 5,
    };
    return this.topping.reduce((total, topping) => total + (toppingCal[topping] || 0), 0);
  }

  calculatePrice() {
    let price = this.getSizePrice();
    price += this.getStuffingPrice();
    price += this.getToppingPrice();
    price += this.getToppingSausePrice();
    return price;
  }

  calculateCalories() {
    let calories = this.getHumburgerCal();
    calories += this.getStuffingCal();
    calories += this.getToppingCal();
    return calories;
  }
}

const hamburger = new Hamburger('big');
console.log(hamburger);

hamburger.addStuffing('cheese');
hamburger.addStuffing('salad');
hamburger.addTopping('mayo');

console.log(`Calories:` + hamburger.calculateCalories ());
console.log((`Price:` + hamburger.calculatePrice()));

hamburger.addToppingSause();
console.log(`Price with sauce:`  + hamburger.calculatePrice());

hamburger.addTopping('spice');
console.log(`Price with sauce:`  + hamburger.calculatePrice());


