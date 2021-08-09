import axios from "axios"
import React,  { useContext, useEffect, useState } from "react";
import { baseUrl, axiosConfig } from "../constants/urls"
import { goToProfile } from '../Router/coordinator'
import GlobalStateContext from "../../GlobalState/GlobalStateContext";

  export const getEditAddress = async () => {
    const { states, setters, requests } = useContext(GlobalStateContext);
    try {
        const response = await axios.get(`${baseUrl}/profile/address`, axiosConfig);
        setters.setEditAddress(response.data.address)
        
    } catch (err) {
        alert(err.response.data.message)
    };    
  }