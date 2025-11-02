import Button from "./Button";

const BlueCard = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="bg-[#1C274C] w-[50%] text-center rounded-4xl pt-4 ">
          <p className="text-white font-extrabold text-[36px] py-[60px]">
            Mais que um ERP, o StockMaster é a solução completa para o seu
            negócio.
          </p>

          <div className="pb-10 px-62">
            <Button text="Comece agora" style="bg-[#0053AD] text-white"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlueCard;
