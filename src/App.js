import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Home from './pages/Home';

import UserContext from '../src/contexts/UserContext';

function App() {

    const [user, setUser] = useState(null);

    return (
      <div className="App">
            <UserContext.Provider value={{ user, setUser }}>
                <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/home" element={<Home />} />
                </Routes>
                </BrowserRouter>
            </UserContext.Provider>

      </div>
    );
  }
  export default App;