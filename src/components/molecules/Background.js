import styled from 'styled-components'
import React from 'react'
import { FlwBox } from '../elements/Box'

const Blur = styled(FlwBox)`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  z-index: -1;

  width: 100vw;
  height: 100vh;

  background: rgba(255, 255, 255, 0.01);
  backdrop-filter: blur(100px);

  display: flex;
  justify-content: center;
`

const BackgroundColor = styled(FlwBox)`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  z-index: -3;

  width: 100vw;
  height: 100vh;
`

const BackgroundForm = styled(FlwBox)`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  z-index: -2;

  width: 100vw;
  height: 100vh;
  background-size: cover;
`

export const Background = ({ form, Background = 'blue', ...props }) => {
  return (
    <div>
      <Blur />
      <BackgroundForm style={{ backgroundImage: `url(${form})` }} />
      <BackgroundColor bg={Background} />
    </div>
  )
}
