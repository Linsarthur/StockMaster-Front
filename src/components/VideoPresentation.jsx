import storageVideo from "../assets/storageVideo.mp4";

const VideoPresentation = () => {
  return (
    <>
      <div className="flex justify-between px-50 py-10 gap-20 items-center w-full">
        <iframe
          src={storageVideo}
          width="400"
          height="400"
          title="Storage presentation"
          allowFullScreen
        
        />

        <div>
          <h3 className="font-bold text-4xl">Veja como funciona o sistema da Stock Master</h3>
          <p className="font-light text-[18px] text-[#66768C] mt-[30px]">
            Simplifique a gestão do seu estoque com o StockMaster! Tenha
            controle total das suas vendas, otimize processos e aumente seus
            lucros.
          </p>
        </div>
      </div>
    </>
  );
};

export default VideoPresentation;
