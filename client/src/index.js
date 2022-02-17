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

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Register />} />
          <Route exact path="/" element={<PrivateRoute />}>
            <Route exact path="/" element={<App />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
