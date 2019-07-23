import React from 'react'
import { Block, Button } from '../StyledComponents'

export default () => (
  <Block
    width='50vw'
    height='90vh'
    align='center'
    bgColor='gainsboro'
    pright='0'
  >
    <Block align='right' height='10vh' pright='0'>
      <Button>Save</Button>
      <Button mleft='.5vw'>Save new version</Button>
      <Button mleft='.5vw'>Submit for verification</Button>
    </Block>
    <Block bgColor='white' height='75vh'>
      Central Area
    </Block>
  </Block>
)
