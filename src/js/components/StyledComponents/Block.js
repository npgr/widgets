import styled from 'styled-components'
import PropTypes from 'prop-types'

const Block = styled.div`
    ${({ align }) => align && `text-align: ${align};`}
    ${({ bgColor }) => bgColor && `background-color: ${bgColor};`}
    ${({ flex }) => flex && 'display: flex;'}
    ${({ height }) => height && `height: ${height};`}
    ${({ margin }) => margin && `height: ${margin};`}
    ${({ pright }) => pright && `padding-right: ${pright};`}
    ${({ ptop }) => ptop && `padding-top: ${ptop};`}
    ${({ spaceBetween }) => spaceBetween && 'justify-content: space-between;'}
    ${({ width }) => width && `width: ${width};`}
    padding: ${({ padding }) => padding || '2vh 2vw'};
    ${({ selected }) => selected && 'background-color: gainsboro'}
`

Block.propTypes = {
  align: PropTypes.string,
  bgColor: PropTypes.string,
  flex: PropTypes.bool,
  height: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  pright: PropTypes.string,
  ptop: PropTypes.string,
  spaceBetween: PropTypes.bool,
  width: PropTypes.string,
  selected: PropTypes.bool
}

export default Block
