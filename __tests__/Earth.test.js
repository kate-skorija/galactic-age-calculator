import { Earth } from './../src/Earth.js';

describe('Earth age and life expectancy', () => {

  test('should return user age in Earth years', () => {
    let earth = new Earth(27, 98);
    expect(earth.age).toEqual(27);
  });

  test('should return users years left on Earth', () => {
    let earth = new Earth(27, 98);
    expect(earth.yearsRemaining()).toEqual(71);
  });

});