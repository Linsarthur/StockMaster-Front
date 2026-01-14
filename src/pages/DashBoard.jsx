import NavBar from "../components/NavBar";
import avatarBatman from "../assets/avatar-batman.png";
import { useContext } from "react";
import { LoginContext } from "../context/loginContext";
import RegisterProduct from "../components/RegisterProduct";
const DashBoard = () => {
  const { usuario } = useContext(LoginContext);
  return (
    <>
      <NavBar />
      <main className="flex h-screen">
        {/* users data */}
        <aside className="w-[25%] h-full bg-[#DBEDFF]">
          <div className="flex mt-10 w-[80%] mx-8 pb-5 pl-5 gap-5 rounded-3xl bg-linear-to-t from-white to-white/5 ">
            <div className=" flex items-center">
              <img src={avatarBatman} alt="" />
            </div>
            <div className="text-[#1C274C]">
              <p className="font-bold text-[20px] leading-10 mb-2">
                {usuario.user_name}
              </p>
              <p className="font-light text-[16px] leading-[100%] mb-2">
                {usuario.user_email}
              </p>
              <p className="font-light text-[14px] leading-[100%]">
                <span className="font-semibold ">Perfil:</span>{" "}
                {usuario.user_role}
              </p>
            </div>
          </div>

          {/* registers pages */}
          <div className="pt-20 pl-8 flex items-center gap-1">
            <box-icon
              name="edit"
              flip="horizontal"
              color="#66768c"
              type="solid"
            ></box-icon>
            <h3 className="font-bold text-2xl leading-10">Cadastro</h3>
          </div>
          <div className="border-b border-[#AECFFD] shadow-[0_1px_1px_0_rgba(0,0,0,0.45)] mx-8"></div>
          <nav className="px-8 pt-10 *:block *:pb-[18px] font-light text-[20px] leading-[100%] text-[#0053AD]">
            <p>Usuários</p>
            <p>Produtos</p>
            <p>Categoria</p>
            <p>Lote</p>
          </nav>
          {/* Relatorios */}
          <div>
            <div className="pt-4 pl-8 flex items-center gap-1">
              <box-icon
                name="report"
                type="solid"
                flip="horizontal"
                color="#66768c"
              ></box-icon>
              <h3 className="font-bold text-2xl leading-10">Relatórios</h3>
            </div>
            <div className="border-b border-[#AECFFD] shadow-[0_1px_1px_0_rgba(0,0,0,0.45)] mx-8"></div>
            <nav className="px-8 pt-5 *:block *:pb-[18px] font-light text-[20px] leading-[100%] text-[#0053AD]">
              <p>Gerar Relatórios</p>
            </nav>
          </div>

          <div>
            <div className="pt-4 pl-8 flex items-center gap-1">
              <box-icon name="package" type="solid" color="#66768c"></box-icon>
              <h3 className="font-bold text-2xl leading-10">Estoque</h3>
            </div>
            <div className="border-b border-[#AECFFD] shadow-[0_1px_1px_0_rgba(0,0,0,0.45)] mx-8"></div>
            <nav className="px-8 pt-5 *:pb-[18px] font-light text-[20px] leading-[100%] text-[#0053AD]">
              <p>Entrada</p>
              <p>Saída</p>
            </nav>
          </div>
        </aside>

        <RegisterProduct />
      </main>
    </>
  );
};

export default DashBoard;
