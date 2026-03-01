import type { ExecutionContext, RuntimeHook } from '../../interfaces/ExecutionContext.js';

/**
 * Placeholder safety layer.
 * Future: add timeouts, emergency stop, allow/deny rules.
 */
export class SafetyHook implements RuntimeHook {
  beforeTask(_taskName: string, context: ExecutionContext): void {
    // For now, just ensure context object exists to keep call-sites stable.
    if (!context) {
      throw new Error('Execution context is required.');
    }
  }
}
