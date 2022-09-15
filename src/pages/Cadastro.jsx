import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from "styled-components";


function Cadastro() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigator = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const body = { name, email, password };
    try {
      await axios.post('http://localhost:5000/signUp', body);

      navigator('/');
    } catch (error) {
      console.error('Erro ao cadastrar o usuario');
    }
  }

  return (
    <StyledContainer>
        <Title>
        Cadastre-se
      </Title>
      <Form>
        <Input type="text" onChange={e => setName(e.target.value)} placeholder="Name" />
        <br />
        <Input type="text" onChange={e => setEmail(e.target.value)} placeholder="Email" />
        <br />
        <Input
          type="password"
          onChange={e => setPassword(e.target.value)}
          placeholder="Senha"
        />
        <br />
        <Button type="submit" onClick={handleSubmit}>
          Cadastrar
        </Button>
        <p>
          <Link to="/" style={{ fontSize: 14, color: 'black' }}>
            Já tem uma conta? Entre agora!
          </Link>
        </p>
      </Form>
    </StyledContainer>
  );
}
export default Cadastro;

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