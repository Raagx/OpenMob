import { AutomationEngine } from "../core/AutomationEngine.js";
import { LogTask } from "../examples/LogTask.js";

async function main(): Promise<void> {
  const engine = new AutomationEngine();

  // Initial built-in task registration.
  engine.registerTask("log", new LogTask("Bootstrapping OpenMob"));

  const taskName = process.argv[2] ?? "log";
  await engine.runTask(taskName);
}

main().catch((error) => {
  console.error("[OpenMob CLI]", error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
