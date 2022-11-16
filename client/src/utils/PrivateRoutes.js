import { Outlet, Navigate } from "react-router-dom";

function PrivateRoutes() {
  const auth = JSON.parse(localStorage.getItem("user"));
  return auth ? <Outlet /> : <Navigate to='/login' />;
}

export default PrivateRoutes;
