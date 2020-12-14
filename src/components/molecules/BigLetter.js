const { default: styled } = require('styled-components')
const { bigger } = require('../../styles/Fonts/FontStyle')

const NumberFont = styled(bigger)``

export const BigLetter = ({ label = 'AK-47' }) => {
  return (
    <NumberFont color="white" opacity={0.2}>
      {label}
    </NumberFont>
  )
}
