import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ScreeningList } from './Components/ScreeningList';
import { Main } from './Components/Main';
import { Routes, Route } from 'react-router-dom';
import { SignUp } from './Components/SignUp';

function App() {
  return (
    <div className="App">
      <Routes>

        <Route path='/' element={<Main></Main>}></Route>
        <Route path="signup" element={<SignUp></SignUp>}></Route>
        
      </Routes>
      
    </div>
  );
}

export default App;
