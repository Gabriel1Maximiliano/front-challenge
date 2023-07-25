import { Routes, Route, Navigate } from "react-router-dom";


import { CreateUrlPage } from "../metrics/pages/CreateUrlPage";
import { MetricsPage } from "../metrics/pages/MetricsPage";
import { PiePage } from "../metrics/pages/PiePage";
import { LinePage } from "../metrics/pages/LinePage";
import { FormPage } from "../metrics/pages/FormPage";
import { DashBoardPage } from "../metrics/pages/DashBoardPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<DashBoardPage />} />
      <Route path="/pie" element={<PiePage />} />
      <Route path="/crear-url" element={<CreateUrlPage />} />
      <Route path="/line" element={<LinePage />} />
      <Route path="/historial" element={<FormPage />} />
      <Route path="/estadisticas" element={<MetricsPage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
