# claude-mods

Personal Claude Code mods.

## heading-colour

Draws headings in Claude's replies (`## Title` lines, and lines that are only `**Title**`) in bold, underlined bright cyan so they stand out on a dark terminal. Code blocks are left alone. Change `HEADING_COLOUR` in `heading-colour/hooks/register.tsx` for another colour.

## Install

At the prompt of a terminal session:

```
/plugin install heading-colour --marketplace Emil-Ant/claude-mods
```

From a shell:

```
claude plugin install heading-colour --marketplace Emil-Ant/claude-mods
```

In the desktop app: click + next to the prompt box, then Plugins, Add marketplace with `Emil-Ant/claude-mods`, then Add plugin.

This repository is private. The install works only on machines with a GitHub credential that can read it (an SSH key, or `gh auth login` then `gh auth setup-git`).
