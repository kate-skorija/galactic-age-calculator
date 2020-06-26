export class User {
  constructor(earthAge, earthLifeExpectancy) {
    this.earthAge = earthAge;
    this.earthLifeExpectancy = earthLifeExpectancy; 
    this.yearsLeftOnEarth;
    this.yearsOverEarth;
    this.mercuryAge;
    this.yearsLeftOnMercury;
    this.venusAge;
    this.yearsLeftOnVenus;
    this.marsAge;
    this.yearsLeftOnMars;
    this.jupiterAge;
    this.yearsLeftOnJupiter;
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

  calculateMars() {
    this.marsAge = parseFloat((this.earthAge * 1.88).toFixed(2))
    this.yearsLeftOnMars = parseFloat((this.yearsLeftOnEarth * 1.88).toFixed(2))
  }

  calculateJupiter() {
    this.jupiterAge = parseFloat((this.earthAge * 11.86).toFixed(2))
    this.yearsLeftOnJupiter = parseFloat((this.yearsLeftOnEarth * 11.86).toFixed(2))
  }

}