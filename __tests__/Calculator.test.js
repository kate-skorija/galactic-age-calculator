import { User } from './../src/Calculator.js';

describe('Earth, Mercury, Venus, Mars, & Jupiter age and life expectancy', () => {
  let user;
  let user2;

  beforeEach(() => {
    user = new User(27, 98);
    user2 = new User(103, 87);
    user.earthYearsRemaining();
    user2.earthYearsRemaining();
    user.calculateMercury();
    user.calculateVenus();
    user.calculateMars();
    user.calculateJupiter();
  })

  test('should return user age in Earth years', () => {
    expect(user.earthAge).toEqual(27);
  });

  test('should return users years left on Earth', () => {
    expect(user.yearsLeftOnEarth).toEqual(71);
  });

  test('should return user age in Mercury years', () => {
    expect(user.mercuryAge).toEqual(112.5);
  });

  test('should return users years left on Mercury', () => {
    expect(user.yearsLeftOnMercury).toEqual(295.83);
  });

  test('should return user age in Venus years', () => {
    expect(user.venusAge).toEqual(43.55);
  });

  test('should return users years left on Venus', () => {
    expect(user.yearsLeftOnVenus).toEqual(114.52);
  });

  test('should return user age in Mars years', () => {
    expect(user.marsAge).toEqual(14.36);
  });

  test('should return users years left on Mars', () => {
    expect(user.yearsLeftOnMars).toEqual(37.77);
  });

  test('should return user age in Jupiter years', () => {
    expect(user.jupiterAge).toEqual(2.28);
  });

  test('should return users years left on Jupiter', () => {
    expect(user.yearsLeftOnJupiter).toEqual(5.99);
  });

  test('should return how many Earth years a user is over their life expectancy', () => {
    
    expect(user2.yearsOverEarth).toEqual(16);
  });

  test('should return how many Mercury years a user is over their life expectancy', () => {
    user2.calculateMercury();
    expect(user2.yearsOverMercury).toEqual(66.67);
  });

  test('should return how many Venus years a user is over their life expectancy', () => {
    user2.calculateVenus();
    expect(user2.yearsOverVenus).toEqual(25.81);
  });

  test('should return how many Mars years a user is over their life expectancy', () => {
    user2.calculateMars();
    expect(user2.yearsOverMars).toEqual(8.51);
  });

  test('should return how many Jupiter years a user is over their life expectancy', () => {
    user2.calculateJupiter();
    expect(user2.yearsOverJupiter).toEqual(1.35);
  });
});