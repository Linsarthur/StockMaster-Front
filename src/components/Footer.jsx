import logoStock from "../assets/logoStock.svg";
import BlueCard from "./BlueCard";

const Footer = () => {
  return (
    <>
      <div className="flex justify-center bg-[#C8DDF1] pt-30 pb-30 relative">
        <div className="flex justify-between gap-20 px-40 ">
          <div className="">
            <img src={logoStock} alt="" />
            <p className="w-[200px] text-[#66768C]">
              Seu negócio, suas regras. Nossa plataforma completa oferece tudo
              que você precisa para gerenciar seu estoque,
            </p>
          </div>
          <div className="pt-2 flex flex-col gap-5">
            <a href="" className="font-extrabold text-[22px] text-[#0053AD]">
              O StockMaster
            </a>
            <a
              href=""
              className="text-[#1C274C] leading-[100%] hover:text-[#0053AD]"
            >
              Conheça o StockMaster
            </a>
            <a
              href=""
              className="text-[#1C274C] leading-[100%] hover:text-[#0053AD]"
            >
              Segurança e Privacidade
            </a>
            <a
              href=""
              className="text-[#1C274C] leading-[100%] hover:text-[#0053AD]"
            >
              Termos de uso
            </a>
          </div>

          <div className="pt-2 flex flex-col gap-5">
            <a href="" className="font-extrabold text-[22px] text-[#0053AD]">
              Suporte
            </a>
            <a
              href=""
              className="text-[#1C274C] leading-[100%] hover:text-[#0053AD]"
            >
              Central de ajuda
            </a>
            <a
              href=""
              className="text-[#1C274C] leading-[100%] hover:text-[#0053AD]"
            >
              Documentação da API
            </a>
          </div>
        </div>
        <div className="absolute bottom-80">
          <BlueCard />
        </div>

        <div className="absolute bottom-0 mt-20 text-[#66768C]">
          {" "}
          <p> © 2024-2025 StockMaster.Todos os direitos reservados.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
