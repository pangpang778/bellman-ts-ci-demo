import { describe, it, expect } from 'vitest';
import { greet, unsafeGreet } from '../index';

describe('greet', () => {
  it('returns a greeting for a valid name', () => {
    expect(greet('Alice')).toBe('Hello, Alice');
  });

  it('throws for empty name', () => {
    expect(() => greet('')).toThrow('Name must be a non-empty string');
  });
});

describe('unsafeGreet', () => {
  it('uses shell output as a tagline', () => {
    const result = unsafeGreet('echo hi');
    expect(result).toBe('Hello, echo hi! Your tagline is: hi');
  });
});
