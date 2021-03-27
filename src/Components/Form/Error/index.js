import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function Error({ children }) {
  return <Container>{children}</Container>;
}
export default Error;

Error.propTypes = {
  children: PropTypes.string.isRequired,
};
