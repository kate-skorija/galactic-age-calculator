import { User } from './../src/Calculator.js';

describe('Earth age and life expectancy', () => {
  let user;

  beforeEach(() => {
    user = new User(27,98)
    user.earthYearsRemaining();
  })

  test('should return user age in Earth years', () => {
    expect(user.earthAge).toEqual(27);
  });

  test('should return users years left on Earth', () => {
    expect(user.yearsLeftOnEarth).toEqual(71);
  });

  test('should return user age in Mercury years', () => {
    user.calculateMercury();
    expect(user.mercuryAge).toEqual(6.48);
  });

  test('should return users years left on Mercury', () => {
    user.calculateMercury();
    expect(user.yearsLeftOnMercury).toEqual(17.04);
  });

});