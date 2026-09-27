import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/*" element={<PublicRoutes />} />

        {/* Private Routes */}
        <Route path="/app/*" element={<PrivateRoutes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;