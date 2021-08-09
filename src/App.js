<<<<<<< HEAD
import React from "react";
import Router from "./Router/Router";
import GlobalStateProvider from "./GlobalState/GlobalStateProvider";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from './Constants/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStateProvider>
        <Router />
      </GlobalStateProvider>
    </ThemeProvider>
=======
import React from 'react';
import Address from './Pages/AddressRecord/Address';
import Feed from './Pages/FeedPage/Feed';
import Login from './Pages/Login/Login';
import Search from './Pages/SearchResultsPage/Search';
import SignUp from './Pages/SignUp/SingUp';



function App() {
  return (
    <div>
      {/* <Login /> */}
      {/* <SignUp/> */}
      {/* <Feed/> */}
      {/* <Address /> */}
      <Search/>
    </div>
>>>>>>> a5fea28400229e62d58e5b010c5c9ae61d4b09a8
  );
}

export default App;
