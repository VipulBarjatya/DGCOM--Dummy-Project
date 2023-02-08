import React from "react";
import { Row, Col } from "react-bootstrap";
import Product from "./Product";
import products from "../product";

products.map((product) => {
  console.log("product type:>>>", typeof product);
});

const Homescreen = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Homescreen;