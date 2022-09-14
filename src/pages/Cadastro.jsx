import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
    <div className="">
      <form>
        <input type="text" onChange={e => setName(e.target.value)} placeholder="Name" />
        <br />
        <input type="text" onChange={e => setEmail(e.target.value)} placeholder="Email" />
        <br />
        <input
          type="password"
          onChange={e => setPassword(e.target.value)}
          placeholder="Senha"
        />
        <br />
        <button type="submit" onClick={handleSubmit}>
          Cadastrar
        </button>
        <p>
          <Link to="/" style={{ fontSize: 14, color: 'black' }}>
            Já tem uma conta? Entre agora!
          </Link>
        </p>
      </form>
    </div>
  );
}
export default Cadastro;