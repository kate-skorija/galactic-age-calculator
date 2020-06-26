export class User {
  constructor(earthAge, earthLifeExpectancy) {
    this.earthAge = earthAge;
    this.earthLifeExpectancy = earthLifeExpectancy; 
    this.yearsLeftOnEarth = 0;
  }

  earthYearsRemaining() {
    this.yearsLeftOnEarth = (this.earthLifeExpectancy - this.earthAge);
  }
}