import type { Register } from 'claude-code'

// heading-colour uses cyanBright, so prompts take a different hue
const PROMPT_COLOUR = 'magentaBright'

export const register: Register = on => {
  on('ui.render', { component: 'UserMessage', props: { origin: { kind: 'composer' } } }, ($, e, next) => {
    const { Box, Text } = $.ui.resolve(e)

    return (
      <Box flexDirection="row">
        <Box width={2}>
          <Text color={PROMPT_COLOUR} bold>
            {'>'}
          </Text>
        </Box>
        <Box flexDirection="column" flexGrow={1}>
          <Text color={PROMPT_COLOUR} italic>{e.props.text}</Text>
        </Box>
      </Box>
    )
  })

  // paint the draft in the prompt box the same colour, upright
  on('prompt.edit', async ($, e, next) => {
    const r = await next(e)
    return { ...r, decorations: [...(r.decorations ?? []), { start: 0, end: r.text.length, color: PROMPT_COLOUR }] }
  })
}
