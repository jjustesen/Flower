import { FlwBox } from '../elements/Box'
import { FlwFlex } from '../elements/Flex/Flex'

const { default: styled } = require('styled-components')
const { titleItalic } = require('../../styles/Fonts/FontStyle')

const MenuText = styled(titleItalic)``

export const Menu = ({ label = 'Type' }) => {
  return (
    <>
      <FlwFlex flexDirection="column" alignItems="flex-end" mr={32}>
        <MenuText color="white">Type</MenuText>
        <FlwBox mt={18} width={160} height={1} bg="white"></FlwBox>
        <MenuText mt={18} color="white">
          Genetics
        </MenuText>
        <FlwBox mt={18} width={160} height={1} bg="white"></FlwBox>
        <MenuText mt={18} color="white">
          Flavor
        </MenuText>
        <FlwBox mt={18} width={160} height={1} bg="white"></FlwBox>
      </FlwFlex>
    </>
  )
}
