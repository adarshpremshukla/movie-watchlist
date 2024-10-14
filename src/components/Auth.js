


import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../../src/App.css'; 

const Auth = ({ setUser, setPage }) => {
  const [email, setEmail] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email) {
      setUser(email);
      setPage('home'); 
    }
  };

  return (
    <div className="login-bg">
      <div className="form-container">
        <h2>Login</h2>
        <Form onSubmit={handleLogin}>
          <Form.Group controlId="formBasicEmail" className="mb-3">
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Button className='loginbutton' variant="danger" type="submit">Login</Button>
        </Form>
      </div>
    </div>
  );
};

export default Auth;
