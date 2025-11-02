import { useState } from "react";
import logo from "../assets/logoStock.svg";
import Button from "./Button";

const NavBar = () => {
  const [logged, setLogged] = useState(false);

  return (
    <>
      <header className="flex justify-between px-20 py-3 items-center drop-shadow-lg/25 w-full bg-white ">
        <img src={logo} alt="" className="" />

        <div className="flex mr-15 font-semibold text-[#2D2D2D] gap-5 leading-6 tracking-[0.1px] *:hover:text-[#0053AD] *:hover:border-b-2 *:hover:cursor-pointer">
          <p>O sistema</p>
          <p>Funcionalidades</p>
          <p>Quem somos</p>
        </div>
        <Button
          text={!logged ? "Entrar" : "Logado"}
          backgroung="bg-[#0053AD]"
          textColor="text-white"
        />
      </header>
    </>
  );
};

export default NavBar;
