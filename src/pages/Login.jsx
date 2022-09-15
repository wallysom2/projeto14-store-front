import axios from 'axios';
import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from "styled-components";

import UserContext from '../contexts/UserContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setUser } = useContext(UserContext);
  const navigator = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const body = { email, password };
    try {
      const { data } = await axios.post('http://localhost:5000/signIn', body);

      setUser(data);
      navigator('/loja');
    } catch (error) {
      console.error('Erro ao fazer o login', error);
    }
  }

  return (
    <StyledContainer >
      <Title>
        Login
      </Title>
      <Form>
        <Input type="text" onChange={e => setEmail(e.target.value)} placeholder="Email" />
        <br />
        <Input
          type="password"
          onChange={e => setPassword(e.target.value)}
          placeholder="Senha"
        />
        <br />
        <Button type="submit" onClick={handleSubmit}>
          Entrar
        </Button>
        <p>
          <Link to="/cadastro" style={{ fontSize: 14, color: 'black' }}>
            Primeira vez? Cadastrate-se!
          </Link>
        </p>
      </Form>
    </StyledContainer>
  );
}
export default Login;

const StyledContainer = styled.section`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Title = styled.p `
font: 35px Bebas Neue;
padding-bottom: 30px;
`
const Input = styled.input `
width: 327px;
height: 46px;
margin: 7px;
::placeholder {
  font-size: 15px;
  padding-left: 10px;
}
`
const Form = styled.form `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Button = styled.button `
	box-shadow: 0px 1px 0px 0px #fff6af;
	background:linear-gradient(to bottom, #ffec64 5%, #ffab23 100%);
	background-color:#ffec64;
	border-radius:6px;
	border:1px solid #ffaa22;
	display:inline-block;
	cursor:pointer;
	color:#333333;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:6px 24px;
	text-decoration:none;
	text-shadow:0px 1px 0px #ffee66;
  width: 230px;
  height: 40px;
  margin-top:40px;
  margin-bottom: 20px;
  &:hover {
	background:linear-gradient(to bottom, #ffab23 5%, #ffec64 100%);
	background-color:#ffab23;
}
&:active {
	position:relative;
	top:1px;
}
`