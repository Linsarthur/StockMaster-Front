import NavBar from "../components/NavBar";

const DashBoard = () => {
  return (
    <>
      <NavBar />
      <div className="w-[25%] h-screen bg-[#DBEDFF] flex ">
        <div>
          <div className="flex items-center bg-linear-to-t from-white/60 to-white/5 ">
            <div>
              <box-icon
                name="user-circle"
                type="solid"
                color="#1a2371"
              ></box-icon>
            </div>

            <div>
              <p>Nome do user</p>
              <p>Email</p>
              <p>Perfil: tipo</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
