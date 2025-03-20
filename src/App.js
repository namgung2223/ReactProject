import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import LoginSuccess from './success';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/loginSuccess' element={<LoginSuccess />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;