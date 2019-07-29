import React from 'react'
import GlobalState from '../context/GlobalState'
import { Header } from '../components/Header'
import { LeftBar } from '../components/LeftBar'
import { RightBar } from '../components/RightBar'
import { CentralArea } from '../components/CentralArea'
import { Block } from '../components/StyledComponents'

export default () => {
  return (
    <GlobalState>
      <Block margin='0' padding='0'>
        <Header />
        <Block flex padding='0'>
          <LeftBar />
          <CentralArea />
          <RightBar />
        </Block>
      </Block>
    </GlobalState>
  )
}
