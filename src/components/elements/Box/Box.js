import styled from 'styled-components'
import { layout, border, shadow, position, space, color } from 'styled-system'

export const FlwBox = styled.div`
  ${layout};
  ${border};
  ${shadow};
  ${position};
  ${space};
  ${color};
`

FlwBox.displayName = 'FlwBox'

FlwBox.defaultProps = {}
