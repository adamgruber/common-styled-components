/* Component Utils */
import map from 'lodash.map';
import compact from 'lodash.compact';
import includes from 'lodash.includes';
import isFinite from 'lodash.isfinite';

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
const mapPropToStyle = (propVal, propName, styleMap) => {
    const style = styleMap[propName];
    if (propVal && style) {
        const { name, values, units } = style;
        // name indicates an object
        if (name) {
            // has list of valid values
            if (values && values.length) {
                return includes(values, propVal) && `${name}: ${propVal};`;
            }
            // value is a number and map has default units
            if (units && isFinite(propVal)) {
                return `${name}: ${propVal}${units};`;
            }
        }
        return `${style}: ${propVal};`;
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
export const setStylesFromProps = (props, styleMap) => (
    compact(
        map(props, (val, key) => mapPropToStyle(val, key, styleMap))
    )
    .join('')
);
