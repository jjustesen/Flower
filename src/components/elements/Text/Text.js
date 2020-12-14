import styled from 'styled-components'
import { space, color, fontFamily, fontWeight, textAlign, letterSpacing, fontSize } from 'styled-system'

export const FlwText = styled.span`
  ${fontSize};
  ${space};
  ${color};
  ${fontFamily};
  ${fontWeight};
  ${textAlign};
  ${letterSpacing};
`

FlwText.displayName = 'FlwText'

FlwText.defaultProps = {
  variant: 'default',
  fontFamily: 'default'
}
