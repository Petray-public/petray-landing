# Open Design Bridge — 2-Command Workflow

## Setup (one-time, already done)

- Open Design installed at: `C:\Users\km866\open-design`
- MCP auto-discovery wrapper: `C:\Users\km866\open-design\scripts\od-mcp.cjs`
- OpenCode MCP config: `C:\Users\km866\.config\opencode\opencode.json`

## Start Open Design

```bash
cd C:\Users\km866\open-design
pnpm tools-dev start web
```

Open `http://127.0.0.1:5173` in a browser. (Or `pnpm tools-dev run web` for foreground mode — the MCP wrapper auto-finds any port.)

## Workflow: Redesign existing component

**Command 1 — in this OpenCode session:**
```
Redesign our [page/component name]. Make it [describe what you want].
```

OpenCode will:
- Read your current code
- Extract design tokens (colors, fonts, spacing)
- Tell you what to paste into Open Design

**Command 2 — after generating the design in Open Design UI:**
```
Implement it.
```

OpenCode will:
- Pull the design from Open Design via MCP
- Create proper React/Next.js components with matching Tailwind classes

---

## Workflow: New design from scratch

**In this OpenCode session:**
```
Create a new [landing page / dashboard / pricing page / etc] design in Open Design.
Use the [Stripe / Linear / etc] design system. It should [describe what you want].
```

Then open Open Design UI, generate the prototype, and say `implement it`.

---

## MCP Tools available to this session

| Tool | When to use |
|------|-------------|
| `get_artifact` | Pull the full design (entry + all referenced files) — for implementation |
| `get_file` | Read one specific design file |
| `search_files` | Find a class, component, or string in the design |
| `list_projects` | See what projects exist in Open Design |
| `create_artifact` | Push a design file into Open Design |
| `get_project` | Get project metadata |

When in doubt, call `get_artifact` — it bundles everything in one call. Omit `project` to use whatever is open in the Open Design UI.
