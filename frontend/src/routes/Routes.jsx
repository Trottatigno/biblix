import { Route, Routes } from "react-router-dom";
import Librairie from "../pages/Librairie.jsx";
import MesLivres from "../pages/MesLivres.jsx";
import MesFavoris from "../pages/MesFavoris.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Librairie />} />
      <Route path="/meslivres" element={<MesLivres />} />
      <Route path="/mesfavoris" element={<MesFavoris />} />
    </Routes>
  );
};

export default AppRoutes;
