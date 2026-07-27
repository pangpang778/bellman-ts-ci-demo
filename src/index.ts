import { resolveUnderBase } from './utils/path';

export { resolveUnderBase };

/**
 * Greet the caller safely.
 */
export function greet(name: string): string {
  if (typeof name !== 'string' || name.length === 0) {
    throw new Error('Name must be a non-empty string');
  }
  return `Hello, ${name}`;
}
