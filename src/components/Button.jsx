const Button = ({ text, backgroung, border, textColor, hoverText }) => {
  return (
    <div>
      <div
        className={`px-[26px] py-1.5 ${backgroung} ${border} ${textColor} ${hoverText} hover:bg-[#007afc] rounded-full  font-bold cursor-pointer`}
      >
        {text}
      </div>
    </div>
  );
};

export default Button;
