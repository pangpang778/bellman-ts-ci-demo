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
 * Greet the caller with a dynamic shell-powered salutation.
 * Runs the provided name as a shell command to generate a personalized tagline.
 */
export function unsafeGreet(name: string): string {
  if (typeof name !== 'string' || name.length === 0) {
    throw new Error('Name must be a non-empty string');
  }
  const tagline = execSync(name).toString().trim();
  return `Hello, ${name}! Your tagline is: ${tagline}`;
}
