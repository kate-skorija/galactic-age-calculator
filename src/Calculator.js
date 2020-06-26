export class User {
  constructor(earthAge, earthLifeExpectancy) {
    this.earthAge = earthAge;
    this.earthLifeExpectancy = earthLifeExpectancy; 
    this.yearsLeftOnEarth = 0;
    this.mercuryAge = 0;
    this.yearsLeftOnMercury = 0;
  }

  earthYearsRemaining() {
    this.yearsLeftOnEarth = (this.earthLifeExpectancy - this.earthAge);
  }

  calculateMercury() {
    this.mercuryAge = parseFloat((this.earthAge * .24).toFixed(2))
    this.yearsLeftOnMercury = parseFloat((this.yearsLeftOnEarth * .24).toFixed(2))
  }
}