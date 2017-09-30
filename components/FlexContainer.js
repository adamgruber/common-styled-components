import styled from 'styled-components';
import { setStylesFromProps } from '../utils';

const styleMap = {
    width: {
        name: 'width',
        units: 'px'
    },
    basis: {
      name: 'flex-basis',
      units: '%'
    },
    direction: {
        name: 'flex-direction',
        values: ['row', 'row-reverse', 'column', 'column-reverse']
    },
    align: {
        name: 'align-items',
        values: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch']
    },
    justify: {
        name: 'justify-content',
        values: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around']
    },
    alignContent: {
        name: 'align-content',
        values: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch']
    },
    wrap: {
        name: 'flex-wrap',
        values: ['nowrap', 'wrap', 'wrap-reverse']
    },
};

const setFlexDisplay = (props) => {
    if (props.inline) {
      return 'display: inline-flex;';
    }
    return 'display: flex;';
};

const setHeight = ({ fullHeight, height }) => {
  let elHeight = height;
    if (fullHeight) {
      elHeight = '100%';
    } else if (typeof height === 'number') {
      elHeight = `${height}px;`;
    }
    return `height: ${elHeight};`;
};

const FlexContainer = styled.div`
    ${ setFlexDisplay }
    ${ setHeight }
    ${ props => setStylesFromProps(props, styleMap) }
`;

export default FlexContainer;
