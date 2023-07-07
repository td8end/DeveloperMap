import React, { createContext } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import styled from "styled-components"
import { useState, useEffect } from 'react';
import User from '../User/User';


// This is the styling section 
const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    margin: auto;
    margin-top: 20vw;
    background-color: grey;
    width: 40vw;
    height: 40vw;
`

// This is the styling section 
// Below is the Fetch and variable setting


function Login() {
  const [signIn, setSignIn] = useState(false);

  return (
    <>

      <FormContainer>
        <h1>Login In</h1>
      </FormContainer>

      {/* this is the breadcromb bar */}
      {/* <Routes>
          <Route path="/user" element={<User/>}/>
          {/* <Route path="/admin" element={<Admin />} /> */}
      {/* </Routes> */} */
    </>
  );
}

export default Login;