import NavBar from "../components/NavBar";
import avatarBatman from "../assets/avatar-batman.png"
import { useContext } from "react";
import { LoginContext } from "../context/loginContext";
const DashBoard = () => {
  const {usuario} = useContext(LoginContext)
  return (
    <>
      <NavBar />
      <div className="w-[25%] h-screen bg-[#DBEDFF] flex">
        <div className="flex h-fit w-[80%] mx-8 mt-[60px]  pb-5 pl-5 gap-5 rounded bg-linear-to-t from-white to-white/5 ">
          <div className=" flex items-center">
            <img src={avatarBatman} alt="" />
          </div>

          <div className="text-[#1C274C]">
            <p className="font-bold text-[20px] leading-10 mb-2">{usuario.user_name}</p>
            <p className="font-light text-[16px] leading-[100%] mb-2">{usuario.user_email}</p>
            <p className="font-light text-[14px] leading-[100%]"><span className="font-semibold ">Perfil:</span> tipo</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
