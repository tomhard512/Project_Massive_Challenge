import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../about.css';

const About = () => {
  return (
    <Container>
      <Row>
        <Col md={6}>
          <img
            src="src/assets/bewstransparan.png"
            alt="Foto"
            className="img-fluid"
          />
        </Col>
        <Col md={6}>
          <h2>Tentang Bews Treatment</h2>
          <p>
          didirikan sejak 2021 dimana dimasa pandemi corona, owner ingin mempunyai usaha tambahan, dimulai dari pelatihan hingga saat ini mendirikan usaha cuci  sepatu bernama “Bews Treatment” dimana pengambilan nama tersebut diambil dari nama panggilan owner sendiri saat masih berkerja di Gojek Operasional Kemang.
          </p>
          <p>
          dengan metode pembersihan yang tepat oleh tenaga yang profesional. Kami menggunakan chemical yang aman, steam ozon & disinfection light UVC, sepatu dan tas anda bersih total dan terhindar dari bau apek, bakteri & virus. Gratis pickup & delivery area Jabodetabek.
“Anda dirumah saja, kami jemput sepatu tas kotor Anda, promo 3 pasang sepatu gratis layanan pickup & delivery, asuransi kehilangan dari paxel, booking sekarang”.</p>
        </Col>
      </Row>
      <div className="additional-content">
      <Row>
        <Col>
          <h3>Sepenting Apa Sih Sepatu ?</h3>
          <p>
          Bagi kami sepatu adalah sesuatu yang memiliki nilai tersendiri, khususnya bagi pemiliknya. sudah menjadi kewajiban bagi kami untuk memberikan perawatan terbaik pada sepatu kesayangan customer kami.
dengan metode pembersihan yang tepat oleh tenaga yang profesional. Kami menggunakan chemical yang aman, steam ozon & disinfection light UVC, sepatu anda bersih total dan terhindar dari bau apek, bakteri & virus. Gratis pickup & delivery area Jabodetabek.
“Anda dirumah saja, kami jemput sepatu tas kotor Anda, promo 3 pasang sepatu gratis layanan pickup & delivery, asuransi kehilangan dari paxel, booking sekarang”.
          </p>
        </Col>
      </Row>
      </div>
      <br/>
    </Container>
    
  );
};

export default About;