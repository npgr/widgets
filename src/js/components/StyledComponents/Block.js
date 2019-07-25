import styled from 'styled-components'
import PropTypes from 'prop-types'

const Block = styled.div`
    ${({ width }) => width && `width: ${width};`}
    ${({ height }) => height && `height: ${height};`}
    ${({ flex }) => flex && 'display: flex;'}
    ${({ align }) => align && `text-align: ${align};`}
    ${({ bgColor }) => bgColor && `background-color: ${bgColor};`}
    padding: ${({ padding }) => padding || '2vh 2vw'};
    ${({ ptop }) => ptop && `padding-top: ${ptop};`}
    ${({ pright }) => pright && `padding-right: ${pright};`}
`

Block.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  flex: PropTypes.bool,
  align: PropTypes.string,
  bgColor: PropTypes.string,
  padding: PropTypes.string,
  ptop: PropTypes.string,
  pright: PropTypes.string
}

export default Block
