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

function App() {
  let { user_id } = useContext(ScreeningContext);


  return (
    <div className="App">

      <Nav></Nav>
      <Routes>

        <Route path='/' element={<Main></Main>}></Route>
        <Route path="signup" element={<SignUp></SignUp>}></Route>
        <Route path="login" element={<LogIn></LogIn>}></Route>
        <Route path="matchreview/:id" element={<MatchReviews></MatchReviews>}></Route>
        
      </Routes>
      
    </div>
  );
}

export default App;
