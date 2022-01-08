import React from 'react';
import { BrowserRouter as  Router,Switch, Route, Link } from "react-router-dom";
import Products from "./Products";
import {
  Nav,
  Navbar,
  Form,
  FormControl,
  Container,
  Button,
} from "react-bootstrap";
import Home from "./Home";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Login  from "./Login";
import Signup from './Signup';
// import { Nav,NavDropdown,Form,FormControl,Container,Button } from 'react-bootstrap'
const NavBar = () => {
    return (
        <div>
             <Router>
        <Navbar bg="warning" expand="lg" className="shadow-sm">
          <Container fluid className="position-relative">
            <Navbar.Brand href="#" className="topnavbar">
              OnShop
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
     
                <Nav.Link as={Link} to="/" exact>Home</Nav.Link>
                <Nav.Link as={Link} to="/product">Shop</Nav.Link>
              </Nav>
      
              <Form className="d-flex me-4 position-absolute start-50">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-dark">Search</Button>
              </Form>
            <Nav.Link as={Link} to="/Mybasket" className="text-dark">
              <LocalGroceryStoreIcon style={{ color: "black" }} />Card(0)
            </Nav.Link>
            <Nav.Link as={Link} to="/login" className="text-dark">
              <AccountCircleOutlinedIcon style={({ color: "black" }, { marginleft: "10px" })}/>
              Sign In
            </Nav.Link>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {/* <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/sign-up">
            <Signup />
          </Route>
        </Switch> */}
        
        </Router>
        </div>
    )
}

export default NavBar
