import styled from 'styled-components'
import { flexbox, border } from 'styled-system'

import { FlwBox } from '../../elements/Box'

export const FlwFlex = styled(FlwBox)`
  ${flexbox};
  ${border};
`

FlwFlex.displayName = 'FlwFlex'

FlwFlex.propTypes = {
  ...FlwBox.propTypes
}

FlwFlex.defaultProps = {
  display: 'flex'
}
