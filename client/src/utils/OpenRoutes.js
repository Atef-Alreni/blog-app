import { Outlet, Navigate } from "react-router-dom";

function OpenRoutes() {
  const auth = JSON.parse(localStorage.getItem("user"));
  return !auth ? <Outlet /> : <Navigate to='/posts' />;
}

export default OpenRoutes;
