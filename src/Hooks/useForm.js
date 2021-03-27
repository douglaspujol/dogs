import React from 'react';

const validation = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Preencha um e-mail válido',
  },
};
const useForm = type => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  function validate(values) {
    if (type === false) return true;
    if (values.length === 0) {
      setError('Preencha um valor.');
      return false;
    }
    if (validation[type] && !validation[type].regex.test(values)) {
      setError(validation[type].message);
      return false;
    }
    setError(null);
    return true;
  }
  function onChange({ target }) {
    if (error) {
      validate(target.value);
    }
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
    validate: () => validate(value),
    onBlur: () => validate(value),
    error,
  };
};
export default useForm;
