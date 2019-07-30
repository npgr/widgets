import React, { useContext } from 'react'
import WidgetsContext from '../../context/WidgetsContext'
import { Block, Button } from '../StyledComponents'

export default () => {
  const {
    screen: { screens },
    addScreen,
    removeScreen
  } = useContext(WidgetsContext)

  return (
    <Block width='25vw' height='90vh' pright='0'>
      <Block padding='0.3vh 5px'>Screens:</Block>
      <Block bgColor='#9E9E9E' padding='5px'>
        <Button onClick={() => addScreen('prueba')}>+ Add</Button>
      </Block>
      <Block mtop='5vh'>
        {screens.map(({ id, name }, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <Block key={`${name}_${i}`} flex spaceBetween padding='2px'>
            <Block flex padding='0'>{`(${id}) ${name}`}</Block>
            <Button onClick={() => removeScreen(id)}>Delete</Button>
          </Block>
        ))}
      </Block>
    </Block>
  )
}
