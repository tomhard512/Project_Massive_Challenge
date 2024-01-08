import React, { useState }from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../invoice.css'

function Invoice() {
  const [notaNumber, setNotaNumber] = useState('');
  const [customerName, setCustomerName] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Periksa apakah Nomor Nota dan Nama Pelanggan telah diisi
    if (!notaNumber || !customerName) {
      alert('Mohon isi Nomor Nota dan Nama Pelanggan.');
    } else {
      // Logika untuk pengecekan invoice (dapat ditambahkan di sini)
      alert(`Invoice berhasil dicek untuk Nomor Nota: ${notaNumber} dan Nama Pelanggan: ${customerName}`);
    }
  };  
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          {/* Bagian foto */}
          <img
            src="src/assets/bewstransparan.png"
            alt="Placeholder"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          {/* Bagian form login */}
          <Form className="mt-3">
            <h2 className="text-center mb-4">Check Invoice</h2>
            <Form.Group controlId="formBasicNumber">
              <Form.Label>Nomor Nota</Form.Label>
              <Form.Control type="number" placeholder="Masukkan No Kota" required />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Nama Pelanggan</Form.Label>
              <Form.Control type="text" placeholder="Masukkan Nama" required />
            </Form.Group>
                <br/>
            <Button variant="primary" type="submit" className="w-100">
              Cek Status 
            </Button>
            <br/>
            <br/>
            <br/>
            <br/>
            
            {/* <p className="mt-3 text-center">
              <a href="#">Forgot password?</a>
            </p> */}
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Invoice;
