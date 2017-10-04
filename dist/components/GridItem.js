'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    ', '\n'], ['\n    ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var styleMap = {
    colStart: 'grid-column-start',
    colEnd: 'grid-column-end',
    rowStart: 'grid-row-start',
    rowEnd: 'grid-row-end',
    col: 'grid-column',
    row: 'grid-row',
    area: 'grid-area',
    justify: { name: 'justify-self', values: ['start', 'end', 'center', 'stretch'] },
    align: { name: 'align-self', values: ['start', 'end', 'center', 'stretch'] }
};

var GridItem = _styledComponents2.default.div(_templateObject, function (props) {
    return (0, _utils.setStylesFromProps)(props, styleMap);
});

exports.default = GridItem;