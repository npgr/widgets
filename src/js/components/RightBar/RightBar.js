import React from 'react'
import { useDrag } from 'react-dnd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChartPie,
  faChartLine,
  faChartBar,
  faChartArea
} from '@fortawesome/free-solid-svg-icons'
import { Block } from '@app/components/StyledComponents'

export default () => (
  <Block width='25vw' height='90vh' bgColor='gainsboro' ptop='4vh'>
    <Block bgColor='white' height='83vh'>
      Charts:
      <Block>
        <FontAwesomeIcon icon={faChartPie} size='3x' />
      </Block>
      <Block>
        <FontAwesomeIcon icon={faChartLine} size='3x' />
      </Block>
      <Block>
        <FontAwesomeIcon icon={faChartBar} size='3x' />
      </Block>
      <Block>
        <FontAwesomeIcon icon={faChartArea} size='3x' />
      </Block>
    </Block>
  </Block>
)
