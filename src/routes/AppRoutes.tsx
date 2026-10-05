import { Routes, Route } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/*" element={<PublicRoutes />} />

      {/* Private Routes */}
      <Route path="/app/*" element={<PrivateRoutes />} />
    </Routes>
  );
};

export default AppRoutes;

