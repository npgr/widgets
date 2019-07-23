import React, { Fragment } from 'react'
import { Header } from '../components/Header'
import { LeftBar } from '../components/LeftBar'
import { RightBar } from '../components/RightBar'
import { CentralArea } from '../components/CentralArea'
import { Block } from '../components/StyledComponents'

export default () => {
  return (
    <Fragment>
      <Header />
      <Block flex padding='0'>
        <LeftBar />
        <CentralArea />
        <RightBar />
      </Block>
    </Fragment>
  )
}
