import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Block, Button } from '../StyledComponents'
import { addScreen } from '../../actions/screens'

const mapStateToProps = ({ screens }) => ({
  screens
})

const mapDispatchToProps = {
  addScreen
}

const LeftBar = ({ addScreen }) => (
  <Block width='25vw' height='90vh' pright='0'>
    <Block padding='0.3vh 5px'>Screens:</Block>
    <Block bgColor='#9E9E9E' padding='5px'>
      <Button onClick={() => addScreen('prueba')}>+ Add</Button>
    </Block>
  </Block>
)

LeftBar.propTypes = {
  addScreen: PropTypes.func.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeftBar)
