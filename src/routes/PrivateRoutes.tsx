import { Routes, Route, Navigate } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import AppLayout from "../componenets/layout/AppLayout";

// Pages
// import Dashboard from "../modules/dashboard/Dashboard";
// import Applications from "../modules/applications/Applications";
// import Interviews from "../modules/interviews/Interviews";
// import Analytics from "../modules/analytics/Analytics";
// import Settings from "../modules/settings/Settings";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route element={<AppLayout />}>
          {/* Dashboard */}
          {/* <Route path="dashboard" element={<Dashboard />} /> */}

          {/* Applications */}
          {/* <Route path="applications" element={<Applications />} /> */}
          {/* <Route path="applications/add" element={<AddApplication />} /> */}
          {/* <Route
            path="applications/:id"
            element={<ApplicationDetails />}
          /> */}

          {/* Interviews */}
          {/* <Route path="interviews" element={<Interviews />} /> */}

          {/* Analytics */}
          {/* <Route path="analytics" element={<Analytics />} /> */}

          {/* Settings */}
          {/* <Route path="settings" element={<Settings />} /> */}

          {/* Default */}
          <Route index element={<Navigate to="/app/dashboard" replace />} />

          {/* Unknown */}
          <Route path="*" element={<Navigate to="/app/dashboard" replace />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default PrivateRoutes;
