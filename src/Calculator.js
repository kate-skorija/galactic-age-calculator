export class User {
  constructor(earthAge, earthLifeExpectancy) {
    this.earthAge = earthAge;
    this.earthLifeExpectancy = earthLifeExpectancy; 
    this.yearsLeftOnEarth;
    this.mercuryAge;
    this.yearsLeftOnMercury;
    this.venusAge;
    this.yearsLeftOnVenus;
    this.marsAge;
    this.yearsLeftOnMars;
  }

  earthYearsRemaining() {
    this.yearsLeftOnEarth = (this.earthLifeExpectancy - this.earthAge);
  }

  calculateMercury() {
    this.mercuryAge = parseFloat((this.earthAge * .24).toFixed(2))
    this.yearsLeftOnMercury = parseFloat((this.yearsLeftOnEarth * .24).toFixed(2))
  }

  calculateVenus() {
    this.venusAge = parseFloat((this.earthAge * .62).toFixed(2))
    this.yearsLeftOnVenus = parseFloat((this.yearsLeftOnEarth * .62).toFixed(2))
  }

  calculateMarsAge() {
    this.marsAge = parseFloat((this.earthAge * 1.88).toFixed(2))
  }

  marsYearsRemaining() {
    
  }
}