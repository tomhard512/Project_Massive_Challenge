import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../customer.css';

const Datacostumer = () => {
    const [customerData, setCustomerData] = useState({
      nama: '',
      alamat: '',
      noHp: '',
      email: '',
    });
  
    const [productData, setProductData] = useState([
      { namaProduk: 'Produk 1', harga: 100 },
      { namaProduk: 'Produk 2', harga: 150 },
    ]);
  
    const subtotal = productData.reduce((acc, product) => acc + product.harga, 0);
  
    const [paymentMethod, setPaymentMethod] = useState('');
  
    const handlePaymentMethodChange = (method) => {
      setPaymentMethod(method);
    };
  
    const handleOrderSubmit = () => {
        alert('Pesanan berhasil dipesan!');
    };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4">
          <h2>Data Customer</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="nama" className="form-label">Nama</label>
              <input type="text" className="form-control" id="nama" value={customerData.nama} onChange={(e) => setCustomerData({ ...customerData, nama: e.target.value })} />
            </div>
            <div className="mb-3">
              <label htmlFor="alamat" className="form-label">Alamat</label>
              <input type="text" className="form-control" id="alamat" value={customerData.alamat} onChange={(e) => setCustomerData({ ...customerData, alamat: e.target.value })} />
            </div>
            <div className="mb-3">
              <label htmlFor="noHp" className="form-label">No HP</label>
              <input type="text" className="form-control" id="noHp" value={customerData.noHp} onChange={(e) => setCustomerData({ ...customerData, noHp: e.target.value })} />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" value={customerData.email} onChange={(e) => setCustomerData({ ...customerData, email: e.target.value })} />
            </div>
          </form>
        </div>

        <div className="col-md-4">
          <h2>Produk</h2>
          {productData.map((product, index) => (
            <div key={index}>
              <p>{product.namaProduk}: ${product.harga}</p>
            </div>
          ))}
        </div>

        <div className="col-md-4">
          <h2>Sub Total</h2>
          {productData.map((product, index) => (
            <div key={index}>
              <p>{product.namaProduk}: ${product.harga}</p>
            </div>
          ))}
          <p>Subtotal: ${subtotal}</p>
          <p>Total: ${subtotal}</p>
          
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="COD"
                checked={paymentMethod === 'COD'}
                onChange={() => handlePaymentMethodChange('COD')}
              />
              COD
            </label>
         
         
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="Cash"
                checked={paymentMethod === 'Cash'}
                onChange={() => handlePaymentMethodChange('Cash')}
              />
              Cash
            </label>
          
        </div>
      </div>

      <div className="row justify-content-center">
        <Button variant="primary" type="submit" className="w-30" onClick={handleOrderSubmit}>
          Pesan Layanan
        </Button>
      </div>

      <br />
      <br />
    </div>
  );
};

export default Datacostumer;
