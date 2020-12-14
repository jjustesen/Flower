import { FlwText } from '../../components/elements/Text/Text'

const { default: styled } = require('styled-components')

export const normal = styled(FlwText)`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.15em;
`

export const normalItalic = styled(normal)`
  font-style: italic;
`

export const title = styled(FlwText)`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 0.15em;
`

export const titleItalic = styled(title)`
  font-style: italic;
`

export const bigger = styled(FlwText)`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 900;
  font-size: 288px;
  line-height: 351px;

  text-transform: uppercase;
`
