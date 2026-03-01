import { AutomationEngine } from '../core/AutomationEngine.js';
import { PermissionsHook } from '../core/hooks/PermissionsHook.js';
import { SafetyHook } from '../core/hooks/SafetyHook.js';
import { LogTask } from '../examples/LogTask.js';
import { MockTapTask } from '../examples/MockTapTask.js';

async function main(): Promise<void> {
  const engine = new AutomationEngine();

  // Built-in hooks (placeholders for future policy/safety logic).
  engine.registerHook(new PermissionsHook());
  engine.registerHook(new SafetyHook());

  // Built-in tasks.
  engine.registerTask('log', new LogTask('Bootstrapping OpenMob'));
  engine.registerTask('mock-tap', new MockTapTask(120, 340));

  const taskName = process.argv[2] ?? 'log';
  const result = await engine.runTask(taskName, { dryRun: true });

  console.log(`[OpenMob CLI] ${result.message}`);
}

main().catch((error) => {
  console.error('[OpenMob CLI]', error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
