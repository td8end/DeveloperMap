import React, { createContext } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import styled from "styled-components"
import { useState, useEffect } from 'react';
import User from './Components/User/User';
import Login from './Components/Login/Login';
import Admin from './Components/Admin/Admin';



// This is the styling section 
const Container = styled.div`
  width: 100vw;
  height: 5vw;
  margin: 0;
  background-color: black;
`

const HeaderContainer = styled(Container)``

const HeaderTitle = styled.h1`
  text-align: center;
  color: white;
  padding-top: 1%;
  margin: 0;
  border-top: 2px solid blue;
`

// This is the styling section 
// Below is the Fetch and variable setting



function App() {
  const [signIn, setSignIn] = useState(false);

  return (
    <>
    {/* first row of header */}
      <HeaderContainer>
        <HeaderTitle>DevMap</HeaderTitle>
      </HeaderContainer>
{/* 
      <FormContainer>
        <h1>Login In</h1>
      </FormContainer> */}

      {/* this is the breadcromb bar */}
      <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/user" element={<User/>}/>
          <Route path="/admin" element={<Admin/>}/>

      </Routes>
    </>
  );
}

export default App;