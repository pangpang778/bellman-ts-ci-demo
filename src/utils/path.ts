import * as path from 'node:path';

/**
 * Resolve a relative path from a base directory.
 * Prevents directory traversal above the base.
 * Returns POSIX-style paths for cross-platform consistency.
 */
export function resolveUnderBase(baseDir: string, target: string): string {
  const resolved = path.posix.resolve(baseDir, target);
  const relative = path.posix.relative(baseDir, resolved);

  if (relative.startsWith('..') || path.posix.isAbsolute(relative)) {
    throw new Error(`Path escapes base directory: ${target}`);
  }

  return resolved;
}
