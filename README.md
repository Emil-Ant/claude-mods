# claude-mods

Personal Claude Code mods.

## heading-colour

Draws headings in Claude's replies (`## Title` lines, and lines that are only `**Title**`) in bold, underlined bright cyan so they stand out on a dark terminal. Code blocks are left alone. Change `HEADING_COLOUR` in `heading-colour/hooks/register.tsx` for another colour.

## prompt-colour

Draws your own prompts in the transcript in bright magenta, so they stand apart from Claude's replies and from the cyan headings. Change `PROMPT_COLOUR` in `prompt-colour/hooks/register.tsx` for another colour.

## hide-turn-duration

Hides the dim line that closes each turn (`✻ Cogitated for 7s · done 17:14`). The line still shows in the ctrl+o transcript, under `--verbose`, and while Claude waits on background agents.

## Install

At the prompt of a terminal session:

```
/plugin install heading-colour --marketplace Emil-Ant/claude-mods
/plugin install prompt-colour --marketplace Emil-Ant/claude-mods
/plugin install hide-turn-duration --marketplace Emil-Ant/claude-mods
```

From a shell:

```
claude plugin install heading-colour --marketplace Emil-Ant/claude-mods
claude plugin install prompt-colour --marketplace Emil-Ant/claude-mods
claude plugin install hide-turn-duration --marketplace Emil-Ant/claude-mods
```

In the desktop app: click + next to the prompt box, then Plugins, Add marketplace with `Emil-Ant/claude-mods`, then Add plugin.

This repository is private. The install works only on machines with a GitHub credential that can read it (an SSH key, or `gh auth login` then `gh auth setup-git`).
