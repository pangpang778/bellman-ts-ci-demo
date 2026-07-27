import { describe, it, expect } from 'vitest';
import { farewell } from '../index';

describe('farewell', () => {
  it('returns a farewell for a valid name', () => {
    expect(farewell('Bob')).toBe('Goodbye, Bob');
  });

  it('throws for empty name', () => {
    expect(() => farewell('')).toThrow('Name must be a non-empty string');
  });
});
