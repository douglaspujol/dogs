/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React from 'react';

import { Container } from './styles';

function Button({ children, props }) {
  return (
    <Container>
      <button {...props}>{children}</button>
    </Container>
  );
}

export default Button;
