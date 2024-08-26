import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Librairie from "../pages/Librairie";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Librairie />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
