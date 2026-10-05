import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../modules/auth/login/Login";
import Signup from "../modules/auth/signup/Signup";
import ForgotPassword from "../modules/auth/forgotPassword/ForgotPassword";

const PublicRoutes = () => {
  return (
    <Routes>
      {/* Authentication */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      {/* Default */}
      <Route path="/" element={<Navigate to="/login" replace />} />
      {/* Unknown Public Route */}
      <Route path="*" element={<Navigate to="/login" replace />} />
      {/* <Route path="/applications" element={<Applications />} /> */}
    </Routes>
  );
};

export default PublicRoutes;
