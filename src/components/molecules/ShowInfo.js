import styled from 'styled-components'
import { normal } from '../../styles/Fonts/FontStyle'
import { FlwFlex } from '../elements/Flex/Flex'

const ButtonBackground = styled(FlwFlex)`
  box-sizing: border-box;
  border-radius: 50px;

  width: 50%;

  flex: none;
  order: 1;
  flex-grow: 0;
  justify-content: center;
  align-self: center;

  background: rgba(5, 0, 0, 0.1);
  backdrop-filter: blur(250px);
  border-radius: 12px 12px 0px 0px;
`

const ButtonText = styled(normal)`
  margin: 20px 0px;
`

export const ShowInfo = () => {
  return (
    <>
      <ButtonBackground>
        <ButtonText color="white">show more infos</ButtonText>
      </ButtonBackground>
    </>
  )
}
