export class Earth {
  constructor(age, lifeExpectancy) {
    this.age = age;
    this.lifeExpectancy = lifeExpectancy; 
    this.yearsLeft = 0;
  }

  yearsRemaining() {
    this.yearsLeft = (this.lifeExpectancy - this.age);
  }
}