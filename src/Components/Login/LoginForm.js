import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Form/Input/index';
import Button from '../Form/Button/index';
import { Container } from './styles';
import useForm from '../../Hooks/useForm';
import { TOKEN_POST } from '../../api';

function LoginForm() {
  const userName = useForm('');
  const userPassword = useForm('');

  async function handleSubmit(event) {
    event.preventDefault();
    const testName = userName.validate();
    const testPassword = userPassword.validate();
    if (testName && testPassword) {
      const { url, options } = TOKEN_POST(userName.value, userPassword.value);
      const response = await fetch(url, options);
      const json = await response.json();
      window.localStorage.setItem('token', JSON.stringify(json));
    }
    // if (userName.validate() && userPassword.validate()) {
    //   const [url, options] = TOKEN_POST({
    //     username: userName.value,
    //     userpassword: userPassword.value,
    //   });
    //   const response = await fetch(url, options);
    //   const json = await response.json();
    //   console.log(json);
    // }
  }
  return (
    <Container>
      LoginForm
      <form onSubmit={handleSubmit}>
        <Input
          label="Usuário"
          id="usuario"
          placeholder="Usuário"
          name="usuario"
          {...userName}
        />
        <Input
          label="Senha"
          id="senha"
          placeholder="Senha"
          name="senha"
          type="password"
          {...userPassword}
        />
        <Button type="submit">Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </Container>
  );
}

export default LoginForm;
