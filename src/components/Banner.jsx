import bannerImage from "../assets/bannerImage.png";
import boxGestao from "../assets/boxManager.png";
import checkcircle from "../assets/checkcircle.png";
import Button from "./Button";
const Banner = () => {
  return (
    <>
      <section className="bg-[#DBEDFF] flex justify-around items-center p-20">
        <div className="p-10">
          <div className="flex items-center gap-2 bg-[#C8DDF1] w-fit px-4 p-0.5 rounded-full mb-7 font-light">
            <img src={boxGestao} alt="" className="w-6 h-6" />
            <h4>Gestão de estoque </h4>
          </div>
          <div className="mb-7 font-bold text-4xl leading-10 tracking-[4%]">
            <h3>
              Seu Estoque na palma da mão com um
              <br />
              <span className="text-[#0053AD]">
                sistema simples e integrado
              </span>
            </h3>
          </div>
          <div className="mb-7 font-light text-[18px] leading-[100%] text-[#66768C] ">
            <p>
              Evite erros e ganhe agilidade nas suas operações com os recursos
              de controle de estoque, facilitando a gestão de micros e pequenos
              negócios.
            </p>
          </div>
          <div className="flex gap-5">
            <Button
              text="Comece agora"
              backgroung="bg-[#0053AD]"
              textColor="text-white"
            />
            <Button
              text="Saiba mais"
              backgroung="bg-transparent"
              border="border-2"
              textColor="text-[#0053AD]"
              hoverText="hover:bg-[#0053AD] hover:text-white"
            />
          </div>
        </div>

        <div className="relative">
          <img src={bannerImage} alt="" />
          <p className="flex items-center py-0.5 px-2 text-[#0053AD] bg-white rounded absolute top-10 -left-10 font-bold text-[14px] leading-4 gap-2 drop-shadow-lg/25">
            <img src={checkcircle} alt="" />
            Sistema <br />
            de gestão
          </p>
          <p className="flex items-center py-0.5 px-2 text-[#0053AD] bg-white rounded absolute bottom-10 -right-10 font-bold text-[14px] leading-4 gap-2 drop-shadow-lg/25">
            <img src={checkcircle} alt="" />
            Controle
            <br /> de estoque
          </p>
        </div>
      </section>
    </>
  );
};

export default Banner;
