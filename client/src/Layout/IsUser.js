import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { PrivateRoute } from "./../components/ProtectedRoute";
import { Register } from "./../pages/Register";
import { Login } from "./../pages/Login";
import PostForm from "./../containers/Post/PostForm";
import { NavbarCom } from "./../components/Navbar";
import { Post } from "./../containers/Post";
import Home from "./../containers/Home";
import { isTokenExpire } from "./../helpers";
import { Footer } from "./../components/Footer";
import { Category } from "./../containers/Category";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
function UserLayout() {
  const location = useLocation();
  const [hideFooter, setHideFooter] = useState(false);
  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/signup") {
      setHideFooter(false);
    } else {
      setHideFooter(true);
    }
    isTokenExpire();
  }, [location.pathname]);
  return (
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
  );
}

export default UserLayout;
