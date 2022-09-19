import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import GlobalStyle from './reset/GlobalStyles'

import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Loja from './components/Loja/Loja'
import Carrinho from './components/Carrinho';
import Checkout from './components/Checkout';

import UserContext from '../src/contexts/UserContext';

function App() {

    const [user, setUser] = useState(null);
    const [carrinho,setCarrinho]=useState([])


    return (
      <div className="App">
            <UserContext.Provider value={{ user, setUser,carrinho,setCarrinho }}>
            <GlobalStyle/>
                <BrowserRouter>
                <Routes>
                     <Route path="/" element={<Login />} /> 
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/loja" element={<Loja/>}></Route>
                    <Route path="/carrinho" element={<Carrinho/>}></Route>
                    <Route path="/checkout" element={<Checkout/>}></Route>
                </Routes>
                </BrowserRouter>
            </UserContext.Provider>

      </div>
    );
  }
  export default App;