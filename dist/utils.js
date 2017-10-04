'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setStylesFromProps = undefined;

var _lodash = require('lodash.map');

var _lodash2 = _interopRequireDefault(_lodash);

var _lodash3 = require('lodash.compact');

var _lodash4 = _interopRequireDefault(_lodash3);

var _lodash5 = require('lodash.includes');

var _lodash6 = _interopRequireDefault(_lodash5);

var _lodash7 = require('lodash.isfinite');

var _lodash8 = _interopRequireDefault(_lodash7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Given a prop name and value, return a style declaration
 * based on provided styleMap
 *
 * @param {Any}    propVal  Component prop value
 * @param {string} propName Component prop name
 * @param {Object} styleMap Hash mapping prop names to style declarations
 *
 * @return {string} CSS style declaration
 */
/* Component Utils */
var mapPropToStyle = function mapPropToStyle(propVal, propName, styleMap) {
    var style = styleMap[propName];
    if (propVal && style) {
        var name = style.name,
            values = style.values,
            units = style.units;
        // name indicates an object

        if (name) {
            // has list of valid values
            if (values && values.length) {
                return (0, _lodash6.default)(values, propVal) && name + ': ' + propVal + ';';
            }
            // value is a number and map has default units
            if (units && (0, _lodash8.default)(propVal)) {
                return name + ': ' + propVal + units + ';';
            }
        }
        return style + ': ' + propVal + ';';
    }
};

/**
 * Generate styles from component props, using a style map
 *
 * @param {Object} props    React Component props
 * @param {Object} styleMap Hash mapping prop names to style declarations
 *
 * @return {string} CSS styles
 */
var setStylesFromProps = exports.setStylesFromProps = function setStylesFromProps(props, styleMap) {
    return (0, _lodash4.default)((0, _lodash2.default)(props, function (val, key) {
        return mapPropToStyle(val, key, styleMap);
    })).join('');
};