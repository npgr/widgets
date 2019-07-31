import React from 'react'
import GlobalState from '@app/context/GlobalState'
import { Header } from '@app/components/Header'
import { LeftBar } from '@app/components/LeftBar'
import { RightBar } from '@app/components/RightBar'
import { CentralArea } from '@app/components/CentralArea'
import { Block } from '@app/components/StyledComponents'

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
