import Button from "../components/Button";
import Forms from "../components/Forms";
import NavBar from "../components/NavBar";

const RegisterPage = () => {
  return (
    <>
      <div className="xl:flex xl:flex-col xl:items-center xl:h-full xl:w-full bg-[#DBEDFF]">
        <NavBar />
        <div
          className="flex justify-center items-center flex-col
        "
        >
          <h2
            className="pt-[61px] pb-3 font-bold text-[28x] leading-10
          xl:font-bold xl:text-[38px] xl:leading-10 xl:
          
          "
          >
            Comece <span className="text-[#0053ad]">aqui!</span>
          </h2>
          <p
            className="text-[#66768C] pb-[51px] w-[80%] text-center text-[18px]
          xl:w-[40%]
          
          "
          >
            Você está a um passo de ter um aliado do crescimento do seu negócio.
          </p>
        </div>

        <div className="xl:bg-white xl:px-4 xl:pt-12 xl:border xl:pb-10 w-[30%] xl:drop-shadow-lg/25 xl:flex xl:flex-col xl:border-[#0053AD] rounded">
          <Forms data1="Nome" data2="Email" data3="Senha" />
          <Button
            text="Cadastrar"
            style="bg-[#0053AD] !block text-center text-white w-[90%] mx-auto"
          />
        </div>
        <div className="flex gap-1 justify-center pt-10 text-[#66768C]">
          <a href="">Fale conosco</a>
          <p> | </p>
          <a href="">Termos de uso</a>
        </div>
        <div className="text-center pt-4 text-[#66768C]">
          <p>
            © 2024-2025 <span className="text-[#0053AD]">StockMaster.</span>{" "}
            <br />
            Todos os direitos reservados.
          </p>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
