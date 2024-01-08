import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';

function InvoiceBenar() {
  return (
    <Container className="mt-5">
      <Row>
        <Col className="text-center">
          <h1>Hallo</h1>
          <p>Invoice Pesanan Anda<br/>Mohon Selesaikan Pesanan Untuk Pesanan Anda</p>
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
          <div className="text-right">
            <Button variant="primary">Proses Pembayaran</Button>
          </div>
          <br/>
        </Col>
      </Row>
    </Container>
  );
}

export default InvoiceBenar;
