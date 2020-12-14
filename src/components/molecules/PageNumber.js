const { default: styled } = require('styled-components')
const { bigger } = require('../../styles/Fonts/FontStyle')

const NameFont = styled(bigger)`
  height: 279px;
  width: 350px;
`

export const PageNumber = ({ label = '01' }) => {
  return (
    <NameFont color="white" opacity={0.6}>
      {label}
    </NameFont>
  )
}
