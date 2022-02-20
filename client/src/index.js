import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/index";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Routes,
} from "react-router-dom";
import { PrivateRoute } from "./components/ProtectedRoute";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import PostForm from "./containers/Post/PostForm";
import { NavbarCom } from "./components/Navbar";
import { Post } from "./containers/Post";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <NavbarCom />
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Register />} />
          <Route exact path="/posts/:postId" element={<Post />} />
          <Route exact path="/" element={<PrivateRoute />}>
            <Route exact path="/" element={<App />} />
          </Route>
          <Route exact path="/post/add" element={<PrivateRoute />}>
            <Route exact path="/post/add" element={<PostForm />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
