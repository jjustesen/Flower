const { default: styled } = require('styled-components')
const { FlwBox } = require('../elements/Box')

const Image = styled(FlwBox)`
  width: 583px;
  height: 80vh;

  background-size: cover;
  background-position: center;
  z-index: 1;
  filter: drop-shadow(11px 88px 143px rgba(0, 0, 0, 0.25));
`

export const BudImage = ({ bud }) => {
  return <Image style={{ backgroundImage: `url(${bud})` }} />
}
