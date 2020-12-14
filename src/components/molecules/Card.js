import styled from 'styled-components'
import { normalItalic, titleItalic } from '../../styles/Fonts/FontStyle'
import { FlwFlex } from '../elements/Flex/Flex'

const CardTitle = styled(titleItalic)`
  margin-bottom: 12px;
`
const CardSubtitle = styled(normalItalic)``

const CardBox = styled(FlwFlex)`
  width: 563px;
`

export const Card = ({ title = 'Title', label = 'Subtitle', ...props }) => {
  return (
    <>
      <CardBox flexDirection="column">
        <CardTitle color="white">{title}</CardTitle>
        <CardSubtitle color="white" opacity={0.7}>
          {label}
        </CardSubtitle>
      </CardBox>
    </>
  )
}
