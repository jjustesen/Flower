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
import Bud02 from '../../image/Bud/Bud02.png'
import form from '../../image/BackgroundForms/Form02.svg'

const SceneSize = styled.div`
  width: 100vw;
  height: 100vh;
`

function Scene02() {
  return (
    <>
      <SceneSize>
        <FlwFlex justifyContent="center">
          <Header />
        </FlwFlex>

        <FlwFlex position="absolute" left={40} bottom={200} flexDirection="column">
          <Card
            title="Blueberry Strain"
            label="Blueberry is ideal to help relieve users with troubling symptoms of stress, anxiety and PTSD."
          />
          <Button />
        </FlwFlex>

        <FlwFlex justifyContent="center">
          <BudImage bud={Bud02} />
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
          <PageNumber label="02" />
        </FlwFlex>

        <FlwFlex position="absolute" left={-96} top={157}>
          <BigLetter label="blueberry" />
        </FlwFlex>

        <Background Background="#6B53FF" form={form} />
      </SceneSize>
    </>
  )
}

export default Scene02
