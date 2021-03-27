import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 1rem;
  label {
    display: block;
    line-height: 1;
    input {
      margin-top: 0.5rem;

      border: 1px solid #eee;
      background: #eee;
      display: block;
      width: 100%;
      font-size: 1rem;
      padding: 0.8rem;
      border-radius: 0.4rem;
      transition: 0.2s;
      &:focus,
      &:hover {
        outline: none;
        border-color: #fb1;
        background: #fff;
        box-shadow: 0 0 0 3px #fea;
      }
    }
  }
`;
