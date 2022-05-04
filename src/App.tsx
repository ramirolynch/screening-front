import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import { Main } from './Components/Main';
import { Routes, Route } from 'react-router-dom';
import { SignUp } from './Components/SignUp';
import { LogIn } from './Components/LogIn';
import { Nav } from './Components/Nav';
import { MatchReviews } from './Components/MatchReviews';
import { ScreeningContext } from './Context/ScreeningContext';
import { NoMatches } from './Components/NoMatches';
import { RequireAuth } from './Components/RequireAuth';
import { Logo } from './Components/Logo';

function App() {
  let { user_id } = useContext(ScreeningContext);


  return (
    <div className="App">
      <Logo></Logo>
      <Nav></Nav>
      <Routes>

        
        <Route path="signup" element={<SignUp></SignUp>}></Route>
        <Route path="login" element={<LogIn></LogIn>}></Route>
        <Route path='/' element={<RequireAuth><Main/></RequireAuth>}></Route>
        <Route path="matchreview/:id" element={<RequireAuth><MatchReviews/></RequireAuth>}></Route>
        <Route path="nomatch/:id" element={<RequireAuth><NoMatches/></RequireAuth>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
