import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../kontak.css';

const Kontak = () => {
  return (
    <Container className="web-page-container">
      <Row>
        <Col md={12}>
          <h1 className="text-center">Kontak Kami</h1>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="left-section">
          {/* Photo with navy-blue background */}
          <div className="photo-container">
            {/* Add your photo here */}
            <img
              src="src/assets/maps.JPG" // Replace with your photo URL
              alt="User"
              className="img-fluid"
            />
          </div>
        </Col>
        <Col md={6} className="right-section">
          {/* Personal information */}
          <div>
            {/* Bagian form login */}
            <Form className="mt-3">
              <h2 className="text-center mb-4">Kirim Pesan</h2>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Nama</Form.Label>
                <Form.Control type="text" placeholder="Masukkan Nama" required />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Telpon</Form.Label>
                <Form.Control type="text" placeholder="Masukkan No Telp" required />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Masukkan Email" required />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Pesan</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Masukkan Pesan" required />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100 navy-button">
                Kirim Pesan
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Kontak;
