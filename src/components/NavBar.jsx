import { useState } from "react";
import logoCompact from "../assets/logoStockCompact.png";
import Button from "./Button";

const NavBar = () => {
  const [logged, setLogged] = useState(false);

  return (
    <>
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
        <Button
          text={!logged ? "Entrar" : "Logado"}
          style="bg-[#0053AD] text-white"
        />
      </header>
    </>
  );
};

export default NavBar;
