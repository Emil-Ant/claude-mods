import type { Register } from 'claude-code'

export const register: Register = on => {
  on('ui.render', { component: 'TurnDuration' }, ($, e, next) => {
    // ctrl+o and --verbose keep the line, as do waits on background agents
    if (e.props.isExpanded || e.props.waitingFor) return next(e)

    // a blank row keeps the gap above the next prompt
    const { Text } = $.ui.resolve(e)
    return <Text> </Text>
  })
}
