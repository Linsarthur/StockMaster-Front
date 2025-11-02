import accordionImage from "../assets/accordionImage.png";

const Accordion = () => {
  return (
    <>
      <section>
        <div className="pt-[150px] pb-[122px]">
          <p className="font-bold text-3xl text-center">
            Gerencie e controle seu <br />
            <span className="text-[#0053AD]">estoque com o StockMaster</span>
          </p>
        </div>

        <div className="flex items-center px-20 gap-52">
          <div>
            <div className="border-t border-[#66768C]">
              <h4 className="mt-8 mb-8 text-[#0053AD]">
                Faça a gestão de produtos ou insumos
              </h4>
              <p className="mb-8 text-[#66768C]">
                Gerencie seus produtos, insumos e matérias-primas com facilidade
                através do nosso sistema de controle de estoque integrado ao
                ERP.
              </p>
            </div>
            <div className="border-t border-[#66768C]  ">
              <h4 className="mt-8 mb-8 text-[#0053AD]">
                Automatizar processos
              </h4>
              <p className="mb-8 text-[#66768C]">
                Reduza erros manuais e aumente a eficiência com processos
                automatizados que facilitam a gestão do seu estoque.
              </p>
            </div>
            <div className="border-t border-b border-[#66768C] ">
              <h4 className="mt-8 mb-8 text-[#0053AD]">
                Relatórios detalhados
              </h4>
              <p className="mb-8 pb-3 text-[#66768C]">
                Acesse análises e relatórios que ajudam na tomada de decisões
                estratégicas e na identificação de oportunidades de melhoria.
              </p>
            </div>
          </div>
          <div>
            <img src={accordionImage} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Accordion;
