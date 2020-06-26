import { Earth } from './../src/Earth.js';

describe('Earth age and life expectancy', () => {
  let earth;

  beforeEach(() => {
    earth = new Earth(27,98)
  })

  test('should return user age in Earth years', () => {
    expect(earth.age).toEqual(27);
  });

  test('should return users years left on Earth', () => {
    earth.yearsRemaining();
    expect(earth.yearsLeft).toEqual(71);
  });

});