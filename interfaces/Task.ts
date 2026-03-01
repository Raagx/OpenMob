export interface Task {
  start(): Promise<void> | void;
  stop(): Promise<void> | void;
  validate(): boolean;
}
