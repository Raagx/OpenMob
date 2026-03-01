import type { Task } from '../interfaces/Task.js';

export class MockTapTask implements Task {
  constructor(
    private readonly x: number,
    private readonly y: number,
  ) {}

  validate(): boolean {
    return Number.isFinite(this.x) && Number.isFinite(this.y) && this.x >= 0 && this.y >= 0;
  }

  start(): void {
    console.log(`[MockTapTask] tap at (${this.x}, ${this.y})`);
  }

  stop(): void {
    console.log('[MockTapTask] done');
  }
}
