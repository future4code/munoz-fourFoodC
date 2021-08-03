import React from "react"
import Logo from "../../Images/logo-future-eats-invert.svg"
import {LoginContainer, ImgLogo, Fields} from "./styles"


function Login() {
    return (
      <LoginContainer>
        <ImgLogo src={Logo}/>
        <p>Entrar</p>
        <Fields>
          <input></input>
          <input></input>
        </Fields>
        <button>Entrar</button>
        <p>Não possui cadastro? Clique aqui.</p>
      </LoginContainer>
    );
  }
  
  export default Login;