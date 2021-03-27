import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';
import Error from '../Error/index';

function Input({
  id,
  label,
  placeholder,
  value,
  onChange,
  error,
  onBlur,
  type,
}) {
  return (
    <Container>
      <label htmlFor={id}>
        {label}
        <input
          type={type}
          name={id}
          placeholder={placeholder}
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      </label>
      {error && <Error>{error}</Error>}
    </Container>
  );
}

Input.propTypes = {
  error: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};
Input.defaultProps = {
  type: 'text',
  value: null,
  label: null,
  error: null,
};

export default Input;
