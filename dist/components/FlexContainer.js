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
    }
};

var setFlexDisplay = function setFlexDisplay(props) {
    if (props.inline) {
        return 'display: inline-flex;';
    }
    return 'display: flex;';
};

var setHeight = function setHeight(_ref) {
    var fullHeight = _ref.fullHeight,
        height = _ref.height;

    var elHeight = height;
    if (fullHeight) {
        elHeight = '100%';
    } else if (typeof height === 'number') {
        elHeight = height + 'px;';
    }
    return 'height: ' + elHeight + ';';
};

var FlexContainer = _styledComponents2.default.div(_templateObject, setFlexDisplay, setHeight, function (props) {
    return (0, _utils.setStylesFromProps)(props, styleMap);
});

exports.default = FlexContainer;