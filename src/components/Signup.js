import React, {useState} from "react";
import TextField from "@mui/material/TextField";
import { Container, Form, Button } from "react-bootstrap";
import axios from 'axios';

const Signup = () => {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email:"",
    password:"",
    cpassword:""
  })
  const handleinput = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }



const Postdata =async (e) =>{
  e.preventDefault();
  console.log(user)
  await axios.post('http://localhost/react%20ecommerce/insert.php',user)
  .then(res => console.log(res.data))


}
  return (
    <>
    {/* <h3>{user}</h3> */}
      <h1 className="LoginPageHeading">Sign Up</h1>
      <Container className="login">
        <Form>
        <Form.Group className="mb-3" controlId="formBasicFirstname">
            <TextField
              sx={{ width: 400, maxWidth: "100%" }}
              id="outlined-basic"
              label="First name"
              variant="outlined"
              size="large"
              name="fname"
              value={user.fname}
              onChange={handleinput}
            />
            </Form.Group>
             <Form.Group className="mb-3" controlId="formBasicLastname">
            <TextField
              sx={{ width: 400, maxWidth: "100%" }}
              id="outlined-basic"
              label="Last name"
              variant="outlined"
              size="large"
              name="lname"
              value={user.lname}
              onChange={handleinput}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            {/* <Form.Label>Email address</Form.Label> */}
            {/* <Form.Control type="email" placeholder="Enter email" /> */}
            <TextField
              sx={{ width: 400, maxWidth: "100%" }}
              id="outlined-basic"
              label="Email Address"
              variant="outlined"
              size="large"
              name="email"
              value={user.email}
              onChange={handleinput}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <TextField
              sx={{ width: 400, maxWidth: "100%" }}
              id="outlined-basic"
              label="Password"
              variant="outlined"
              size="large"
              name="password"
              value={user.password}
              onChange={handleinput}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <TextField
              sx={{ width: 400, maxWidth: "100%" }}
              id="outlined-basic"
              label="Confirm Password"
              variant="outlined"
              name="cpassword"
              value={user.cpassword}
              onChange={handleinput}
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
            onClick={Postdata}
          >
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Signup;
