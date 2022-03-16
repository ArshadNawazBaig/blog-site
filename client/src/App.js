import "./App.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { isTokenExpire } from "./helpers";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminLayout from "./Layout/IsAdmin";
import UserLayout from "./Layout/IsUser";
toast.configure();
function App() {
  const location = useLocation();
  const [isAdmin, setIsAdmin] = useState(true);
  useEffect(() => {
    isTokenExpire();
  }, [location.pathname]);
  return (
    isAdmin ? <AdminLayout /> : <UserLayout />
  )
}

export default App;
