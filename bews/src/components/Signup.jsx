import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function SignupForm() {
  // Logika pendaftaran pengguna dapat ditambahkan di sini
  const handleSignup = (e) => {
    e.preventDefault();
    // Logika pendaftaran pengguna
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src="src/assets/bgh3.jpeg"
            alt="Placeholder"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <Form className="mt-3" onSubmit={handleSignup}>
            <h2 className="text-center mb-4">Create an Account</h2>

            {/* Tambahkan formulir pendaftaran di sini */}
            {/* Contoh: */}
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" required />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" required />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Sign Up
            </Button>

            <p className="mt-3 text-center">
              Already have an account? <Link to="/Formlogin">Login here</Link>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
