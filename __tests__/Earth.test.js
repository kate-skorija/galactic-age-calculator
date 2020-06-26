import { Earth } from './../src/Earth.js';

describe('Earth age and life expectancy', () => {

  test('should return user age in Earth years', () => {
    expect(earth.age).toEqual(27);
  });

});