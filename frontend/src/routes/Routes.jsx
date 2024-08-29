import { Route, Routes } from "react-router-dom";
import Librairie from "../pages/Librairie.jsx";
import MesFavoris from "../pages/MesFavoris.jsx";
import MesCreations from "../pages/MesCreations.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Librairie />} />
      <Route path="/mescreations" element={<MesCreations />} />
      <Route path="/mesfavoris" element={<MesFavoris />} />
    </Routes>
  );
};

export default AppRoutes;
