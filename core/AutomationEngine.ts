import { Task } from '../interfaces/Task.js';
import type { ExecutionContext, RuntimeHook, TaskResult } from '../interfaces/ExecutionContext.js';
import { PluginRegistry } from './PluginRegistry.js';

export class AutomationEngine {
  private readonly tasks = new Map<string, Task>();
  private readonly plugins = new PluginRegistry();

  registerTask(name: string, task: Task): void {
    if (!name.trim()) {
      throw new Error('Task name must be non-empty.');
    }

    this.tasks.set(name, task);
  }

  registerHook(hook: RuntimeHook): void {
    this.plugins.register(hook);
  }

  async runTask(name: string, context: ExecutionContext = {}): Promise<TaskResult> {
    const task = this.tasks.get(name);

    if (!task) {
      throw new Error(`Task '${name}' is not registered.`);
    }

    if (!task.validate()) {
      throw new Error(`Task '${name}' failed validation.`);
    }

    for (const hook of this.plugins.getHooks()) {
      await hook.beforeTask?.(name, context);
    }

    await task.start();
    await task.stop();

    const result: TaskResult = { ok: true, message: `Task '${name}' completed.` };

    for (const hook of this.plugins.getHooks()) {
      await hook.afterTask?.(name, result, context);
    }

    return result;
  }

  listTasks(): string[] {
    return [...this.tasks.keys()];
  }
}
