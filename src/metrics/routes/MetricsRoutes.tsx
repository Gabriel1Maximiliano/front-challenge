import { Routes, Route } from "react-router-dom";
import { MetricsPage } from "../pages/MetricsPage";
import { LinePage } from "../pages/LinePage";
import { BarPage } from "../pages/BarPage";


export const MetricsRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MetricsPage />} />
      <Route path="/line" element={<LinePage />} />
      <Route path="/info" element={<LinePage />} /> {/* Reemplaza el componente temporal por LinePage */}
      <Route path="/bar" element={<BarPage />} />
     {/* Reemplaza el componente temporal por QuickView */}
      {/* Si existe, agrega una página 404 para las rutas no encontradas */}
     
      {/* Si no hay página 404, redirige a la página principal */}
    
    </Routes>
  );
};
