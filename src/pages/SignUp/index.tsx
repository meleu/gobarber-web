import React from 'react';
import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="GoBarber" />
        <form>
          <h1>Faça seu cadastro</h1>
          <Input name="name" icon={FiUser} placeholder="nome" />

          <Input name="email" icon={FiMail} placeholder="email" />

          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="senha"
          />

          <Button type="submit">Cadastrar</Button>
        </form>

        <a href="signup">
          <FiArrowLeft />
          Voltar para logon
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
