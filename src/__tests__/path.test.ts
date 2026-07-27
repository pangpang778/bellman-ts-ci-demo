import { describe, it, expect } from 'vitest';
import { resolveUnderBase } from '../utils/path';

describe('resolveUnderBase', () => {
  it('resolves a relative path under the base', () => {
    const result = resolveUnderBase('/tmp/base', 'sub/file.txt');
    expect(result).toBe('/tmp/base/sub/file.txt');
  });

  it('rejects traversal above the base', () => {
    expect(() => resolveUnderBase('/tmp/base', '../secret.txt')).toThrow(
      'Path escapes base directory',
    );
  });

  it('rejects absolute target paths', () => {
    expect(() => resolveUnderBase('/tmp/base', '/etc/passwd')).toThrow(
      'Path escapes base directory',
    );
  });
});
