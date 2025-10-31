import bannerImage from "../assets/bannerImage.png";
import boxGestao from "../assets/boxManager.png";
import Button from "./Button";
const Banner = () => {
  return (
    <>
      <section>
        <div>
          <div>
            <img src={boxGestao} alt="" />
            <h4>Gestão de estoque </h4>
          </div>
          <div>
            <h3>
              Seu Estoque na palma da mão com um sistema simples e integrado
            </h3>
          </div>
          <div>
            <p>
              Evite erros e ganhe agilidade nas suas operações com os recursos
              de controle de estoque, facilitando a gestão de micros e pequenos
              negócios.
            </p>
          </div>
          <div>
            <Button />
            <Button />
          </div>
        </div>

        <div>
          <img src={bannerImage} alt="" />
        </div>
        <div>
          <p>Sistema de gestão</p>
          <p>Controle de estoque</p>
        </div>
      </section>
    </>
  );
};

export default Banner;
