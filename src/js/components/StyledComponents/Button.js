import styled from 'styled-components'
import PropTypes from 'prop-types'

const Button = styled.button`
  background-color: #2196f3;
  //on hover
  //on click
  color: white;
  border-radius: 2px;
  padding-left: 1vw;
  padding-right: 1vw;
  ${({ mleft }) => mleft && `margin-left: ${mleft};`}
`

Button.propTypes = {
  mleft: PropTypes.string
}

export default Button
