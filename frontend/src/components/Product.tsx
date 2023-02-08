import React from "react";
import Card from "react-bootstrap/Card";

interface ProductProps {
  product: {
    _id: string;
    name: string;
    image: string;
    rating: number;
    numReviews: number;
    price: number;
  };
}

const Product: React.FC<ProductProps> = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/product/${product._id}`}>
        <Card.Img src={require(`../images/${product.image}`)} variant="top" />
      </a>
      <Card.Body>
        <a href={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>{" "}
          </Card.Title>
        </a>
        <Card.Text as="div">
          <div className="my-3">
            {product.rating} from {product.numReviews} reviews
          </div>
        </Card.Text>

        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
