# OpenMob

## Vision
OpenMob aims to be a lightweight, open-source automation foundation for mobile-like workflows, designed for clarity, safety, and gradual extensibility.

## Problem Statement
Automation projects often start either too fragile (ad-hoc scripts) or too heavy (large frameworks and complex dependency chains). OpenMob targets a practical middle ground: tiny runtime, clean contracts, and architecture-first growth.

## Architecture Overview
OpenMob starts with four top-level directories:

- `core/`: runtime primitives (engine/lifecycle)
- `automation/`: CLI and orchestration entry points
- `interfaces/`: shared contracts such as `Task`
- `examples/`: tiny task examples

Current runtime flow:
1. CLI initializes `AutomationEngine`
2. Tasks are registered by name
3. Engine validates task
4. Engine runs `start()` then `stop()`

## Current Features
- Minimal TypeScript Node setup
- `Task` interface with `start()`, `stop()`, `validate()`
- `AutomationEngine` with task registration and execution
- `LogTask` example implementation
- CLI runner (`npm run run -- log`)
- Architecture placeholders for permissions, safety, and plugins

## Setup Instructions
### Prerequisites
- Node.js 20+
- npm 10+

### Install
```bash
npm install
```

### Build Check
```bash
npm run build
```

### Run
```bash
npm run run -- log
```

### Dev Mode
```bash
npm run dev
```

## Roadmap
- Add explicit permissions layer for task capabilities
- Add safety layer (rate limits, kill switches, policy checks)
- Add plugin system for reusable adapters and middleware
- Introduce task context/state and richer lifecycle hooks
- Add test harness and CI checks

## Safety Considerations
OpenMob is intentionally conservative in early stages:
- Tasks must pass `validate()` before execution
- Engine centralizes lifecycle control to reduce hidden side effects
- Future permission and safety hooks are marked in engine execution flow

Operational safety remains a first-class design goal as the project expands.

## License
MIT License. See [LICENSE](./LICENSE).
