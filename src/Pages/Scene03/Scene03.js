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
import Bud03 from '../../image/Bud/Bud03.png'
import form from '../../image/BackgroundForms/Form03.svg'

const SceneSize = styled.div`
  width: 100vw;
  height: 100vh;
`

function Scene03() {
  return (
    <>
      <SceneSize>
        <FlwFlex justifyContent="center">
          <Header />
        </FlwFlex>

        <FlwFlex position="absolute" left={-96} top={157}>
          <BigLetter label="Ak-47" />
        </FlwFlex>

        <FlwFlex position="absolute" left={40} bottom={200} flexDirection="column">
          <Card
            title="AK-47 Strain"
            label="AK47 has a sour earthy scent, and leaves you in relaxed state on consumption. AK47 gives you a long lasting celebral buzz."
          />
          <Button />
        </FlwFlex>

        <FlwFlex justifyContent="center">
          <BudImage bud={Bud03} />
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
          <PageNumber label="03" />
        </FlwFlex>

        <Background Background="#FF5353" form={form} />
      </SceneSize>
    </>
  )
}

export default Scene03
