import Button from "./Button";

const UnloadProduct = () => {
  return (
    <>
      <section className=" mx-30 mt-20 mb-10 bg-[#F8FAFC] w-[80%] rounded-2xl  pl-20">
        <div>
          <h2 className="text-[#1c274c] text-[32px] font-bold leading-10 pt-[29px]">
            Retire o produto
          </h2>
          <div className=" border-b border-[#AECFFD]/50 w-[90%] pt-5"></div>
        </div>
        <div className="">
          <form className="flex flex-col pl-70 pt-20 gap-2">
            <label className="text-[18px] text-[#1C274C] leading-[100%] w-full">
              Produto <br />
              <input
                type="text"
                name="product"
                className="bg-white rounded-[11px] mt-4 border border-[#999999] outline-0 w-[50%] p-0.5 "
              />
            </label>
            <br />
            <label className="text-[18px] text-[#1C274C] leading-[100%] w-full">
              Lote <br />
              <input
                type="text"
                name="product"
                className="bg-white rounded-[11px] mt-4 border border-[#999999] outline-0 w-[50%] p-0.5 "
              />
            </label>
            <br />
            <label className="text-[18px] text-[#1C274C] leading-[100%] w-full">
              Quantidade <br />
              <input
                type="text"
                name="product"
                className="bg-white rounded-[11px] mt-4 border border-[#999999] outline-0 w-[50%] p-0.5 "
              />
            </label>

            <Button
              text="Remover"
              style="text-[#0053AD] border border-[#0053AD] text-center px-[145px] w-[50%] mr-30 hover:bg-[#DBEDFF] mt-10"
            />
          </form>
        </div>
      </section>
    </>
  );
};

export default UnloadProduct;
