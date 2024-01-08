import React, { useState } from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Cart from './Cart'
import '../service.css'
import axios from 'axios'
import { useAuth } from '../middelware/authContext';

const ServiceItem = ({ service, onAdd, onSubtract, onAddToCart }) => {
  const itemStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    border: '0px solid #ccc',
    padding: '20px',
    maxWidth: '300px',
    
    
    background: service.backgroundColor,
  };

  const imageUrl = service.id === 1
    ? 'src/assets/dc.jpeg'
    : service.id === 2
    ? 'src/assets/unyell.jpeg'
    : service.id === 3
    ? 'src/assets/cuci_sepatubg.jpg'
    : service.id === 4
    ? 'src/assets/repaint.jpeg'
    : service.id === 5
    ? 'src/assets/repair.jpeg'
    : 'src/assets/spa.jpeg';

  return (
    <Col xs={12} sm={6} md={4} style={itemStyle}>
      <Image
        src={imageUrl}
        className="square-image"
        alt={`Image for ${service.name}`}
        width="400"
        height="400"
      />
       <div style={{ maxWidth: '100%', marginTop: '10px' }}>
          <h5>{service.name}</h5>
          <p style={{ textAlign: 'justify' }}>{service.description}</p>
          <h5>{service.price}</h5>
          <div>
            <Button variant="outline-primary" onClick={() => onSubtract(service.id)}>-</Button>
            <span style={{ margin: '0 10px' }}>{service.quantity}</span>
            <Button variant="outline-primary" onClick={() => onAdd(service.id)}>+</Button>
          </div>
          <Link to={`/Cart/${service.id}`}>
          <Button variant="success" onClick={() => onAddToCart(service.id)} style={{ marginTop: '10px' }}>
            Add to Cart
          </Button>
        </Link>
      </div>
    </Col>
  );
};

const Service = () => {
  const {isToken} = useAuth()

  const [cartItems, setCartItems] = useState([]);
  const [services, setServices] = useState([
    { id: 1, name: 'Deep Cleaning', description: 'cuci semi foam secara keseluruhan & details proses kerja selama 3 hari', price:'Rp. 45.000', quantity: 0 },
    { id: 2, name: 'Unyellowing', description: 'Menghilangkan noda kuning pada sepatu kanvas putih', price:'Rp. 55.000', quantity: 0 },
    { id: 3, name: 'Fast Cleaning', description: 'cuci semi foam pada bagian-bagian tertentu tetapi tetap bersih,proses kerja 2 hari', price:'Rp. 65.000', quantity: 0 },
    { id: 4, name: 'Repainting & Coloring', description: 'Mengembalikan warna/mengganti warna sepatu yang pudar menjadi seperti baru, proses 5-7 hari', price:'Rp. 85.000', quantity: 0 },
    { id: 5, name: 'Repair', description: 'Perbaikan sepatu,ganti kulit atau bahan, ganti sol sepatu, dll.', price:'Rp. 45.000', quantity: 0 },
    { id: 6, name: 'Premium Spa', description: 'Cuci semi foam secara keseluruhan & details, proses kerja 1 hari', price:'Rp. 95.000', quantity: 0 },
  ]);

  const handleAdd = (id) => {
    setServices((prevServices) => {
      const newServices = [...prevServices];
      const index = newServices.findIndex((service) => service.id === id);
      newServices[index].quantity += 1;
      return newServices;
    });
  };

  const handleSubtract = (id) => {
    setServices((prevServices) => {
      const newServices = [...prevServices];
      const index = newServices.findIndex((service) => service.id === id);
      newServices[index].quantity = Math.max(0, newServices[index].quantity - 2);
      return newServices;
    });
  };

  const handleAddToCart = async (id) => {
    const selectedItem = services.find((service) => service.id === id);
    setCartItems((prevCartItems) => [...prevCartItems, selectedItem]);


    try {
      const response = await axios.post('http://localhost:3000/api/checkout', {
        user_id: 1,
        product_id: id,
        quantity: selectedItem.quantity,
        status: 'card'
      }, {
        headers: {
          'Authorization': `Bearer ${isToken}`,
          'Content-Type': 'application/json',
        },
      });

      console.log(`Item dengan ID ${id} ditambahkan ke keranjang dan disimpan ke database`, response.data);
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
    }
  };

  return (
    <Container fluid className="service">
      <Row className="text-center">
        <Col>
          <h2>Layanan</h2>
          <Row>
            {services.map((service) => (
              <ServiceItem
                key={service.id}
                service={service}
                onAdd={handleAdd}
                onSubtract={handleSubtract}
                onAddToCart={handleAddToCart}
              />
            ))}
          </Row>
        </Col>
      </Row>

      <Cart cartItems={cartItems} />
    </Container>
  );
};

export default Service;
