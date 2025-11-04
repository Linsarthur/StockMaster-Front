import logoStock from "../assets/logoStock.svg";
import Button from "../components/Button";
import Forms from "../components/Forms";
const Login = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-[#DBEDFF] xl:h-full xl:w-full 2xl:h-screen 2xl:w-screen">
        <img src={logoStock} alt="" className="py-10  " />
        <div>
          <div className="bg-white  rounded-2xl drop-shadow-lg/25 border border-[#ABBED1]">
            <p className="my-[50px] text-center font-bold text-2xl leading-[100%] mx-20">
              Acesse sua conta
            </p>
            <Forms data1="E-mail" data2="Senha" />

            <div className="mb-6">
              <a href="" className="mx-8 text-[#0053AD]  font-semibold">
                Esqueci minha senha
              </a>
            </div>

            <Button
              text="Entrar"
              style="m-auto text-center text-white bg-[#0053AD] w-[75%]"
            />

            <div className="text-center mt-5 text-[#0053AD] font-semibold text-[18px] leadind-[100%] pb-5">
              <a href="">
                Ainda não tem cadastro?
                <br />
                Escreva-se agora
              </a>
            </div>
          </div>
        </div>
        <div className="text-[#66768C] text-center pt-10">
          <a href="">Fale conosco | </a>
          <a href="">Termos de uso | </a>
          <a href="">Segurança e privacidade</a>
        </div>
        <div className="text-center pt-4 text-[#66768C]">
          <p>
            © 2024-2025 StockMaster. <br />
            Todos os direitos reservados.
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
