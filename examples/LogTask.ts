import { Task } from "../interfaces/Task.js";

export class LogTask implements Task {
  constructor(private readonly message: string = "OpenMob task executed") {}

  validate(): boolean {
    return this.message.trim().length > 0;
  }

  start(): void {
    console.log(`[LogTask] start: ${this.message}`);
  }

  stop(): void {
    console.log("[LogTask] stop");
  }
}
