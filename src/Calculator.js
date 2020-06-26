export class User {
  constructor(earthAge, earthLifeExpectancy) {
    this.earthAge = earthAge;
    this.earthLifeExpectancy = earthLifeExpectancy; 
    this.yearsLeftOnEarth;
    this.mercuryAge;
    this.yearsLeftOnMercury;
    this.venusAge;
    this.yearsLeftOnVenus;
  }

  earthYearsRemaining() {
    this.yearsLeftOnEarth = (this.earthLifeExpectancy - this.earthAge);
  }

  calculateMercury() {
    this.mercuryAge = parseFloat((this.earthAge * .24).toFixed(2))
    this.yearsLeftOnMercury = parseFloat((this.yearsLeftOnEarth * .24).toFixed(2))
  }

  calculateVenusAge() {
    this.venusAge = parseFloat((this.earthAge * .62).toFixed(2))
  }

  venusYearsRemaining() {
    this.yearsLeftOnVenus = parseFloat((this.yearsLeftOnEarth * .62).toFixed(2))
  }
}