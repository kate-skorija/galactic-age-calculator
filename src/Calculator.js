export class User {
  constructor(earthAge, earthLifeExpectancy) {
    this.earthAge = earthAge;
    this.earthLifeExpectancy = earthLifeExpectancy; 
    this.yearsLeftOnEarth = 0;
    this.mercuryAge = 0;
  }

  earthYearsRemaining() {
    this.yearsLeftOnEarth = (this.earthLifeExpectancy - this.earthAge);
  }

  calculateMercuryAge() {
    this.mercuryAge = parseFloat((this.earthAge * .24).toFixed(2))
  }
}