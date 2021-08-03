import React from "react";
import AppBar from "../../Components/AppBar";
import Logo from "../../Images/logo-future-eats-invert.svg"
import { Fields, SignUpContainer } from "./styles";

function SignUp() {
    return (
      <SignUpContainer>
          <AppBar />
          <img src={Logo}/>
          <p>Cadastrar</p>
          <Fields>
            <input></input>
            <input></input>
            <input></input>
            <input></input>
            <input></input>
          </Fields>
          <button>Criar</button>
          
          
      </SignUpContainer>
    );
  }
  
export default SignUp;