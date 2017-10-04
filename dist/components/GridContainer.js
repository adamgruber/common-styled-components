'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    ', '\n    ', '\n    ', '\n'], ['\n    ', '\n    ', '\n    ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var styleMap = {
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
    }
};

var setGridDisplay = function setGridDisplay(props) {
    if (props.inline) {
        return 'display: inline-grid;';
    }
    if (props.subgrid) {
        return 'display: subgrid;';
    }
    return 'display: grid;';
};

var setGridHeight = function setGridHeight(_ref) {
    var fullHeight = _ref.fullHeight,
        height = _ref.height;

    if (fullHeight) {
        return 'height: 100%';
    } else if (height) {
        return 'height: ' + height + 'px;';
    }
};

var GridContainer = _styledComponents2.default.div(_templateObject, setGridDisplay, function (props) {
    return (0, _utils.setStylesFromProps)(props, styleMap);
}, setGridHeight);

exports.default = GridContainer;