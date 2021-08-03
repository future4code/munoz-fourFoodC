import React from "react";
import styled from "styled-components";

const BarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 22.5rem;
  height: 4rem;
  margin: 0 0 1.5rem;
  padding: 0 0 0.625rem;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
  border: 1px solid black;
`


function Bar() {
    return (
      <BarContainer>
        <button>voltar</button>
      </BarContainer>
    );
 }
  
  export default Bar;