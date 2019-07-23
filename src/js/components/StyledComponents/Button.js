import styled from 'styled-components'

export default styled.button`
  background-color: #2196f3;
  //on hover
  //on click
  color: white;
  border-radius: 2px;
  padding-left: 1vw;
  padding-right: 1vw;
  ${({ mleft }) => mleft && `margin-left: ${mleft};`}
`
