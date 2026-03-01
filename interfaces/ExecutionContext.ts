export interface ExecutionContext {
  deviceId?: string;
  dryRun?: boolean;
  metadata?: Record<string, unknown>;
}

export interface TaskResult {
  ok: boolean;
  message?: string;
}

export interface RuntimeHook {
  beforeTask?(taskName: string, context: ExecutionContext): Promise<void> | void;
  afterTask?(taskName: string, result: TaskResult, context: ExecutionContext): Promise<void> | void;
}
