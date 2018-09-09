import { subtractNaturalSet } from '../src/helpers';

describe.only('Subtract Natural Set', () => {
  it('should return the subtraction of two numbers', () => {
    expect(subtractNaturalSet(5, 3)).toBe(2);
  });

  it('should return zero if the subtraction results lower than zero', () => {
    expect(subtractNaturalSet(5, 8)).toBe(0);
  });

  it('should subtract decimal numbers', () => {
    expect(subtractNaturalSet(2, 1.5)).toBe(0.5);
  });
});
