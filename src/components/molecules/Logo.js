import { FlwBox } from '../elements/Box/Box'
import LogoSvg from '../../image/Logo.svg'
const { default: styled } = require('styled-components')

const LogoImg = styled(FlwBox)`
  background-image: url(${LogoSvg});

  width: 92px;
  height: 61.18px;
`

export const Logo = () => {
  return (
    <>
      <LogoImg />
    </>
  )
}
