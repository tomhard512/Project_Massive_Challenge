import React from 'react';
import { Container,Row,Col,Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; 
import '../home.css';

const HomePage = () => {
  const navigate = useNavigate(); 
  const backgroundStyles1 = {
    backgroundImage: `url('src/assets/landingbg.jpeg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const backgroundStyles2 = {
    // backgroundImage: `url('src/assets/background2.jpg')`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  const imageFileNames = ['dc.jpeg', 'unyell.jpeg', 'cuci_sepatubg.jpg', 'repaint.jpeg', 'repair.jpeg', 'spa.jpeg'];
   const descriptions = [
    { text: "Deskripsi Foto 1", bgColor: "bg-grey" },
    { text: "Deskripsi Foto 2", bgColor: "bg-blue" },
    { text: "Deskripsi Foto 3", bgColor: "bg-grey" },
    { text: "Deskripsi Foto 4", bgColor: "bg-blue" },
    { text: "Deskripsi Foto 5", bgColor: "bg-grey" },
    { text: "Deskripsi Foto 6", bgColor: "bg-blue" },
  ];
  const handleLihatSelengkapnya = () => {
    navigate('/service'); 
  };
  return (
    <div>
    <div className="bg-home" style={backgroundStyles1}>
      <Container className="content">
        <h1>Selamat Datang di Website Brews Treatment</h1>
        <h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit...
        </h4>
      </Container>
    </div>

    <div className="konten2" style={backgroundStyles2}>
    <Container className="content">
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
    </Container>
    </div>
    
    <div className="konten3">
        <Container className="content">
          <Row>
            <Col md={12}>
              <h2>Layanan</h2>
              <p>
              Kami telah mencuci ratusan ribu pasang sepatu, dan akan terus
              <br/>
              bertambah..percayakan pada kami melalui layanan cuci sepatu kami yaitu :
              </p>
            </Col>
          </Row>
          <Row>
          {imageFileNames.map((imageName, index) => (
  <Col key={index} md={4} className="mb-3">
    <div className={`image-container ${descriptions[index].bgColor}`}>
      <img
        src={`src/assets/${imageName}`}
        alt={`Foto ${index + 1}`}
        className="img-fluid custom-image"
      />
       {/* <p className="text-center image-description">{descriptions[index].text}</p> */}
    </div>
  </Col>
))}

</Row>
<Row>
<Col md={12}>
              <Button
                variant="primary"
                size="lg"
                block
                style={{ backgroundColor: '#001F3F', border: 'none' }}
                onClick={handleLihatSelengkapnya}
              >
                Ayo Cuci SepatuMu
              </Button>
            </Col>
          </Row>
 </Container>
 <br/>
 
 </div>
 </div>
  );
};

export default HomePage;
