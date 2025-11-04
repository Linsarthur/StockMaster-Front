import logo from "../assets/logoStock.svg";
import Accordion from "../components/Accordion";
import Banner from "../components/Banner";
import CardsHome from "../components/CardsHome";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import VideoPresentation from "../components/VideoPresentation";

const Home = () => {
  return (
    <>
      <NavBar logo={logo}/>
      <Banner />
      <VideoPresentation />
      <Accordion />
      <div className="text-center font-bold text-2xl py-32 ">
        <h2>
          <span className="text-[#0053AD]">Entre em contato conosco</span> e
          descubra <br /> como o{" "}
          <span className="text-[#0053AD]">StockMaster</span> pode te ajudar a{" "}
          <br />{" "}
          <span className="text-[#0053AD]">alcançar seus objetivos.</span>
        </h2>
      </div>
      <div className="flex justify-between p-20 mb-80">
        <CardsHome
          title="Fácil de usar"
          text="Gerencie seu negócio com facilidade. Nossa plataforma simplifica tudo para você."
          icon={<box-icon name="slider-alt" size="lg"></box-icon>}
        />
        <CardsHome
          title="Precisando de ajuda?"
          text=" Conte conosco! Nossa equipe está pronta para te atender por chat ou telefone, sempre que precisar. Além disso, nossa central de ajuda online oferece tutoriais completos para você resolver suas dúvidas a qualquer hora."
          icon={<box-icon name="phone-call" size="lg"></box-icon>}
        />
        <CardsHome
          title="Processos mais eficientes"
          text=" Cadastre colaboradores, clientes, fornecedores, vendedores e produtos em poucos cliques."
          icon={<box-icon name="time" size="lg"></box-icon>}
        />
        <CardsHome
          title="Decisões melhores"
          text=" Relatórios que impulsionam seu negócio. Com uma visão clara e completa das suas operações, você toma decisões mais assertivas e estratégicas."
          icon={<box-icon name="report" type="solid" size="lg"></box-icon>}
        />
      </div>
      <Footer />
    </>
  );
};

export default Home;
