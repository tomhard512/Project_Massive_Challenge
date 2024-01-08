import React from 'react';
import {  Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Pesanan() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          
          <img
            src="src/assets/spray-bottle.png"
            alt="Placeholder"
            className="img-fluid"
          />
        </div>  
        <div className="col-md-6">
          <h2 className="text-center mb-4 text-justify">Pesanan Diterima!</h2>
          <p className="text-center mb-4 text-justify">Nomor tagihan #?????</p>
          <p className="text-center mb-4 text-justify">Klik dibawah ini untuk mengecek tagihan anda</p>
          
          <Button variant="primary" type="submit" className="w-100 navy-button">
                Check Invoice
              </Button>
            <br/>
            <br/>
            <br/>
            <br/>
          
        </div>
      </div>
    </div>
  );
}

export default Pesanan;
