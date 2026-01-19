import { useState } from "react";
import { deleteOneProduct } from "../services/APIService";
import Button from "./Button";

const UnloadProduct = () => {
  const [dados, setDados] = useState({
    product_name: "",
    batch_idfk: "",
    product_amount: "",
  });

  const handleChange = (e) => {
    setDados({
      ...dados,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dadosFormatados = {
      product_name: dados.product_name,
      product_amount: Number(dados.product_amount),
      product_price: Number(dados.product_price),
      product_discount: dados.product_discount
        ? Number(dados.product_discount)
        : null,
      category_idfk: Number(dados.category_idfk),
      batch_idfk: Number(dados.batch_idfk),
    };

    const response = await deleteOneProduct(dadosFormatados);
    console.log("Response:", response);
  };
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
          <form
            className="flex flex-col pl-70 pt-20 gap-2"
            onSubmit={handleSubmit}
          >
            <label className="text-[18px] text-[#1C274C] leading-[100%] w-full">
              Produto <br />
              <input
                type="text"
                name="product_name"
                value={dados.product_name}
                onChange={handleChange}
                className="bg-white rounded-[11px] mt-4 border border-[#999999] outline-0 w-[50%] p-0.5 "
              />
            </label>
            <br />
            <label className="text-[18px] text-[#1C274C] leading-[100%] w-full">
              Lote <br />
              <input
                type="text"
                name="batch_idfk"
                value={dados.batch_idfk}
                onChange={handleChange}
                className="bg-white rounded-[11px] mt-4 border border-[#999999] outline-0 w-[50%] p-0.5 "
              />
            </label>
            <br />
            <label className="text-[18px] text-[#1C274C] leading-[100%] w-full">
              Quantidade <br />
              <input
                type="text"
                name="product_amount"
                value={dados.product_amount}
                onChange={handleChange}
                className="bg-white rounded-[11px] mt-4 border border-[#999999] outline-0 w-[50%] p-0.5 "
              />
            </label>

            <button type="submit">
              <Button
                text="Remover"
                style="text-[#0053AD] border border-[#0053AD] text-center px-[145px] w-[50%] mr-30 hover:bg-[#DBEDFF] mt-10"
              />
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default UnloadProduct;
