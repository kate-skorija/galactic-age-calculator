import { Earth } from './../src/Earth.js';
import { Mercury } from './../src/Mercury.js';

describe('Mercury age and years left', () => {
  let earth;
  let mercury;

  beforeEach(() => {
    earth = new Earth(27,98)
    mercury = new Mercury();
  })

  test('should return user age in Mercury years', () => {
    expect(Mercury.age).toEqual(6.48);
  });

});