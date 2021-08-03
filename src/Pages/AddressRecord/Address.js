import React from "react"
import AppBar from "../../Components/AppBar"
import {Fields, AddresContainer} from "./styles"

function Address() {
    return(
        <AddresContainer>
            <AppBar/>
            <p>Meu endereço</p>
            <Fields>
                <input/>
                <input/>
                <input/>
                <input/>
                <input/>
                <input/>
            </Fields>  
        </AddresContainer>
    )
}
export default Address;