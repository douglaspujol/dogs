import styled from 'styled-components';
import Usuario from '../../Assets/usuario.svg';

console.log(Usuario);
export const Container = styled.header`
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  z-index: 1;
  background: #fff;
  top: 0;
  .nav {
    height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    padding: 0.5rem 0;
  }
  .login {
    color: #333;
    display: flex;
    align-items: center;
    &::after {
      content: '';
      display: inline-block;
      width: 14px;
      height: 17px;
      background: url(${Usuario}) no-repeat center center;
      margin-left: 0.5rem;
      top: -1px;
    }
  }
`;
