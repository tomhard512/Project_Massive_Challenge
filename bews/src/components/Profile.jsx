import React, { useState } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Profile() {
  const [userData, setUserData] = useState({
    nama: 'John Doe',
    email: 'john.doe@example.com',
    alamat: 'Jl. Contoh No. 123',
    pass: '', 
    phone: '', 
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    console.log('Profil berhasil diperbarui:', userData);
  };

  return (
    <Container fluid>
      <Row className="m-0">
        {/* Background image */}
        <Col md={6} className="p-0">
          <img
            src="src/assets/bgh3.jpeg"
            alt="Background"
            className="img-fluid w-100"
            style={{ backgroundSize: 'cover',
            backgroundPosition: 'center', }}
          />
        </Col>
        {/* Form for profile update */}
        <Col md={6} className="d-flex align-items-center justify-content-center">
          <div className="w-75">
            <div className="rounded-circle overflow-hidden d-flex justify-content-center align-items-center mb-4 mx-auto" style={{ width: '200px', height: '200px', border: '5px solid #fff', zIndex: 1, position: 'relative' }}>
              <img
                src="src/assets/bgh3.jpeg"
                alt="User Profile"
                className="img-fluid"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <h2 className="mb-4 text-center">Edit Profile</h2>
            <Form onSubmit={handleFormSubmit}>
              <Form.Group controlId="formNama">
                <Form.Label>User Name</Form.Label>
                <Form.Control type="text" name="nama" value={userData.nama} onChange={handleInputChange} />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" value={userData.email} onChange={handleInputChange} />
              </Form.Group>
              <Form.Group controlId="formPass">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="pass" value={userData.pass} onChange={handleInputChange} />
              </Form.Group>
              <Form.Group controlId="formPhone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" name="phone" value={userData.phone} onChange={handleInputChange} />
              </Form.Group>
              <br />
              <Button variant="primary" type="submit" className="w-100 navy-button">
                Update
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
