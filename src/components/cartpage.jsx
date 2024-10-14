import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Cartpage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch the cart items from the backend
    const fetchCart = async () => {
      try {
        const response = await axios.get('http://localhost:3030/get-cart/user123'); // Replace with the actual user ID
        setCartItems(response.data.items);
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    };
    fetchCart();
  }, []);

  const updateCartQuantity = async (productId, newQuantity) => {
    if (newQuantity < 1) return; // Prevent quantity going below 1
    try {
      await axios.post('http://localhost:3030/update-cart-quantity', {
        userId: 'user123', // Replace with the actual user ID
        productId,
        quantity: newQuantity,
      });
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.productId === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };

  const removeFromCart = async (productId) => {
    try {
      await axios.post('http://localhost:3030/remove-from-cart', {
        userId: 'user123', // Replace with the actual user ID
        productId,
      });
      setCartItems((prevItems) =>
        prevItems.filter((item) => item.productId !== productId)
      );
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

  return (
    <Container>
      <h1 className="my-4">Your Cart</h1>
      {cartItems.length > 0 ? (
        <Row>
          {cartItems.map((item) => (
            <Col key={item.productId} sm={12} md={6} lg={4} className="mb-4">
              <Card>
                <Card.Img
                  variant="top"
                  src={item.image} // Ensure you add the image field in your API or fetch it from the product details
                  alt={item.productName}
                  style={{ height: '300px', objectFit: 'contain' }}
                />
                <Card.Body>
                  <Card.Title>{item.productName}</Card.Title>
                  <Card.Text>Price: ${item.price}</Card.Text>
                  <Card.Text>Quantity: {item.quantity}</Card.Text>
                  <div className="d-flex justify-content-between">
                    <Button
                      variant="outline-primary"
                      onClick={() => updateCartQuantity(item.productId, item.quantity + 1)}
                    >
                      +
                    </Button>
                    <Button
                      variant="outline-primary"
                      onClick={() => updateCartQuantity(item.productId, item.quantity - 1)}
                    >
                      -
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => removeFromCart(item.productId)}
                    >
                      Remove
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <p>Your cart is empty</p>
      )}
    </Container>
  );
};

export default Cartpage;


