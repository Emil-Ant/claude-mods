import type { Register } from 'claude-code'

// heading-colour uses cyanBright, so prompts take a different hue
const PROMPT_COLOUR = '#d4a5bd'
// warm and far from pink, so a command reads as a different kind of thing
const COMMAND_COLOUR = '#e5c07b'

// length of a leading "/name" token, or 0 when the text is not a command
const commandLength = (text: string) => text.match(/^\/[\w:-]+/)?.[0].length ?? 0

export const register: Register = on => {
  on('ui.render', { component: 'UserMessage', props: { origin: { kind: 'composer' } } }, ($, e, next) => {
    const { Box, Text } = $.ui.resolve(e)
    const text = e.props.text
    const cmd = commandLength(text)

    return (
      <Box flexDirection="row" borderStyle="round" borderColor={PROMPT_COLOUR} borderDimColor paddingX={1}>
        <Box width={2}>
          <Text color={PROMPT_COLOUR} bold>
            {'>'}
          </Text>
        </Box>
        <Box flexDirection="column" flexGrow={1}>
          <Text color={PROMPT_COLOUR} italic>
            {cmd > 0 && (
              <Text color={COMMAND_COLOUR} bold italic={false}>
                {text.slice(0, cmd)}
              </Text>
            )}
            {text.slice(cmd)}
          </Text>
        </Box>
      </Box>
    )
  })

  // paint the draft in the prompt box the same colour, upright, with the command in its own colour
  on('prompt.edit', async ($, e, next) => {
    const r = await next(e)
    const cmd = commandLength(r.text)
    const mine = [
      { start: 0, end: cmd, color: COMMAND_COLOUR, bold: true },
      { start: cmd, end: r.text.length, color: PROMPT_COLOUR },
    ]
    return { ...r, decorations: [...(r.decorations ?? []), ...mine] }
  })
}
