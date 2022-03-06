import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { PrivateRoute } from "./components/ProtectedRoute";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import PostForm from "./containers/Post/PostForm";
import { NavbarCom } from "./components/Navbar";
import { Post } from "./containers/Post";
import Home from "./containers/Home";
import { isTokenExpire } from "./helpers";
import { Footer } from "./components/Footer";
import { Category } from "./containers/Category";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Dashboard } from "./containers/Dashboard";
import { Sidebar } from "./components/Dashboard/Sidebar";
import { Header } from "./components/Dashboard/Header";
import { Users } from "./containers/Dashboard/Users";
import { Settings } from "./containers/Dashboard/Settings";
import { Posts } from "./containers/Dashboard/Posts";
import { Overview } from "./containers/Dashboard/Overview";
toast.configure();
function App() {
  const location = useLocation();
  const [hideFooter, setHideFooter] = useState(false);
  const [isAdmin, setIsAdmin] = useState(true);
  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/signup") {
      setHideFooter(false);
    } else {
      setHideFooter(true);
    }
    isTokenExpire();
  }, [location.pathname]);
  return (
    <>
      {isAdmin ? (
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
      ) : (
        <div className="App">
          <NavbarCom />
          <div className="inner">
            <Routes>
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<Register />} />
              <Route exact path="/posts/:postId" element={<Post />} />
              <Route exact path="/categories/:slug" element={<Category />} />
              <Route exact path="/" element={<PrivateRoute />}>
                <Route exact path="/" element={<Home />} />
              </Route>
              <Route exact path="/post/add" element={<PrivateRoute />}>
                <Route exact path="/post/add" element={<PostForm />} />
              </Route>
            </Routes>
          </div>
          {hideFooter && <Footer />}
        </div>
      )}
    </>
  );
}

export default App;
