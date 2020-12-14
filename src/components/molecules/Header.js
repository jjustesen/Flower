import styled from 'styled-components'
import React from 'react'
import { normal } from '../../styles/Fonts/FontStyle'
import { FlwBox } from '../elements/Box'
import { Logo } from './Logo'
import { FlwFlex } from '../elements/Flex/Flex'

const HeaderText = styled(normal)`
  color: #ffffff;
  margin: 0px 72px;
`

const HeaderFlex = styled(FlwBox)`
  display: flex;
  flex-direction: row;
  padding: 0px;
  padding-top: 40px;
  justify-content: center;
`

export const Header = () => {
  return (
    <>
      <HeaderFlex>
        <HeaderText>home</HeaderText>
        <HeaderText>shop</HeaderText>
        <HeaderText>reviews</HeaderText>
        <HeaderText>tracking</HeaderText>
      </HeaderFlex>

      <FlwFlex position="absolute" right="50px" top="20px">
        <Logo />
      </FlwFlex>
    </>
  )
}
