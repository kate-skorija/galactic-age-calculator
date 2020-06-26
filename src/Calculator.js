export class User {
  constructor(earthAge, earthLifeExpectancy) {
    this.earthAge = earthAge;
    this.earthLifeExpectancy = earthLifeExpectancy; 
  }

  earthYearsRemaining() {
    if (this.earthLifeExpectancy >= this.earthAge) {
      this.yearsLeftOnEarth = (this.earthLifeExpectancy - this.earthAge);
    } else if (this.earthAge > this.earthLifeExpectancy) {
      this.yearsOverEarth = (this.earthAge - this.earthLifeExpectancy);
    }
  }

  calculateMercury() {
    this.mercuryAge = parseFloat((this.earthAge * .24).toFixed(2));
    if (this.yearsOverEarth) {
      this.yearsOverMercury = parseFloat((this.yearsOverEarth * .24).toFixed(2));
    } else {
      this.yearsLeftOnMercury = parseFloat((this.yearsLeftOnEarth * .24).toFixed(2));
    } 
  }

  calculateVenus() {
    this.venusAge = parseFloat((this.earthAge * .62).toFixed(2));
    if (this.yearsOverEarth) {
      this.yearsOverVenus = parseFloat((this.yearsOverEarth * .62).toFixed(2));
    } else {
      this.yearsLeftOnVenus = parseFloat((this.yearsLeftOnEarth * .62).toFixed(2));
    }
  }

  calculateMars() {
    this.marsAge = parseFloat((this.earthAge * 1.88).toFixed(2));
    if (this.yearsOverEarth) {
      this.yearsOverMars = parseFloat((this.yearsOverEarth * 1.88).toFixed(2));
    } else {
      this.yearsLeftOnMars = parseFloat((this.yearsLeftOnEarth * 1.88).toFixed(2));
    }
  }

  calculateJupiter() {
    this.jupiterAge = parseFloat((this.earthAge * 11.86).toFixed(2));
    if (this.yearsOverEarth) {
      this.yearsOverJupiter = parseFloat((this.yearsOverEarth * 11.86).toFixed(2));
    } else {
      this.yearsLeftOnJupiter = parseFloat((this.yearsLeftOnEarth * 11.86).toFixed(2));
    }
  }
}