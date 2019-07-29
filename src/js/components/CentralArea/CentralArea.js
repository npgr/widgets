import React, { useContext } from 'react'
import WidgetsContext from '../../context/WidgetsContext'
import { Block, Button } from '../StyledComponents'

export default () => {
  const screens = useContext(WidgetsContext)
  return (
    <Block
      width='50vw'
      height='90vh'
      align='center'
      bgColor='gainsboro'
      pright='0'
    >
      <Block align='right' height='10vh' pright='0'>
        <Button onClick={() => screens.addScreen('prueba')}>Save</Button>
        <Button mleft='.5vw'>Save new version</Button>
        <Button mleft='.5vw'>Submit for verification</Button>
      </Block>
      <Block bgColor='white' height='75vh'>
        {`Screen Active: ID = ${screens.activeId}`}
      </Block>
    </Block>
  )
}
