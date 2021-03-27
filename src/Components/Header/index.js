import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import { ReactComponent as Dogs } from '../../Assets/dogs.svg';

function Header() {
  return (
    <Container>
      <nav className="nav container">
        <Link className="logo" to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        <Link className="login" to="/login">
          Login / Criar
        </Link>
      </nav>
    </Container>
  );
}

export default Header;
