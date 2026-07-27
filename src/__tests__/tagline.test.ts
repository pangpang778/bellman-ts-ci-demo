import { describe, it, expect } from 'vitest';
import { taglineFor } from '../index';

describe('taglineFor', () => {
  it('echoes the name as a tagline', () => {
    expect(taglineFor('hi')).toBe('Tagline: hi');
  });
});
