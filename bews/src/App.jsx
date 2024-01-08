// App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import About from './components/AboutPage'; 
import Footer from './components/Footer';
import Service from './components/Service';
import LoginForm from './components/Formlogin';
import Detailpesanan from './components/Detailpesanan'; 
import Galeri from './components/Galeri';
import Invoice from './components/Invoice';
import Kontak from './components/Kontak';
import SignupForm from './components/Signup';
import Cart from './components/Cart';
import Datacostumer from './components/Datacustomer';
import Pesanan from './components/Pesananditerima';
import Profile from './components/Profile';
import InvoiceSalah from './components/InvoiceSalah';
import InvoiceBenar from './components/InvoiceBenar';
import PaymentDetail from './components/PaymentDetail';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/Formlogin" element={<LoginForm />} />
        <Route path="/Signup" element={<SignupForm />} />
        <Route path="/Detailpesanan" element={<Detailpesanan />} />
        <Route path="/Galeri" element={<Galeri />} />
        <Route path="/Invoice" element={<Invoice />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/:id" element={<Cart />} />
        <Route path="/Datacostumer" element={<Datacostumer />} />
        <Route path="/Pesananditerima" element={<Pesanan />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/InvoiceSalah" element={<InvoiceSalah />} />
        <Route path="/InvoiceBenar" element={<InvoiceBenar />} />
        <Route path="/PaymentDetail" element={<PaymentDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
