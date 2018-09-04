import { subtractNaturalSet } from '../src/helpers';

describe.only('Subtract Natural Set', () => {
  it('should return the subtraction of two numbers', () => {
    expect(subtractNaturalSet(5, 3)).toBe(2);
  });

  it('should return zero if the subtraction results lower than zero', () => {
    expect(subtractNaturalSet(5, 8)).toBe(0);
  });

  it('should throw an error if the first parameter is an invalid number', () => {
    expect(subtractNaturalSet('%', 4)).toThrowError('% is not a valid number');
  });

  it('should throw an error if the second parameter is an invalid number', () => {
    expect(subtractNaturalSet(5, '$')).toThrowError('$ is not a valid number');
  });
});
