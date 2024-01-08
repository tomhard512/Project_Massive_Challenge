
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PaymentDetail = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col className="text-center">
          <h1>Detail Pembayaran Berhasil</h1>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Nama Barang</th>
                <th>Harga</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Barang A</td>
                <td>Rp 100.000</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Barang B</td>
                <td>Rp 150.000</td>
              </tr>
              <tr>
                <td colSpan="2">Total</td>
                <td>Rp 250.000</td>
              </tr>
            </tbody>
          </Table>
          <div className="text-center">
            <Button variant="success">Pembayaran Berhasil</Button>
          </div>
          <div className="mt-3 text-center">
            <Link to="/service">
              <Button variant="primary">Kembali</Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PaymentDetail;
