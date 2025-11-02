const Button = ({ text,style }) => {
  return (
    <div>
      <div
        className={`px-[26px] py-1.5 ${style} hover:bg-[#007afc] rounded-full  font-bold cursor-pointer`}
      >
        {text}
      </div>
    </div>
  );
};

export default Button;
