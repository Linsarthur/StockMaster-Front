import { createContext, useEffect, useState } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [logado, setLogado] = useState(false);
  const [usuario, setUsuario] = useState({});

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      setLogado(true);
      
    }
  }, [logado]);
  return (
    <>
      <LoginContext.Provider value={{ logado, setLogado }}>
        {children}
      </LoginContext.Provider>
    </>
  );
};
