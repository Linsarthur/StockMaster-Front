const Button = ({ text, style }) => {
  return (
    <div>
      <div
        className={`
          py-1 px-2 text-[10px] 
          xl:px-[26px] xl:py-1.5 ${style} hover:bg-[#007afc] rounded-full xl:text-[16px] xl:font-bold cursor-pointer xl:block`}
      >
        {text}
      </div>
    </div>
  );
};

export default Button;
