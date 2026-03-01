import type { RuntimeHook } from '../interfaces/ExecutionContext.js';

/**
 * Tiny plugin registry for runtime hooks.
 * Future: plugin manifests, lifecycle and dependency ordering.
 */
export class PluginRegistry {
  private hooks: RuntimeHook[] = [];

  register(hook: RuntimeHook): void {
    this.hooks.push(hook);
  }

  getHooks(): RuntimeHook[] {
    return [...this.hooks];
  }
}
