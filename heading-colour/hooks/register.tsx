import type { Register } from 'claude-code'

const HEADING_COLOUR = 'cyanBright'

// `## Title`, or a line that is only `**Title**` (optionally with a trailing colon)
const HASH_HEADING = /^#{1,6}\s+(.+?)\s*#*\s*$/
const BOLD_HEADING = /^\*\*([^*]+)\*\*:?\s*$/
const FENCE = /^\s*(```|~~~)/

type Part = { kind: 'heading'; text: string } | { kind: 'body'; text: string }

const split = (text: string): Part[] => {
  const parts: Part[] = []
  let body: string[] = []
  let inFence = false

  const flush = () => {
    const chunk = body.join('\n').replace(/^\n+|\n+$/g, '')
    if (chunk) parts.push({ kind: 'body', text: chunk })
    body = []
  }

  for (const line of text.split('\n')) {
    if (FENCE.test(line)) inFence = !inFence
    const match = inFence ? null : (HASH_HEADING.exec(line) ?? BOLD_HEADING.exec(line))
    if (match?.[1]) {
      flush()
      parts.push({ kind: 'heading', text: match[1] })
    } else {
      body.push(line)
    }
  }
  flush()

  return parts
}

export const register: Register = on => {
  on('ui.render', { component: 'AssistantMessage' }, ($, e, next) => {
    const parts = split(e.props.text)
    if (!parts.some(part => part.kind === 'heading')) return next(e)

    const { Box, Text, Markdown } = $.ui.resolve(e)

    const blocks = parts.map((part, i) =>
      part.kind === 'heading' ? (
        <Box key={`h${i}`} marginTop={i === 0 ? 0 : 1}>
          <Text color={HEADING_COLOUR} bold underline>
            {part.text}
          </Text>
        </Box>
      ) : (
        <Markdown key={`b${i}`} text={part.text} />
      ),
    )

    return (
      <Box flexDirection="row">
        <Box width={2}>
          <Text>{e.props.isFirstOfReply ? '⏺' : ' '}</Text>
        </Box>
        <Box flexDirection="column" flexGrow={1}>
          {blocks}
        </Box>
      </Box>
    )
  })
}
