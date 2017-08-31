import styled from 'styled-components';
import { setStylesFromProps } from '../utils';

const styleMap = {
    colStart: 'grid-column-start',
    colEnd: 'grid-column-end',
    rowStart: 'grid-row-start',
    rowEnd: 'grid-row-end',
    col: 'grid-column',
    row: 'grid-row',
    area: 'grid-area',
    justify: { name: 'justify-self', values: ['start', 'end', 'center', 'stretch'] },
    align: { name: 'align-self', values: ['start', 'end', 'center', 'stretch'] },
};

const GridItem = styled.div`
    ${ props => setStylesFromProps(props, styleMap) }
`;

export default GridItem;
