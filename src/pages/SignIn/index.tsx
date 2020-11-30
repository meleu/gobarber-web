import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import { Container, Content, Background } from './styles';

import logoImg from '../../assets/logo.svg';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="GoBarber" />
        <form>
          <h1>Faça seu logon</h1>
          <input placeholder="email" />
          <input type="password" placeholder="senha" />
          <button type="submit">Entrar</button>
          <a href="forgot">Esqueci minha senha</a>
        </form>

        <a href="signup">
          <FiLogIn />
          Criar Conta
        </a>
      </Content>

      <Background />
    </Container>
  );
};

export default SignIn;