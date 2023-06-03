import React, { useState } from 'react';
import Card from './Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    setAgreeTerms(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform login logic here
    // You can access email and password values from the state
  };

  return (
    <Card backgroundColor="#FDD6CC" borderRadius="10px">
      <Form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <Form.Group controlId="formEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" value={email} onChange={handleEmailChange} />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password" value={password} onChange={handlePasswordChange} />
        </Form.Group>
        <Form.Group controlId="formTerms">
          <Form.Check
            type="checkbox"
            label="Terms and Agreement"
            checked={agreeTerms}
            onChange={handleCheckboxChange}
          />
        </Form.Group>
        <Button variant="warning" type="submit">
          Login
        </Button>
        <Button variant="danger" className="mt-2">
          Continue with Google
        </Button>
      </Form>
    </Card>
  );
};

export default Login;