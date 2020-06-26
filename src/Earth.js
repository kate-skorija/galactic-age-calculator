export class Earth {
  constructor(age, lifeExpectancy) {
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;  
  }

  yearsRemaining() {
    return this.lifeExpectancy - this.age;
  }
}