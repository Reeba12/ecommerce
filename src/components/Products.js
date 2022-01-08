import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import Container from "@mui/material/Container";
import SelectProduct from "./SelectProduct";

const Products = () => {
  const [productdata, setproductdata] = useState([]);
  const [no, setno] = useState([]);
  const [filter, setfilter] = useState(productdata);
  const [loading, setloading] = useState(false);
  let componentMount = true;
  useEffect(() => {
    const getData = async () => {
      setloading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMount) {
        setproductdata(await response.clone().json());
        setfilter(await response.json());
        setloading(false);
        console.log(filter);
      }
    };
    getData();
  }, []);
  console.log(productdata.title);
  const Loading = () => {
    return (
      <>
        <h4 className="">Loading...</h4>
      </>
    );
  };
  const Filterproduct = (selectedcategory) => {
    const updatelist = productdata.filter(
      (x) => x.category === selectedcategory
    );
    setfilter(updatelist);
  };
  const Showproduct = () => {
    return (
      <>
        <div className="d-flex justify-content-center mb-5 pb-5">
          <div
            className="btn btn-warning me-2"
            onClick={() => {
              setfilter(productdata);
            }}
          >
            All
          </div>
          <div
            className="btn btn-warning me-2"
            onClick={() => Filterproduct("men's clothing")}
          >
            Men's Collection
          </div>
          <div
            className="btn btn-warning me-2"
            onClick={() => Filterproduct("women's clothing")}
          >
            Women's Collection
          </div>
          <div
            className="btn btn-warning me-2"
            onClick={() => Filterproduct("jewelery")}
          >
            Jwelllery
          </div>
          <div
            className="btn btn-warning me-2"
            onClick={() => Filterproduct("electronics")}
          >
            Electronics
          </div>
        </div>
        {filter.map((pro) => {
          return (
            <>
              <div className="col-md-3 mb-2">
                <Card
                  className="h-100 p-4 square border text-center"
                  key={pro.id}
                >
                  <Card.Img
                    className="card-img"
                    variant="top"
                    src={pro.image}
                  />
                  <Card.Body className="card-body">
                    <Card.Title className="fw-bolder">
                      {pro.title.substring(0, 12)}
                    </Card.Title>
                    <Card.Text>${pro.price}</Card.Text>
                    <NavLink to={`/products/${pro.id}`}>
                      <Button variant="warning">Buy Now</Button>
                    </NavLink>
                  </Card.Body>
                </Card>
              </div>
            </>
          );
        })}
      </>
    );
  };
  return (
    <>
      <div className="container my-3 py-3">

        <div className="row justify-content-center ">
          {loading ? <Loading /> : <Showproduct />}
        </div>
        {/* <Container>  */}
         {/* <div className="row">
          <div className="col-12 mb-5">
             <h1 className="display-6 text-center fw-bolder">Product</h1> 
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Products;
