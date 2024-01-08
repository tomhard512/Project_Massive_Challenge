import React from 'react';
import { useParams } from 'react-router-dom';
import '../cart.css'

const Cart = () => {
  const { id } = useParams();

  const itemData = {
    1: { name: 'Deep Cleaning', price: 'Rp. 45.000', image: 'src/assets/dc.jpeg' },
    2: { name: 'Unyellowing', price: 'Rp. 55.000', image: 'src/assets/unyell.jpeg' },
    3: { name: 'Fast Cleaning', price: 'Rp. 65.000', image: 'src/assets/cuci_sepatubg.jpg' },
    4: { name: 'Repainting & Coloring', price: 'Rp. 85.000', image: 'src/assets/repaint.jpeg' },
    5: { name: 'Repair', price: 'Rp. 45.000', image: 'src/assets/repair.jpeg' },
    6: { name: 'Premium Spa', price: 'Rp. 95.000', image: 'src/assets/spa.jpeg' },
  };

  const selectedItem = itemData[id];

  if (!selectedItem) {
    return <div>Item not found</div>;
  }

  const { name, price, image: imagePath } = selectedItem;

  return (
    <div>
      <h2>Detail Item</h2>
      <img src={imagePath} alt={`Image for ${name}`} width="300" height="300" />
      <p>Nama: {name}</p>
      <p>Harga: {price}</p>
      
    </div>
  );
};

export default Cart;
