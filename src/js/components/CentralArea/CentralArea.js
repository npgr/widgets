import React, { useContext } from 'react'
import WidgetsContext from '@app/context/WidgetsContext'
import { Block, Button } from '@app/components/StyledComponents'

export default () => {
  const { screen } = useContext(WidgetsContext)

  return (
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
        {'Screen Active: ID = '}
        <span id='activeId'>{screen.activeId}</span>
      </Block>
    </Block>
  )
}
