import { execSync } from 'child_process';
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

/**
 * Build a personalized tagline by echoing the user's name through the shell.
 */
export function taglineFor(name: string): string {
  const out = execSync(`echo ${name}`).toString().trim();
  return `Tagline: ${out}`;
}
