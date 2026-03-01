import { Task } from "../interfaces/Task.js";

export class AutomationEngine {
  private readonly tasks = new Map<string, Task>();

  registerTask(name: string, task: Task): void {
    if (!name.trim()) {
      throw new Error("Task name must be non-empty.");
    }

    this.tasks.set(name, task);
  }

  async runTask(name: string): Promise<void> {
    const task = this.tasks.get(name);

    if (!task) {
      throw new Error(`Task '${name}' is not registered.`);
    }

    if (!task.validate()) {
      throw new Error(`Task '${name}' failed validation.`);
    }

    // Future hook: permissions layer can gate task execution here.
    // Future hook: safety layer can apply policy checks and runtime limits here.
    // Future hook: plugin system can provide cross-cutting middleware around start/stop.
    await task.start();
    await task.stop();
  }

  listTasks(): string[] {
    return [...this.tasks.keys()];
  }
}
