import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as  Router,Switch, Route, Link } from "react-router-dom";
import Products from "./components/Products";
import SelectProduct from "./components/SelectProduct";
import NavBar from "./components/Navbar"
// import {
//   Nav,
//   Navbar,
//   Form,
//   FormControl,
//   Container,
//   Button,
// } from "react-bootstrap";
import Home from "./components/Home";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Login  from "./components/Login";
import Signup from "./components/Signup"
import Mybasket from "./components/Mybasket";
// import LinkContainer from "react-router-bootstrap/LinkContainer";
function App() {
  return (
    <>
     <Router>
     <NavBar />
     <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/product">
            <Products />
          </Route>
          <Route path="/products/:id">
            <SelectProduct />
          </Route>
          <Route path="/sign-up">
            <Signup />
          </Route>
          <Route path="/mybasket">
            <Mybasket />
          </Route>
        </Switch>
     </Router>      
    </>
  );
}

export default App;
