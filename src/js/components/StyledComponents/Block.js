import styled from 'styled-components'

export default styled.div`
    ${({ width }) => width && `width: ${width};`}
    ${({ height }) => height && `height: ${height};`}
    ${({ flex }) => flex && 'display: flex;'}
    ${({ align }) => align && `text-align: ${align};`}
    ${({ bgColor }) => bgColor && `background-color: ${bgColor};`}
    padding: ${({ padding }) => padding || '2vh 2vw'};
    ${({ ptop }) => ptop && `padding-top: ${ptop};`}
    ${({ pright }) => pright && `padding-right: ${pright};`}
`
