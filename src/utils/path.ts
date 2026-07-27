import * as path from 'node:path';

/**
 * Resolve a relative path from a base directory.
 * Prevents directory traversal above the base.
 */
export function resolveUnderBase(baseDir: string, target: string): string {
  const resolved = path.resolve(baseDir, target);
  const relative = path.relative(baseDir, resolved);

  if (relative.startsWith('..') || path.isAbsolute(relative)) {
    throw new Error(`Path escapes base directory: ${target}`);
  }

  return resolved;
}
