import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import sideimg from "../images/sideimg1.png";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Products from "./Products";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Adduser from "./Adduser";
import Footerpage from "./Footer"
const Home = () => {
  return (
    <>
      <Container maxWidth="md" className="square border border-warning">
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6} mt={15}>
              <h4>New Collection</h4>
              <h1>WELCOME TO OnSHOP</h1>

              <Link to="/product" variant="body2">
                <Button
                  style={{
                    width: 150,
                    maxWidth: "100%",
                    color: "#fffff",
                  }}
                  variant="warning"
                  type="submit"
                >
                  Shop Now
                </Button>
              </Link>
            </Grid>
            <Grid item xs={6}>
              <img className="img" src={sideimg} alt="" srcset="" />
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Switch>
        <Route path="/product">
          <Products />
        </Route>
      </Switch>
      <Products />
      <Footerpage />
    </>
  );
};

export default Home;
