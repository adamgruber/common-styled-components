import styled from 'styled-components';
import { setStylesFromProps } from '../utils';

const styleMap = {
    width: {
        name: 'width',
        units: 'px'
    },
    cols: 'grid-template-columns',
    rows: 'grid-template-rows',
    areas: 'grid-template-areas',
    colGap: 'grid-column-gap',
    rowGap: 'grid-row-gap',
    justify: {
        name: 'justify-items',
        values: ['start', 'end', 'center', 'stretch']
    },
    align: {
        name: 'align-items',
        values: ['start', 'end', 'center', 'stretch']
    },
    justifyContent: {
        name: 'justify-content',
        values: ['start', 'end', 'center', 'stretch', 'space-around', 'space-between', 'space-evenly']
    },
    alignContent: {
        name: 'align-content',
        values: ['start', 'end', 'center', 'stretch', 'space-around', 'space-between', 'space-evenly']
    },
    autoFlow: {
        name: 'grid-auto-flow',
        values: ['row', 'column', 'row dense', 'column dense']
    },
};

const setGridDisplay = (props) => {
    if (props.inline) {
      return 'display: inline-grid;';
    }
    if (props.subgrid) {
      return 'display: subgrid;';
    }
    return 'display: grid;';
};

const setGridHeight = ({ fullHeight, height }) => {
    if (fullHeight) {
        return 'height: 100%';
    } else if (height) {
        return `height: ${height}px;`;
    }
};

const GridContainer = styled.div`
    ${ setGridDisplay }
    ${ props => setStylesFromProps(props, styleMap) }
    ${ setGridHeight }
`;

export default GridContainer;
