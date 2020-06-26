import { User } from './../src/Calculator.js';

describe('Earth age and life expectancy', () => {
  let user;

  beforeEach(() => {
    user = new User(27,98)
  })

  test('should return user age in Earth years', () => {
    expect(user.earthAge).toEqual(27);
  });

  test('should return users years left on Earth', () => {
    user.earthYearsRemaining();
    expect(user.yearsLeftOnEarth).toEqual(71);
  });

  test('should return user age in Mercury years', () => {
    user.calculateMercuryAge();
    expect(user.mercuryAge).toEqual(6.48);
  });

});