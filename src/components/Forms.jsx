const Forms = ({ data1, data2, data3 }) => {
  return (
    <>
      <div>
        <form className="flex flex-col justify-center gap-4 mb-4">
          <label
            htmlFor="email"
            className="text-[#66768C] text-[18px] mx-8 font-semibold"
          >
            {data1}
          </label>
          <input
            type="text"
            name="email"
            id="email"
            className="bg-white border rounded-xl border-[#999999] px-5 py-1 mx-8 w-[350px] text-[18px] outline-[#999999]"
            placeholder="Insira seu e-mail"
          />
          <label
            htmlFor="email"
            className="text-[#66768C] text-[18px] mx-8 font-semibold"
          >
            {data2}
          </label>
          <input
            type="text"
            name="email"
            id="email"
            className="bg-white border rounded-xl border-[#999999] px-5 py-1 mx-8 w-[350px] text-[18px] outline-[#999999]  "
            placeholder="Insira seu e-mail"
          />
          {data3 ? (
            <>
              <label
                htmlFor="email"
                className="text-[#66768C] text-[18px] mx-8 font-semibold"
              >
                {data3}
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className="bg-white border rounded-xl border-[#999999] px-5 py-1 mx-8 w-[75%] mb-7 text-[18px] outline-[#999999]  "
                placeholder="Insira seu e-mail"
              />
            </>
          ) : (
            <>
              <div className="hidden"></div>
            </>
          )}
        </form>
      </div>
    </>
  );
};

export default Forms;
