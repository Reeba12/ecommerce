import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";

import axios from 'axios';

const SelectProduct = () => {
  const { id } = useParams();
  const [Sproduct, setSproduct] = useState([]);
  const [loading, setloading] = useState(false);
  const [quantity, setquantity] = useState(0);


  useEffect(() => {
    const getProduct = async () => {
      setloading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setSproduct(await response.json());
      setloading(false);
    };
    getProduct();
  }, []);
  const Loading = () => {
    return (
      <>
        <h4 className="">Loading...</h4>
      </>
    );
  };
  const DeleteItems = () => {
    setquantity(quantity - 1);
  };
  const AddItems = () => {
    setquantity(quantity + 1);
  };
  const PostProductData =async (e) =>{
    e.preventDefault();
    const pdata={
      name: Sproduct.title,
      quantity: quantity ,
      price:Sproduct.price,
      totalprice:Sproduct.price*quantity
    };

    await axios.post('http://localhost/react%20ecommerce/productinsert.php',pdata)
    .then(res => console.log(res.data))

  }
  // ProductDetails
  const ShowSproduct = () => {
    return (
      <>
        <div className="Container">
          <div className="row productdetails">
            <div className="col-md-6">
              <img src={Sproduct.image} width="350px" height="350px" />
            </div>
            <div className="col-md-6 square border ">
              <h4>{Sproduct.category}</h4>
              <h1>{Sproduct.title}</h1>
              <hr />
              <Stack spacing={1}>
                <Rating name="size-large" defaultValue={2} size="large" />
              </Stack>
              <div className="productdesc mb-3 mt-3">
                {Sproduct.description}
              </div>
              <div className="addtocardimg d-flex ">
                  <RemoveOutlinedIcon  onClick={DeleteItems} />
                <p className="mx-3 fw-bold">{quantity}</p>
                  <AddOutlinedIcon onClick={AddItems}/>
              </div>
              <div className="cardbtn my-2">
                <Button variant="warning" className="me-2" onClick={PostProductData}>
                  Add to card
                </Button>
                <Button variant="warning" classname="me-2">
                  Checkout card
                </Button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="container my-3 py-3">
        <div className="row justify-content-center ">
          {loading ? <Loading /> : <ShowSproduct />}
        </div>
      </div>
    </>
  );
};

export default SelectProduct;
