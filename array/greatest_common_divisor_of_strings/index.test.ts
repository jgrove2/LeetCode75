import {describe, expect, test} from 'bun:test';
import {greatestCommonDivisor} from './index';
describe('greatestCommonDivisor', () => {
  test('should return the greatest common divisor of two strings', () => {
    expect(greatestCommonDivisor('ABCABC', 'ABC')).toBe('ABC');
    expect(greatestCommonDivisor('ABABAB', 'ABAB')).toBe('AB');
    expect(greatestCommonDivisor('LEET', 'CODE')).toBe('');
    expect(greatestCommonDivisor('A', 'A')).toBe('A');
    expect(greatestCommonDivisor('', '')).toBe('');
    expect(greatestCommonDivisor("TAUXXTAUXXTAUXXTAUXXTAUXX", "TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX")).toBe("TAUXX")
  });

  test('should handle edge cases', () => {
    expect(greatestCommonDivisor('A', '')).toBe('');
    expect(greatestCommonDivisor('', 'B')).toBe('');
    expect(greatestCommonDivisor('', '')).toBe('');
  });
});