import { useState } from "react";
import "./App.css";
import  { LoginContext, LoginProvider } from "./context/loginContext";
import Paths from "./routes/Paths";

function App() {
 
  return (
    <>
      <LoginProvider>
        <Paths />
      </LoginProvider>
    </>
  );
}

export default App;
