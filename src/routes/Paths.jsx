import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import PolicyPage from "../pages/PolicyPage";
import RegisterPage from "../pages/RegisterPage";
import TermsOfUse from "../pages/TermsOfUse";

const Paths = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<RegisterPage />} />
          <Route path="/politicas" element={<PolicyPage />} />
          <Route path="/termos-de-uso" element={<TermsOfUse />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Paths;
