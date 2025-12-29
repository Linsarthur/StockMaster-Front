import { NavLink } from "react-router";
import logoCompact from "../assets/logoStockCompact.png";
import Button from "./Button";
import { useContext } from "react";
import { LoginContext } from "../context/loginContext.jsx";

const NavBar = () => {
  const { logado } = useContext(LoginContext);
  const { usuario } = useContext(LoginContext);
  const logout = () => {
    sessionStorage.clear();
    window.location.reload();
  };

  return (
    <>
      {logado ? (
        <header
          className="
      px-10
      flex justify-between xl:px-20 py-3 items-center drop-shadow-lg/25 w-full bg-white "
        >
          <img src={logoCompact} className="" />

          <div className="flex gap-3">
            <box-icon name="user" color="#1a2371" type="solid"></box-icon>
            <p>{usuario?.user_name}</p>
            <NavLink to="/">
              <box-icon
                name="exit"
                type="solid"
                color="#1a2371"
                onclick={logout}
              ></box-icon>
            </NavLink>
          </div>
        </header>
      ) : (
        <header
          className="
      px-10
      flex justify-between xl:px-20 py-3 items-center drop-shadow-lg/25 w-full bg-white "
        >
          <img src={logoCompact} className="" />

          <div
            className="
        hidden
        xl:flex xl:mr-15 font-semibold text-[#2D2D2D] xl:gap-5 xl:leading-6 xl:tracking-[0.1px] xl:*:hover:text-[#0053AD] xl:*:hover:border-b-2 xl: *:hover:cursor-pointer"
          >
            <p>O sistema</p>
            <p>Funcionalidades</p>
            <p>Quem somos</p>
          </div>

          <NavLink to="/login">
            <Button text="Entrar" style="bg-[#0053AD] text-white" />
          </NavLink>
        </header>
      )}
    </>
  );
};

export default NavBar;
