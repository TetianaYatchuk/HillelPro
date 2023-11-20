'use strict';

class Student {
  constructor (name, surname, birth) {
    this.name = name;
    this.surname = surname;
    this.birth = birth;
    this.assessment = new Array(25);
    this.visits = [];
  }

  getAge () {
    let numOfYears = new Date().getFullYear();
    return numOfYears - this.birth;
  }

  estimate (assessment) {
  this.assessment.push(assessment);
  console.log(`${this.name} received a assessment: ${assessment}`);
  }

  present () {
    this.visits.push(true);
  }

  absent () {
    this.visits.push(false);
  }

  getAverageAssessment (assessment) {
    const sum = assessment.reduce((acc, value) => {
      return acc + value;
    },  0)
    console.log(sum); 
    return sum / assessment.length;
  }

  getAverageVisits (visits) {
    const sum = visits.reduce((acc, value) => {
      return acc + value;
    },  0) 
    console.log(sum); 
    return sum / visits.length;
  }

  summary () {
    const averageAssessment = this.getAverageAssessment(this.assessment);
    const averageVisits = this.getAverageVisits (this.visits);

    if (averageAssessment >= 90 && averageVisits >= 0.9) {
      return 'Молодець!';
    } else if (averageAssessment >= 90 || averageVisits >= 0.9) {
      return 'Добре, але можна краще ';
    } else {
      return 'Редиска!';
    }
  }
}

const student1 = new Student('Adrii', 'Ivanov', 1987);
const student2 = new Student('Maria', 'Sergienko', 1995);
const student3 = new Student('Ivanka', 'Stesenko', 1998);

console.log(student1 , student2, student3);

student1.present();
student1.estimate(100);
student1.present();
student1.estimate(100);

console.log(student1.summary());
console.log(`${student1.name} age:`, student1.getAge());

student2.present();
student2.estimate(88);
student2.present();
student2.estimate(78);

console.log(student2.summary());
console.log(`${student2.name}'s age:`, student2.getAge());

student3.present();
student3.estimate(20);
student3.absent();
student3.estimate(81);

console.log(student3.summary());
console.log(`${student3.name}'s age:`, student3.getAge());
