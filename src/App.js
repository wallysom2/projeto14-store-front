import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import GlobalStyle from './reset/GlobalStyles'

import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Loja from './components/Loja/Loja'
import Carrinho from './components/Carrinho';

import UserContext from '../src/contexts/UserContext';

function App() {

    const [user, setUser] = useState(null);

    return (
      <div className="App">
            <UserContext.Provider value={{ user, setUser }}>
            <GlobalStyle/>
                <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} /> 
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/loja" element={<Loja/>}></Route>
                    <Route path="/carrinho" element={<Carrinho/>}></Route>
                </Routes>
                </BrowserRouter>
            </UserContext.Provider>

      </div>
    );
  }
  export default App;