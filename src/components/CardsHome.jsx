import "boxicons";

const CardsHome = ({ title, text, icon }) => {
  return (
    <>
      <section>
        <div className="flex justify-between items-center">
          <div className="flex items-center justify-center flex-col gap-5 py-5 w-60 bg-linear-to-b from-[#C8DDF1] to-white px-10  rounded-2xl">
            {icon}
            <p className="text-center font-semibold">{title}</p>
            <p className="font-light text-[15px] text-[#66768C]">{text}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CardsHome;
