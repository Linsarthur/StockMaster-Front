import { NavLink, useNavigate } from "react-router";
import logoStock from "../assets/logoStock.svg";
import Button from "../components/Button";

import {  useContext, useRef,  } from "react";
import { login } from "../services/apiService.js";
import { LoginContext } from "../context/loginContext.jsx";

const Login = () => {
  const { setLogado } = useContext(LoginContext);
  const navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();

  async function onLogin(event) {
    event.preventDefault();
    let dados = {
      user_email: emailRef.current.value,
      user_password: passwordRef.current.value,
    };
    const request = await login(dados)

    if (request.token) {
      console.log(request)
      sessionStorage.setItem("token", request.token);
      sessionStorage.setItem("user", JSON.stringify(request.user));
      setLogado(true);
      navigate("/");
      return;
    }

    alert(request.message);
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-[#DBEDFF] xl:h-full xl:w-full 2xl:h-screen 2xl:w-screen">
        <img src={logoStock} alt="" className="py-10  " />
        <div>
          <div className="bg-white  rounded-2xl drop-shadow-lg/25 border border-[#ABBED1]">
            <p className="my-[50px] text-center font-bold text-2xl leading-[100%] mx-20">
              Acesse sua conta
            </p>
            <div>
              <form
                className="flex flex-col justify-center gap-4 mb-4"
                onSubmit={onLogin}
              >
                <label
                  htmlFor="email"
                  className="text-[#66768C] text-[18px] mx-8 font-semibold"
                >
                  Email
                </label>
                <input
                  ref={emailRef}
                  type="text"
                  name="email"
                  id="email"
                  className="bg-white border rounded-xl border-[#999999] px-5 py-1 mx-auto w-[90%] text-[18px] outline-[#999999]"
                  placeholder="Insira seu e-mail"
                />
                <label
                  htmlFor="password"
                  className="text-[#66768C] text-[18px] mx-8 font-semibold"
                >
                  Senha
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="bg-white border rounded-xl border-[#999999] px-5 py-1 mx-auto w-[90%] text-[18px] outline-[#999999]  "
                  placeholder="Insira sua password"
                  ref={passwordRef}
                />
                <div>
                  <a href="" className="mx-8 text-[#0053AD]  font-semibold">
                    Esqueci minha senha
                  </a>
                </div>

                <button type="submit">
                  <Button
                    text="Entrar"
                    style="m-auto text-center text-white bg-[#0053AD] w-[75%]"
                  />
                </button>
              </form>
            </div>

            <div className="text-center mt-5 text-[#0053AD] font-semibold text-[18px] leadind-[100%] pb-5">
              <NavLink to="/cadastro">
                Ainda não tem cadastro?
                <br />
                Escreva-se agora
              </NavLink>
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
