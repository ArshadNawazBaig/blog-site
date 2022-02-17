import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
export const PrivateRoute = () => {
    let auth = useSelector(state => state.auth.isLoggedIn);
    return auth ? <Outlet /> : <Navigate to="/login" />;
  }