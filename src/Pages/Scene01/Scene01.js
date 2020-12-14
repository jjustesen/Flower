import { Header } from '../../components/molecules/Header'
import { Background } from '../../components/molecules/Background'
import { Card } from '../../components/molecules/Card'
import { Button } from '../../components/molecules/Button'
import { PageNumber } from '../../components/molecules/PageNumber'
import { Menu } from '../../components/molecules/Menu'
import { BigLetter } from '../../components/molecules/BigLetter'
import { ShowInfo } from '../../components/molecules/ShowInfo'
import { BudImage } from '../../components/molecules/BudImage'
import { FlwFlex } from '../../components/elements/Flex/Flex'
import { FlwBox } from '../../components/elements/Box'
import styled from 'styled-components'
import Bud01 from '../../image/Bud/Bud01.png'
import form from '../../image/BackgroundForms/Form01.svg'

const SceneSize = styled.div`
  width: 100vw;
  height: 100vh;
`

function Scene01() {
  return (
    <>
      <SceneSize>
        <FlwFlex justifyContent="center">
          <Header />
        </FlwFlex>

        <FlwFlex position="absolute" left={40} bottom={200} flexDirection="column">
          <Card
            title="Acapulco Gold Strain"
            label="This is the best strain used to treat anxiety, depression, and chronic pain"
          />
          <Button />
        </FlwFlex>

        <FlwFlex justifyContent="center">
          <BudImage bud={Bud01} />
        </FlwFlex>

        <FlwBox position="absolute" width="100vw" bottom={0}>
          <FlwFlex justifyContent="center">
            <ShowInfo />
          </FlwFlex>
        </FlwBox>

        <FlwBox position="absolute" height="100vh" right={0} top={0}>
          <FlwFlex height="100vh" flexDirection="column" justifyContent="center">
            <Menu />
          </FlwFlex>
        </FlwBox>

        <FlwFlex overflow="hidden" position="absolute" bottom={0} right={0}>
          <PageNumber />
        </FlwFlex>

        <FlwFlex position="absolute" left={-96} top={157}>
          <BigLetter />
        </FlwFlex>

        <Background Background="#74EBD5" form={form} />
      </SceneSize>
    </>
  )
}

export default Scene01
