import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { isTokenExpire } from "./../helpers";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Dashboard } from "./../containers/Dashboard";
import { Sidebar } from "./../components/Dashboard/Sidebar";
import { Header } from "./../components/Dashboard/Header";
import { Users } from "./../containers/Dashboard/Users";
import { Settings } from "./../containers/Dashboard/Settings";
import { Posts } from "./../containers/Dashboard/Posts";
import { Overview } from "./../containers/Dashboard/Overview";
toast.configure();
function AdminLayout() {
  const location = useLocation();
  useEffect(() => {
    isTokenExpire();
  }, [location.pathname]);
  return (
    <div className="App">
      <div className="dashboard-outer">
        <Sidebar />
        <div className="dashboard-content">
          <Header />
          <div className="container-fluid py-4 px-5">
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route exact path="/users" element={<Users />} />
              <Route exact path="/settings" element={<Settings />} />
              <Route exact path="/overview" element={<Overview />} />
              <Route exact path="/posts" element={<Posts />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
