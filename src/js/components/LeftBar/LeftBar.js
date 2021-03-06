import React, { useContext } from 'react'
import WidgetsContext from '@app/context/WidgetsContext'
import { Block, Button } from '@app/components/StyledComponents'

export default () => {
  const {
    screen: { activeId, screens },
    addScreen,
    removeScreen,
    selectScreen
  } = useContext(WidgetsContext)

  return (
    <Block width='25vw' height='90vh' pright='0'>
      <Block padding='0.3vh 5px'>Screens:</Block>
      <Block bgColor='#9E9E9E' padding='5px'>
        <Button id='addButton' onClick={() => addScreen('prueba')}>
          + Add
        </Button>
      </Block>
      <Block mtop='5vh'>
        {screens.map(({ id, name }) => (
          <Block
            key={id}
            flex
            spaceBetween
            padding='2px'
            selected={id === activeId}
          >
            <Block
              id='newScreen'
              key={id}
              flex
              spaceBetween
              padding='2px'
              onClick={() => selectScreen(id)}
            >
              {`(${id}) ${name}`}
            </Block>
            <Button id='deleteButton' onClick={() => removeScreen(id)}>
              Delete
            </Button>
          </Block>
        ))}
      </Block>
    </Block>
  )
}
