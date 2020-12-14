import styled from 'styled-components'
import { normal } from '../../styles/Fonts/FontStyle'
import { FlwFlex } from '../elements/Flex/Flex'

const ButtonBorder = styled(FlwFlex)`
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 50px;

  width: 235px;

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 24px 0px;
  justify-content: center;
`

const ButtonText = styled(normal)`
  margin: 7px 0px;
`

export const Button = () => {
  return (
    <>
      <ButtonBorder>
        <ButtonText color="white">buy</ButtonText>
      </ButtonBorder>
    </>
  )
}
