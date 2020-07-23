import React from 'react';
import PropTypes from 'prop-types';

/**
 * Wrapper around a text input
 */
export const TextField = ({ label = 'Foo', value = '', onChange }) => {
  const handleChange = (event) => onChange?.(event.target.value);
  return (
    <React.Fragment>
      <label>{label}</label>
      <input type="text" value={value} onChange={handleChange} />
    </React.Fragment>
  );
};

TextField.propTypes = {
  /**
   * Text to use as a label
   */
  label: PropTypes.string,
  /**
   * Value controlled externally to component
   */
  value: PropTypes.string,
  /**
   * Change handler
   */
  onChange: PropTypes.func,
};

TextField.defaultProps = {};
