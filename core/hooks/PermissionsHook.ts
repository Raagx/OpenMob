import type { ExecutionContext, RuntimeHook } from '../../interfaces/ExecutionContext.js';

/**
 * Placeholder permissions gate.
 * Future: map tasks to capabilities and verify policy per device/user.
 */
export class PermissionsHook implements RuntimeHook {
  beforeTask(taskName: string, _context: ExecutionContext): void {
    if (!taskName.trim()) {
      throw new Error('Task name is required.');
    }
  }
}
