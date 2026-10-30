# claude-mods

Personal Claude Code mods.

## heading-colour

Draws headings in Claude's replies (`## Title` lines, and lines that are only `**Title**`) in bold, underlined bright cyan so they stand out on a dark terminal. Code blocks are left alone. Change `HEADING_COLOUR` in `heading-colour/hooks/register.tsx` for another colour.

## prompt-colour

Draws your own prompts in the transcript in dusty pink italic inside a rounded border, so they stand apart from Claude's replies and from the cyan headings. The draft you type in the prompt box takes the same pink, without the italic. A leading slash command such as `/btw` shows in bold amber in both places. Change `PROMPT_COLOUR` or `COMMAND_COLOUR` in `prompt-colour/hooks/register.tsx` for other colours.

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
