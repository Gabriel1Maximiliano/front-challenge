import { Routes, Route } from "react-router-dom";
import { MetricsPage } from "../pages/MetricsPage";
import { LinePage } from "../pages/LinePage";


export const MetricsRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MetricsPage />} />
      <Route path="/line" element={<LinePage />} />
      <Route path="/info" element={<LinePage />} />
    </Routes>
  );
};
