import Accordion from "../components/Accordion";
import Banner from "../components/Banner";
import NavBar from "../components/NavBar";
import VideoPresentation from "../components/VideoPresentation";

const Home = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <VideoPresentation />
      <Accordion />
    </>
  );
};

export default Home;
