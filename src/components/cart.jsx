import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const userId = 'user123'; // Replace with actual logged-in user ID

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  const addToCart = async (productId, quantity) => {
    await axios.post('http://localhost:3030/add-to-cart', {
      userId: 'user123',  // Replace with dynamic user ID
      productId,
      productName: 'Sample Product',  // You might want to pass the actual product name
      quantity,
      price: 29.99,  // You should replace this with the actual price
    });
    alert('Added to cart');
  };

  return (
    <Container>
      <h1 className="my-4">Product List</h1>
      <Row>
        {products.map(product => (
          <Col key={product.id} sm={12} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={product.image} alt={product.title} style={{ height: '300px', objectFit: 'contain' }} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                  Price: ${product.price}
                </Card.Text>
                <Button variant="primary" onClick={() => addToCart(product.id, 1)}>
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
