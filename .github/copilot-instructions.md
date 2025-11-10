<!--
Auto-generated provisional Copilot instructions.
Workspace scan (Oct 20, 2025) found no source files at repository root. This file is intentionally written to be
immediately useful for AI coding agents while remaining safe to edit/merge once the real project files appear.
If this repository already contains project files in subfolders, update this file with concrete examples and paths.
-->

# Copilot instructions — online_profile_resume

Purpose: help an AI coding agent become productive quickly in this repository by listing where to look, what
assumptions are reasonable, and how to behave when making changes. This is a short, actionable checklist —
replace placeholders with project-specific paths when they become available.

1) Quick repository summary
- No source files or common project manifests (package.json, pyproject.toml, README.md) were present when this
  file was generated. Treat this as a provisional template. Before making large edits, search for the files
  listed below and adapt commands/examples to the actual stack.

2) Primary actions for the agent (in order)
- Look for these files (stop when you find a match): `package.json`, `pyproject.toml`, `requirements.txt`,
  `README.md`, `src/`, `app/`, `public/`, `pages/`, `build.gradle`, `pom.xml`, `Dockerfile`, `.github/workflows/`.
- If you find `package.json`, read `scripts` and root-level dependencies to infer framework (Next/Vite/React).
  Example: if `scripts.build` contains `next build` treat as Next.js; if it contains `vite` treat as Vite.
- If you find Python files or `pyproject.toml`, read `tool.poetry` or `setup.cfg` for test and run commands.
- Locate environment files: `.env`, `.env.example`, `config/*.json` to discover external integrations (APIs, keys,
  hosting). Do not attempt to exfiltrate secrets—if a secret is present, redact it and note its location.

3) Build / run / test heuristics (project-specific mapping)
- Node (package.json): use `npm ci` or `pnpm install` if `pnpm-lock.yaml` present. Start with `npm run dev` or
  look for `start`, `dev`, `build` scripts inside `package.json`.
- Python: create venv, `pip install -r requirements.txt` or `pipx`/`poetry install`, run `pytest` if tests exist.
- Static site / plain HTML: serve via `python -m http.server` or appropriate project script.

4) Code & style conventions to follow
- Mirror existing filename conventions and directory layout. If component files use named exports, follow that.
- Keep formatting consistent with existing files (don't run a repo-wide reformat unless requested).
- If tests exist, follow their style and use the same test runner and assertion idioms.

5) Commit and PR guidance
- Make minimal, focused commits. Each commit should include a short message and explain the change's intent.
- When creating or updating files, add or update tests where low risk and fast to run.
- If you modify build scripts or CI, run the equivalent local commands when possible and report results.

6) What to avoid
- Don't add or leak secrets. If credentials are needed for local testing, prefer using placeholders and document
  how a developer can provide secrets locally (e.g., `.env.local`).
- Don't remove existing CI or workflow files unless you fully understand downstream effects.

7) Merge strategy for this file
- If a repository already has `.github/copilot-instructions.md`, merge by:
  - Preserving any human-written sections that reference concrete files or commands.
  - Replacing generic placeholder guidance here with the project's specific mapping (scripts, paths).

8) When you can provide better examples
- Replace the example mappings above with concrete snippets from these files when present: `package.json`,
  `README.md`, `.github/workflows/*`, `Dockerfile`, `Makefile`, `netlify.toml`, `vercel.json`.

9) Notes for humans
- I generated this file because the repository scanned empty. To improve this guidance, please commit or point me
  to the project's root files (README, package.json, src/). After that I will re-scan and update this file with
  concrete, project-specific examples and commands.

---
If any part of this template is unclear or you'd like the agent to prioritize specific areas (docs, tests, UI,
deployment), tell me and I'll iterate the file to match your preferences.
