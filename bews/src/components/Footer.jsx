import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import '../footer.css';

const Footer = () => {
  return (
<footer className="bg-dark text-light">
  <Container>
    <Row>
      <Col md={4}>
        
        <div className="footer-left">
         
          <img src="src/assets/bewstransparan.png" alt="Logo" className="footer-logo" />
         
          <p>Bews Treatment siap membersihkan dan membuat sepatu anda layaknya seperti baru kembali.</p>
        </div>
      </Col>
      <Col md={8}>
       
        <div className="footer-contact">
          
          <p>Alamat: Jalan babakan no.21 RT002/RW007 Gandaria Utara, Kebayoran Baru, Jakarta Selatan</p>
          <p>Email: bewstreatment@example.com</p>
          <p>Telepon: 0887781494959</p>
        </div>
        
        <div className="footer-social">
          
          <div className="social-media-icons">
            <img src="src/assets/facebook.png" alt="Social Media 1" />
            <img src="src/assets/twitter.png" alt="Social Media 2" />
            <img src="src/assets/instagram.png" alt="Social Media 3" />
          </div>
        </div>
      </Col>
    </Row>
  </Container>
  
  {/* <div className="text-center py-2">
    <p className="mb-0">&copy; {new Date().getFullYear()} Bews Treatment. Hak Cipta Dilindungi.</p>
  </div> */}
</footer>
  );
};
export default Footer;