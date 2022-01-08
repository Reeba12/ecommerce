import React from "react";
import TextField from "@mui/material/TextField";
import { Container, Form, Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Signup from "./Signup";
const Login = () => {
  return (
    <>
      <h1 className="LoginPageHeading">Log in to your Account</h1>
      <Container className="login">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            {/* <Form.Label>Email address</Form.Label> */}
            {/* <Form.Control type="email" placeholder="Enter email" /> */}
            <TextField
              sx={{ width: 400, maxWidth: "100%" }}
              id="outlined-basic"
              label="Email Address"
              variant="outlined"
              size="large"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <TextField
              sx={{ width: 400, maxWidth: "100%" }}
              id="outlined-basic"
              label="Password"
              variant="outlined"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
            <Form.Text className="text-muted">
              We'll keep you signed in on this device. You may be asked <br />{" "}
              to enter your password when modifying sensitive account
              information.
            </Form.Text>
          </Form.Group>
          <Button
            style={{
              width: 400,
              maxWidth: "100%",
              color: "#fffff",
            }}
            variant="warning"
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </Container>
      <Link to="/sign-up" variant="body2">
        <p className="text-center">
          Not have an account ? Sign up here <br />
        </p>
      </Link>
      <Switch>
        <Route path="/sign-up">
          <Signup />
        </Route>
      </Switch>
    </>
  );
};

export default Login;
